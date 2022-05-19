import * as Archive from './archivelist.style';
import { IArchiveItem } from './archivelist.type';
// import { PItem } from './archivelist.style';

export default function ArchiveItemUI(props: IArchiveItem) {
  console.log(props.el);
  return (
    <Archive.WrapperItem>
      <Archive.ImageItem src='https://picsum.photos/200' />
      <Archive.PItem>{props.el.board.content}</Archive.PItem>
    </Archive.WrapperItem>
  );
}
