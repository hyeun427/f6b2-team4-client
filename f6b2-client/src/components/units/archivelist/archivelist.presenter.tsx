import * as Archive from './archivelist.style';
import { BsBookmark } from 'react-icons/bs';
import ArchiveItemUI from './archivelistitem.presenter';
import { IArchive } from './archivelist.type';
import { v4 as uuidv4 } from 'uuid';

export default function ArchiveUI(props: IArchive) {
  return (
    <Archive.WrapperDiv>
      <Archive.WrapperRow>
        <BsBookmark />
        Archive
      </Archive.WrapperRow>
      <Archive.InputSearchBar placeholder='Search' />
      <Archive.WrapperItem>
        {props.data?.fetchSavedBoards.map((el) => (
          <ArchiveItemUI key={String(uuidv4())} el={el} />
        ))}
      </Archive.WrapperItem>
    </Archive.WrapperDiv>
  );
}
