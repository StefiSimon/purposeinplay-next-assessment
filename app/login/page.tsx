'use client';
import {
  Box,
  Button,
  FormInput,
  OnboardingLayout,
  Separator,
  Typography,
  FacebookIcon,
  GoogleIcon,
  Link,
} from '../components';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '../lib/constants';
import { useCallback, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { SignInUser } from '../lib/graphql/schema/mutations/signIn';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const [signInUser, { loading, error, data }] = useMutation(SignInUser);

  useEffect(() => {
    setLoginError(null);
  }, [email, password]);

  const handleLoginClick = useCallback(
    async (e: any) => {
      e.preventDefault();

      try {
        const { data } = await signInUser({
          variables: {
            email,
            password,
          },
        });

        if (data.signIn.accessToken) {
          const { tokenType, accessToken, expiresIn, refreshToken } =
            data.signIn;

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          const expirationTime = new Date().getTime() + expiresIn * 1000;
          localStorage.setItem('tokenExpiry', expirationTime?.toString());

          router.push(AppRoutes.home);
          console.log('logged in!');
        } else if (data.signIn.message) {
          setLoginError(data.signIn.message);
        } else if (data.signIn.user_id) {
          setLoginError(`user not found`);
        }
      } catch (err) {
        console.error('Login error', err);
      }
    },
    [email, password, loginError]
  );
  const onGoToSignUpClick = () => {
    router.push(AppRoutes.signup);
  };
  return (
    <OnboardingLayout>
      <OnboardingLayout.Card>
        <Box direction="col" className="items-center">
          <Typography.h2>Sign in to your Account</Typography.h2>
          <Box direction="row" className="gap-1 mt-1">
            <Typography.Paragraph>Don’t have an account?</Typography.Paragraph>
            <Link onClick={onGoToSignUpClick}>Sign Up</Link>
          </Box>
          <Box direction="row" className="w-full mt-8 mb-7 gap-2">
            <Button variant="surface" width="full" onClick={console.log}>
              <GoogleIcon />
              Google
            </Button>
            <Button variant="surface" width="full" onClick={console.log}>
              <FacebookIcon />
              Facebook
            </Button>
          </Box>
        </Box>
        <Separator />
        <Box direction="col" className="gap-4">
          <FormInput
            id="email"
            name="email"
            type="text"
            label="Email"
            placeholder="headagok@email.com"
            onChange={setEmail}
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="*************"
            onChange={setPassword}
          />
        </Box>
        <Box direction="row" className="justify-start gap-1 my-6">
          <Typography.Paragraph>Forgot your password?</Typography.Paragraph>
          <Typography.h4 className="text-textPrimary">Recover</Typography.h4>
        </Box>
        {loginError && (
          <div className="text-xs text-alert mb-6">
            Login failed: {loginError}
          </div>
        )}
        <Button
          variant="primary"
          size="small"
          width="full"
          onClick={handleLoginClick}
        >
          Sign In
        </Button>
      </OnboardingLayout.Card>
    </OnboardingLayout>
  );
}
