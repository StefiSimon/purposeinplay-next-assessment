import gql from 'graphql-tag';

export const GetUser = gql`
  query GetUser {
    user {
      ... on User {
        id
        email
        role
        referralToken
        invitesLeft
        invitedBy
        confirmedAt
      }
      ... on InvalidTokenError {
        message
      }
      ... on UserNotFoundError {
        user_id
      }
    }
  }
`;
