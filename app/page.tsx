'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppRoutes } from './lib/constants';
import { AuthContext } from './context/AuthProvider';

function App() {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) {
      router.push(AppRoutes.home);
    } else {
      router.push(AppRoutes.login);
    }
  }, [isAuthenticated]);
  return <></>;
}

export default App;
