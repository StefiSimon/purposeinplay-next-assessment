import AppRouter from 'next/dist/client/components/app-router';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AppRoutes } from './lib/constants';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken'); // Assume token is stored in cookies

  // If there is no token, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL(AppRoutes.login, request.url));
  }

  // Allow the request if token exists
  return NextResponse.next();
}

// Define the routes that need to be protected
export const config = {
  matcher: ['/'], // Use the path you want to protect
};
