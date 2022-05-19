import * as TabItem from './usertab.style';

export default function UserTabItemUI() {
  return (
    <TabItem.WrapperColItem>
      <TabItem.ImageItem src='https://picsum.photos/id/237/200/300' />
      <TabItem.WrapperRowItem>
        <TabItem.PItemDate>2022.05.12</TabItem.PItemDate>
        <TabItem.WrapperRowItem>
          <TabItem.IconLike />
          <TabItem.PItemLikeCount>30</TabItem.PItemLikeCount>
        </TabItem.WrapperRowItem>
      </TabItem.WrapperRowItem>
    </TabItem.WrapperColItem>
  );
}
