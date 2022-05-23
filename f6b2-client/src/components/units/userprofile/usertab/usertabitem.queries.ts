import { gql } from '@apollo/client';

export const FETCH_BOARD_IMAGE = gql`
  query fetchBoardImage($boardId: String!) {
    fetchBoardImage(boardId: $boardId) {
      id
      image
    }
  }
`;
