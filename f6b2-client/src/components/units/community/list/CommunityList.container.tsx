import CommunityListUI from "./CommunityList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { FETCH_COMMUNITY_BOARDS } from "../../../commons/queries";

export default function CommunityList() {
  const router = useRouter();
  const [like, setLike] = useState(false);

  //커뮤니티 글목록 데이터 가져오기
  const { data } = useQuery(FETCH_COMMUNITY_BOARDS);

  //커뮤니티 새 글 쓰기
  const onClickMoveToWrite = () => {
    router.push("/community/write");
  };

  // 글 눌렀을 때 디테일 페이지 이동
  const onClickContent = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/community/${event.currentTarget.id}`);
  };

  // 좋아요 누를 때
  const onClickLike = () => {
    setLike((prev) => !prev);
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
