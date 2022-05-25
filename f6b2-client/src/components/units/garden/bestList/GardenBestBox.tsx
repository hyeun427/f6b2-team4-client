import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FETCH_BOARD_IMAGE } from "../../../commons/queries";

const GardenBest = styled.div`
  width: 116px;
  height: 210px;
  background-color: white;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  cursor: pointer;
  position: relative;
`;

const Profile = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: gray;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  object-fit: cover;
  z-index: 1;
  position: absolute;
`;

const ProfileWrapper = styled.div`
  padding: 10px;
  z-index: 2;
  position: absolute;
`;

export default function GardenBestBox(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_IMAGE, {
    variables: {
      boardId: props.el.id,
    },
  });
  console.log("aaaa", props.el);
  console.log("imageBest", data);

  const onClickMoveToDetail = () => {
    router.push("/garden/" + props.el.id);
  };
  return (
    <GardenBest onClick={onClickMoveToDetail}>
      <Background src={data?.fetchBoardImage[0]?.image} />
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </GardenBest>
  );
}
