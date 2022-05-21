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

export const FETCH_COMMUNITY_BOARDS = gql`
  query fetchCommunityBoards($pageSize: Float, $page: Float, $userId: String) {
    fetchCommunityBoards(pageSize: $pageSize, page: $page, userId: $userId) {
      id
      title
      content
      createdAt
      likes
      image
    }
  }
`;
