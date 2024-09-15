import gql from 'graphql-tag';

export const SignUpUser = gql`
  mutation SignUpUser(
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUp(
      input: {
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) {
      ... on Token {
        accessToken
        tokenType
        refreshToken
        expiresIn
      }
      ... on InvalidPasswordError {
        message
      }
      ... on PasswordTooShortError {
        message
      }
      ... on InvalidEmailError {
        message
      }
      ... on PasswordMismatchError {
        message
      }
      ... on EmailAlreadyExistsError {
        message
      }
    }
  }
`;
