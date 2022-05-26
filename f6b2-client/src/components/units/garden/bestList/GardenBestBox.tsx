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

const Background2 = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  object-fit: cover;
  z-index: 1;
  position: absolute;
`;

const Background3 = styled.img`
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

  console.log("IMAGE", typeof data?.fetchBoardImage[0]?.image);

  const onClickMoveToDetail = () => {
    router.push("/garden/" + props.el.id);
  };

  return (
    <GardenBest onClick={onClickMoveToDetail}>
      {/* {props.el.video !== "" ? (
        <Background2 src={props.el.video} autoPlay loop muted />
      ) : props.el.video === "" && data?.fetchBoardImage[0]?.image === "" ? (
        <Background3 />
      ) : (
        <Background src={data?.fetchBoardImage[0]?.image} />
      )} */}

      {/* {props.el.video && data?.fetchBoardImage[0]?.image ? (
        <Background2 src={props.el.video} autoPlay loop muted />
      ) : data?.fetchBoardImage[0]?.image ? (
        <Background src={data?.fetchBoardImage[0]?.image} />
      ) : (
        <Background3 />
      )} */}

      {data?.fetchBoardImage[0]?.image === undefined && (
        <Background3 src="https://cdn.discordapp.com/attachments/974505238029533295/976294038162530364/default.jpg" />
      )}

      {data?.fetchBoardImage[0]?.image !== undefined && (
        <Background src={data?.fetchBoardImage[0]?.image} />
      )}
      {props.el.video !== "" && (
        <Background2 src={props.el.video} autoPlay loop muted />
      )}

      {props.el.video === "" && (
        <Background src={data?.fetchBoardImage[0]?.image} />
      )}

      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </GardenBest>
  );
}
