import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_COMMUNITY_BOARD } from "../../../../src/components/commons/queries";
import CommunityWrite from "../../../../src/components/units/community/write/CommunityWrite.container";

export default function CommunityEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_COMMUNITY_BOARD, {
    variables: { communityBoardId: router.query.communityBoardId },
  });

  return <CommunityWrite isEdit={true} data={data} />;
}
