import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import GardenBestListUI from "./GardenBestList.presenter";

const FETCH_BOARDS = gql`
  query fetchBoards($bestboardCount: Float, $myLang: String) {
    fetchBoards(bestboardCount: $bestboardCount, myLang: $myLang) {
      id
      content
      video
      likes
      writer {
        id
        name
        image
      }
      createdAt
    }
  }
`;

export default function GardenBestList() {
  const [loginInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      bestboardCount: 4,
      myLang: loginInfo?.newLang,
    },
  });
  return <GardenBestListUI data={data} />;
}
