import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FETCH_COMMUNITY_BOARD } from '../../../commons/queries';
import CommunityDetailUI from './CommunityDetail.presenter';
import {
  LIKE_COMMUNITY_BOARD,
  DELETE_COMMUNITY_BOARD,
} from './CommunityDetail.queries';

export default function CommunityDetail() {
  const router = useRouter();
  // 글 가져오기
  const { data } = useQuery(FETCH_COMMUNITY_BOARD, {
    variables: { communityBoardId: router.query.communityBoardId },
  });

  // 삭제gql 가져오기
  const [deleteCommunityBoard] = useMutation(DELETE_COMMUNITY_BOARD);

  // 리스트로 이동
  const onClickMoveToList = () => {
    router.push('/community');
  };

  // 글 수정하기
  const onClickMoveToEdit = () => {
    router.push(`/community/${router.query.communityBoardId}/edit`);
  };

  // 글 삭제하기
  const onClickDelete = async () => {
    try {
      await deleteCommunityBoard({
        variables: { communityBoardId: String(router.query.communityBoardId) },
      });
      alert('삭제가 완료되었습니다.');
      router.push('/community');
    } catch (error) {
      alert('에러ㅠ');
    }
  };
  const [isLike, setIsLike] = useState(false);
  // 커뮤니티 글 좋아요 gql 가져오기
  const [likeCommunityBoard] = useMutation(LIKE_COMMUNITY_BOARD);

  // 좋아요 누를 때
  const onClickLike = async () => {
    if (isLike) {
      setIsLike(false);
    } else {
      setIsLike(true);
    }

    try {
      await likeCommunityBoard({
        variables: { communityBoardId: String(router.query.communityBoardId) },
        refetchQueries: [
          {
            query: FETCH_COMMUNITY_BOARD,
            variables: {
              communityBoardId: String(router.query.communityBoardId),
            },
          },
        ],
      });
    } catch (error) {}
  };

  // 다른 유저 프로필로 이동
  const onClickUser = () => {
    router.push(`/profile/${data.fetchCommunityBoard.writer.id}`);
  };

  return (
    <CommunityDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      isLike={isLike}
      onClickUser={onClickUser}
    />
  );
}
