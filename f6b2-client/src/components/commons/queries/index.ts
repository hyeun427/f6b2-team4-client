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

export const FETCH_USERS = gql`
  query fetchUsers {
    fetchUsers {
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
  mutation saveBoard($boardId: String!) {
    saveBoard(boardId: $boardId)
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

// 댓글 수정
export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $updateCommentInput: UpdateCommentInput!
    $commentId: String!
  ) {
    updateComment(
      updateCommentInput: $updateCommentInput
      commentId: $commentId
    ) {
      id
    }
  }
`;

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;

// 커뮤니티 글 목록 가져오기
export const FETCH_COMMUNITY_BOARDS = gql`
  query fetchCommunityBoards {
    fetchCommunityBoards {
      id
      title
      content
      likes
      createdAt
      writer {
        id
        name
      }
    }
  }
`;

// 커뮤니티 글 가져오기
export const FETCH_COMMUNITY_BOARD = gql`
  query fetchCommunityBoard($communityBoardId: String!) {
    fetchCommunityBoard(communityBoardId: $communityBoardId) {
      id
      title
      content
      createdAt
      likes
      image
      writer {
        id
        name
      }
    }
  }
`;

// 커뮤니티 글 작성하기
export const CREATE_COMMUNITY_BOARD = gql`
  mutation createCommunityBoard(
    $createCommunityBoardInput: CreateCommunityBoardInput!
  ) {
    createCommunityBoard(
      createCommunityBoardInput: $createCommunityBoardInput
    ) {
      id
      title
      content
      createdAt
      likes
      image
      writer {
        id
        name
      }
    }
  }
`;
