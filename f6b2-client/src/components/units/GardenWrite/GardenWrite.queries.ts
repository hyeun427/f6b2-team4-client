import { gql } from '@apollo/client';

export const CREATE_BOARD_IMAGE = gql`
  mutation createBoardImage($image: [String!]!, $board: String!) {
    createBoardImage(image: $image, board: $board) {
      id
      image
    }
  }
`;
