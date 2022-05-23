import { useRouter } from 'next/router';
import * as Archive from './archivelist.style';
import { IArchiveItem } from './archivelist.type';

export default function ArchiveItemUI(props: IArchiveItem) {
  const router = useRouter();
  const onClickArchiveItem = () => {
    router.push(`/garden/${props.el.board.id}`);
  };
  console.log(props.el);
  return (
    <>
      {props.el.isSaved ? (
        <Archive.WrapperRowItem onClick={onClickArchiveItem}>
          <Archive.ImageItem src='https://picsum.photos/200' />
          <Archive.PItem>{props.el.board.content}</Archive.PItem>
        </Archive.WrapperRowItem>
      ) : (
        ''
      )}
    </>
  );
}
