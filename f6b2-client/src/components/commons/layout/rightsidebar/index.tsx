import styled from '@emotion/styled';
import ArchiveContainer from '../../../units/archivelist/archivelist.container';

const LayoutSidebar = styled.div`
  padding-top: 123px;
  width: 416px;
  height: auto;
`;

export default function RightSidebar() {
  return (
    <LayoutSidebar>
      <ArchiveContainer />
    </LayoutSidebar>
  );
}
