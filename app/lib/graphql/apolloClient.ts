import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: 'https://auth-wgfk2stkvq-ew.a.run.app/query',
});

const authLink = setContext((_, { headers }) => {
  // Add authorization token if needed
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  // Return the headers with the Authorization token if it exists
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
