import { gql } from "@apollo/client";

// 커뮤니티 글 목록 가져오기
export const FETCH_COMMUNITY_BOARDS = gql`
	query fetchCommunityBoards(
		id
		title
		contents
		likes
		images
		writer {
      id
      name
    }
	)
`;
