import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    id
    content
    video
    likes
    writer {
      id
      name
    }
    createdAt
  }
`;

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: String!) {
    likeBoard(boardId: $boardId)
  }
`;
