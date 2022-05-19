import { gql } from "@apollo/client";

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
      points
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
      writer {
        id
        name
      }
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

export const SAVE_BOARD = gql`
  mutation saveBoard($boardId: String!, $userId: String!) {
    saveBoard(boardId: $boardId, userId: $userId)
  }
`;

export const FETCH_SAVED_BOARDS = gql`
  query fetchSavedBoards($userId: String!) {
    fetchSavedBoards(userId: $userId) {
      id
      board {
        id
        content
      }
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: Upload!) {
    uploadFile(files: $files)
  }
`;

// 댓글 작성
export const CREATE_COMMENT = gql`
  mutation createComment(
    $createCommentInput: CreateCommentInput!
    $boardId: String!
  ) {
    createComment(createCommentInput: $createCommentInput, boardId: $boardId) {
      id
      content
      likes
      image
      video
      writer {
        id
        name
        myLang
        newLang
      }
      createdAt
    }
  }
`;

// 댓글 리스트
export const FETCH_COMMENTS = gql`
  query fetchComments($boardId: String!) {
    fetchComments(boardId: $boardId) {
      id
      content
      likes
      image
      video
      writer {
        name
        image
      }
      createdAt
    }
  }
`;

// 댓글 삭제
export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;
