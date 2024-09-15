'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppRoutes } from './lib/constants';

export default function App() {
  const router = useRouter();
  useEffect(() => {
    router.push(AppRoutes.home);
  }, []);
  return <></>;
}
