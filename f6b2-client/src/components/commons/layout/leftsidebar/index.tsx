import styled from '@emotion/styled';
import DailyWordContainer from '../../../units/dailyword/dailyword.container';
import GardenWriteContainer from '../../../units/GardenWrite/GardenWrite.container';

const LayoutSidebar = styled.div`
  padding-top: 123px;
  width: 416px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export default function LeftSidebar() {
  return (
    <LayoutSidebar>
      <GardenWriteContainer />
      <DailyWordContainer />
    </LayoutSidebar>
  );
}
