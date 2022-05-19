import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      name
      email
      password
      myLang
      newLang
    }
  }
`;

export const EMAIL_CHECK = gql`
  mutation emailCheck($email: String!) {
    emailCheck(email: $email)
  }
`;

export const AUTH_NUM_CHECK = gql`
  mutation verification($email: String!, $token: String!) {
    verification(email: $email, token: $token)
  }
`;
