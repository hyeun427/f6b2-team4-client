import { gql } from '@apollo/client';

export const FETCH_MYLIKED_COMMENT = gql`
  query fetchLikedComment($userId: String!) {
    fetchLikedComment(userId: $userId) {
      id
      isLiked
      comment {
        content
        id
      }
    }
  }
`;
