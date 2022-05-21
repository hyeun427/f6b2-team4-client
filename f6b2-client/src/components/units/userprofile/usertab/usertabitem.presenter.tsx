import { getDate } from '../../../../commons/libraries/utils';
import * as TabItem from './usertab.style';

export default function UserTabItemUI(props) {
  return (
    <TabItem.WrapperColItem>
      <TabItem.ImageItem src={props.el.image} />
      <TabItem.WrapperRowItem>
        <TabItem.PItemDate>{getDate(props.el.createdAt)}</TabItem.PItemDate>
        <TabItem.WrapperRowItem>
          <TabItem.IconLike />
          <TabItem.PItemLikeCount>{props.el.likes}</TabItem.PItemLikeCount>
        </TabItem.WrapperRowItem>
      </TabItem.WrapperRowItem>
    </TabItem.WrapperColItem>
  );
}
