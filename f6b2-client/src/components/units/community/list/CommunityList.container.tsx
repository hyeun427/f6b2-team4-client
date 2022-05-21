import CommunityListUI from "./CommunityList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  ICommunityBoard,
  IQuery,
} from "../../../../commons/types/generated/types";
import { FETCH_COMMUNITY_BOARDS } from "../../../commons/queries";
import {
  LIKE_COMMUNITY_BOARD,
  FETCH_COMMUNITY_BOARD,
} from "./CommunityList.queries";

export default function CommunityList() {
  const router = useRouter();
  const [like, setLike] = useState(false);

  //커뮤니티 글목록 데이터 가져오기
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchCommunityBoards">,
    Array<ICommunityBoard>
  >(FETCH_COMMUNITY_BOARDS);

  //커뮤니티 새 글 작성페이지로 이동
  const onClickMoveToWrite = () => {
    router.push("./community/write");
  };

  // 글 눌렀을 때 디테일 페이지 이동
  const onClickContent = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/community/${event.currentTarget.id}`);
  };

  // 커뮤니티 글 좋아요 gql 가져오기
  const [likeCommunityBoard] = useMutation(LIKE_COMMUNITY_BOARD);

  // 좋아요 누를 때
  const onClickLike = async () => {
    // setLike((prev) => !prev);
    try {
      await likeCommunityBoard({
        variables: { communityBoardId: String(router.query.communityBoardId) },
        refetchQueries: [
          {
            query: FETCH_COMMUNITY_BOARD,
            variables: {
              communityBoardId: String(router.query.communityBoardId),
            },
          },
        ],
      });
    } catch (error) {
      alert("에러ㅠ");
    }
  };

  return (
    <CommunityListUI
      // 글목록
      data={data}
      // 글 상세페이지 이동
      onClickContent={onClickContent}
      // 새 글 작성
      onClickMoveToWrite={onClickMoveToWrite}
      // 좋아요
      onClickLike={onClickLike}
      like={like}
    />
  );
}
