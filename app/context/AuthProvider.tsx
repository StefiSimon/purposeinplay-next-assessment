import { useRouter } from 'next/navigation';
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import { AppRoutes } from '../lib/constants';
import { useMutation } from '@apollo/client';
import { RefreshToken } from '../lib/graphql/schema/mutations/refreshToken';

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshUserToken, { loading, error, data }] =
    useMutation(RefreshToken);

  const router = useRouter();

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

  const signIn = (data: AuthResponse) => {
    setAccessToken(data?.accessToken);

    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('expiresIn', data.expiresIn.toString());

    router.push(AppRoutes.home);

    setTokenRefreshTimeout(data.expiresIn);
  };

  const signOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiresIn');

    setAccessToken(null);

    router.push(AppRoutes.login);
  };

  const refreshAuthToken = useCallback(async () => {
    const currentRefreshToken = localStorage.getItem('refreshToken');
    const { data } = await refreshUserToken({
      variables: { token: currentRefreshToken },
    });
    if (data.refreshToken?.accessToken) {
      setAccessToken(data.refreshToken.accessToken);
      localStorage.setItem('accessToken', data.refreshToken.accessToken);
      localStorage.setItem('expiresIn', data.refreshToken.expiresIn.toString());

      setTokenRefreshTimeout(data.refreshToken.expiresIn);
    } else {
      console.log('Error refreshing token: ', data.refreshToken);
      signOut();
    }
  }, []);

  const setTokenRefreshTimeout = (expiresIn: number) => {
    const timeout = (expiresIn - 60) * 1000;
    setTimeout(() => {
      refreshAuthToken();
    }, timeout);
  };

  useEffect(() => {
    const currentAccessToken = localStorage.getItem('accessToken');
    const currentRefreshToken = localStorage.getItem('refreshToken');
    const currentExpiresIn = localStorage.getItem('expiresIn');

    if (currentAccessToken && currentRefreshToken && currentExpiresIn) {
      const expiresInValue = parseInt(currentExpiresIn);
      setAccessToken(currentAccessToken);

      const remainingTime = expiresInValue - Math.floor(Date.now() / 1000);
      if (remainingTime > 0) {
        setTokenRefreshTimeout(remainingTime);
      } else {
        refreshAuthToken();
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signOut, accessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}
