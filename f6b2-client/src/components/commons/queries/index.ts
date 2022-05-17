import { gql } from '@apollo/client';

export const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUser {
    fetchUser {
      id
      name
      email
      myLang
      newLang
      image
      password
    }
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      id
      content
      video
      likes
      createdAt
      # 나중에 writer 추가해야한
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      content
      video
      likes
      writer {
        id
        name
        email
        myLang
        newLang
      }
    }
  }
`;
