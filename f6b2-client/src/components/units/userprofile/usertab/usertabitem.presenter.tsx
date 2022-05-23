import { useQuery } from '@apollo/client';
import { Router, useRouter } from 'next/router';
import { getDate } from '../../../../commons/libraries/utils';
import { FETCH_BOARD_IMAGE } from './usertabitem.queries';
import * as TabItem from './usertabitem.style';

export default function UserTabItemUI(props) {
  const router = useRouter();
  const { data: boardImage } = useQuery(FETCH_BOARD_IMAGE, {
    variables: { boardId: props.el.id },
  });
  const onClickMoveDetail = () => {
    props.istab === 'mygarden'
      ? router.push(`/garden/${props.el.id}`)
      : router.push(`/community/${props.el.id}`);
  };

  return (
    <TabItem.WrapperColItem onClick={onClickMoveDetail}>
      <TabItem.ImageItem
        src={
          props.istab === 'mygarden'
            ? boardImage?.fetchBoardImage[0]?.image.includes('http')
              ? boardImage?.fetchBoardImage[0]?.image
              : '/image/default1.jpg'
            : props.el.image.includes('http')
            ? props.el.image
            : '/image/default2.jpg'
        }
      />
      <TabItem.WrapperRowItem>
        <TabItem.PItemDate>{getDate(props.el.createdAt)}</TabItem.PItemDate>
        <TabItem.WrapperRowRightItem>
          <TabItem.IconLike />
          <TabItem.PItemLikeCount>{props.el.likes}</TabItem.PItemLikeCount>
        </TabItem.WrapperRowRightItem>
      </TabItem.WrapperRowItem>
    </TabItem.WrapperColItem>
  );
}
