import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_COMMUNITY_BOARD } from "../../src/components/commons/queries";
import CommunityList from "../../src/components/units/community/list/CommunityList.container";

export default function CommunityPage() {
  // const router = useRouter();
  // const { data } = useQuery(FETCH_COMMUNITY_BOARD, {
  //   variables: { communityBoardId: router.query.communityBoardId },
  // });

  return <CommunityList isLike={true} />;
}
