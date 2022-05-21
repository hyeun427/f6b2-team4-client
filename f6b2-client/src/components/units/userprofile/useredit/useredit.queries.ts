import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation updateUser(
    $originalPassword: String!
    $updateUserInput: UpdateUserInput!
  ) {
    updateUser(
      originalPassword: $originalPassword
      updateUserInput: $updateUserInput
    ) {
      myLang
      newLang
    }
  }
`;
