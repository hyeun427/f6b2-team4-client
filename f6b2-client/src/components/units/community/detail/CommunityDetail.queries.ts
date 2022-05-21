import { gql } from "@apollo/client";

// 커뮤니티 글 삭제
export const DELETE_COMMUNITY_BOARD = gql`
  mutation deleteCommunityBoard($communityBoardId: String!) {
    deleteCommunityBoard(communityBoardId: $communityBoardId)
  }
`;
