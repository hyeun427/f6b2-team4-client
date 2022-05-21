import * as Archive from './archivelist.style';
import { IArchiveItem } from './archivelist.type';

export default function ArchiveItemUI(props: IArchiveItem) {
  return (
    <>
      {props.el.isSaved ? (
        <Archive.WrapperRowItem>
          <Archive.ImageItem src='https://picsum.photos/200' />
          <Archive.PItem>{props.el.board.content}</Archive.PItem>
        </Archive.WrapperRowItem>
      ) : (
        ''
      )}
    </>
  );
}
