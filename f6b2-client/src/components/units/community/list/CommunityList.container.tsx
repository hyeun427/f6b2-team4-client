import { useRouter } from "next/router";
import CommunityListUI from "./CommunityList.presenter";

export default function CommunityList() {
  const router = useRouter();

  //커뮤니티 새 글 작성페이지로 이동
  const onClickMoveToWrite = () => {
    router.push("./community/write");
  };

  return <CommunityListUI onClickMoveToWrite={onClickMoveToWrite} />;
}
