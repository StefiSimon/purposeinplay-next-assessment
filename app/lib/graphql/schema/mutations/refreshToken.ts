import gql from 'graphql-tag';

export const RefreshToken = gql`
  mutation RefreshToken($token: String!) {
    refreshToken(input: { token: $token }) {
      ... on Token {
        accessToken
        tokenType
        refreshToken
        expiresIn
      }
      ... on UserNotFoundError {
        user_id
      }
      ... on InvalidTokenError {
        message
      }
      ... on EmailNotConfirmedError {
        message
      }
    }
  }
`;
