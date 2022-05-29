import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { getDate } from '../../../commons/libraries/utils';
import { FETCH_BOARD_IMAGE } from '../userprofile/usertab/usertabitem.queries';
import * as Archive from './archivelist.style';
import { IArchiveItem } from './archivelist.type';

export default function ArchiveItemUI(props: IArchiveItem) {
  const router = useRouter();
  const { data: boardImage } = useQuery(FETCH_BOARD_IMAGE, {
    variables: { boardId: props.el.board.id },
  });
  const onClickArchiveItem = () => {
    router.push(`/garden/${props.el.board.id}`);
  };

  return (
    <>
      <Archive.WrapperRowItem onClick={onClickArchiveItem}>
        {props.el.board.video.includes('http') ? (
          <Archive.VideoItem src={props.el.board.video} autoPlay muted loop />
        ) : (
          <Archive.ImageItem
            src={
              boardImage?.fetchBoardImage[0]?.image.includes('http')
                ? boardImage?.fetchBoardImage[0]?.image
                : '/image/default1.jpg'
            }
          />
        )}
        <Archive.WrapperCol>
          <Archive.PItem>{props.el.board.content}</Archive.PItem>
          <Archive.PDate>{getDate(props.el.board.createdAt)}</Archive.PDate>
        </Archive.WrapperCol>
      </Archive.WrapperRowItem>
    </>
  );
}
