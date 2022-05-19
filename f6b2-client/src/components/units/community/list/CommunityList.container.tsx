import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CommunityListUI from './CommunityList.presenter';
import { FETCH_COMMUNITY_BOARDS } from './CommunityList.queries';

export default function CommunityList(props) {
  const router = useRouter();
  const [like, setLike] = useState(false);

  //커뮤니티 글목록
  const { data } = useQuery(FETCH_COMMUNITY_BOARDS);

  //커뮤니티 새 글 작성페이지로 이동
  const onClickMoveToWrite = () => {
    router.push('./community/write');
  };

  // 좋아요 누를 때
  const onClickLike = () => {
    setLike((prev) => !prev);
  };

  return (
    <CommunityListUI
      // 글목록
      data={data}
      // 새 글 작성
      onClickMoveToWrite={onClickMoveToWrite}
      // 좋아요
      onClickLike={onClickLike}
      like={like}
    />
  );
}
