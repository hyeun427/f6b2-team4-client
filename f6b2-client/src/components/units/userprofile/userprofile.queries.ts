import { gql } from '@apollo/client';

export const FETCH_USER_ID = gql`
  query fetchUserId($userId: String!) {
    fetchUserId(userId: $userId) {
      id
      name
      email
      myLang
      newLang
      image
      points
    }
  }
`;
