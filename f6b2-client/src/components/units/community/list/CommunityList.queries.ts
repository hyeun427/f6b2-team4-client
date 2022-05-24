import { gql } from "@apollo/client";

// 커뮤니티 좋아요
export const LIKE_COMMUNITY_BOARD = gql`
  mutation likeCommunityBoard($communityBoardId: String!) {
    likeCommunityBoard(communityBoardId: $communityBoardId)
  }
`;

// 커뮤니티 글 불러오기
export const FETCH_COMMUNITY_BOARD = gql`
  query fetchCommunityBoard {
    fetchCommunityBoard {
      id
      title
      content
      image
      createdAt
      likes
      writer {
        id
        name
      }
    }
  }
`;

// 커뮤니티 글 목록 가져오기
export const FETCH_COMMUNITY_BOARDS = gql`
  query fetchCommunityBoards {
    fetchCommunityBoards {
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
