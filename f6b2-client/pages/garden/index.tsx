import styled from '@emotion/styled';
// import ArchiveContainer from '../../src/components/units/archivelist/archivelist.container';
import GardenList from '../../src/components/units/garden/list/GardenList.container';
// import GardenWriteContainer from '../../src/components/units/GardenWrite/GardenWrite.container';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

// export const WrapperDivCreate = styled.div`
//   width: 316px;
//   height: auto;
//   position: relative;
//   top: 213px;
//   left: 89px;
// `;

// export const WrapperDivArchive = styled.div`
//   width: 316px;
//   height: auto;
//   position: relative;
//   top: 213px;
//   right: 300px;
// `;

export default function GardenPage() {
  return (
    <WrapperDiv>
      {/* <WrapperDivCreate>
        <GardenWriteContainer />
      </WrapperDivCreate> */}
      <GardenList />
      {/* <WrapperDivArchive>
        <ArchiveContainer />
      </WrapperDivArchive> */}
    </WrapperDiv>
  );
}
