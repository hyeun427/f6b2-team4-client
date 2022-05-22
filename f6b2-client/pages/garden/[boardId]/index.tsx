import GardenDetail from "../../../src/components/units/gardenDetail/GardenDetail.container";
import styled from "@emotion/styled";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

export default function CommunityDetailPage() {
  return (
    <WrapperDiv>
      <GardenDetail />
    </WrapperDiv>
  );
}
