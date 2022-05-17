import { useRouter } from "next/router";
import CommunityListUI from "./CommunityList.presenter";

export default function CommunityList() {
  const router = useRouter();

  //커뮤니티 새 글 작성페이지로 이동
  const onClickMoveToWrite = () => {
    router.push("./community/write");
  };

  // 좋아요 누를 때
  const onClickLike = () => {};

  return (
    <CommunityListUI
      onClickMoveToWrite={onClickMoveToWrite}
      onClickLike={onClickLike}
    />
  );
}
