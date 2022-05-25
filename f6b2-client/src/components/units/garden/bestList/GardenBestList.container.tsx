import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import GardenBestListUI from "./GardenBestList.presenter";

const FETCH_BOARDS = gql`
  query fetchBoards($bestboardCount: Float, $language: String) {
    fetchBoards(bestboardCount: $bestboardCount, language: $language) {
      id
      content
      video
      likes
      writer {
        id
        name
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
      language: loginInfo?.myLang,
    },
  });
  return <GardenBestListUI data={data} />;
}
