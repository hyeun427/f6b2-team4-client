import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_COMMUNITY_BOARD } from "../../../commons/queries";
import CommunityDetailUI from "./CommunityDetail.presenter";

export default function CommunityDetail() {
  const router = useRouter();

  // 글 가져오기
  const { data } = useQuery(FETCH_COMMUNITY_BOARD, {
    variables: { communityBoardId: router.query.communityBoardId },
  });
  console.log(data);

  // 리스트로 이동
  const onClickMovetoList = () => {
    router.push("/community");
  };

  return (
    <CommunityDetailUI onClickMovetoList={onClickMovetoList} data={data} />
  );
}
