'use client';
import './globals.css';
import { ApolloProvider } from '@apollo/client';
import client from './lib/graphql/apolloClient'; // Path to your apollo client setup

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ApolloProvider client={client}>
          {children} {/* This renders the content of the pages */}
        </ApolloProvider>
      </body>
    </html>
  );
}
