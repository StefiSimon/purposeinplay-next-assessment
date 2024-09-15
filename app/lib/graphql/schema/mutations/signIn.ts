import gql from 'graphql-tag';

export const SignInUser = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      ... on Token {
        accessToken
        tokenType
        refreshToken
        expiresIn
      }
      ... on UserNotFoundError {
        user_id
      }
      ... on EmailNotConfirmedError {
        message
      }
      ... on InvalidPasswordError {
        message
      }
    }
  }
`;
