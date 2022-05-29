import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../../commons/store';
import {
  DELETE_COMMENT,
  FETCH_COMMENTS,
  LIKE_COMMENT,
} from '../../../../commons/queries';
import GardenDetailCommentListUI from './GardenDetailCommentList.presenter';

export default function GardenDetailCommentList(props: any) {
  const { data: comments } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: props.boardElId,
    },
  });
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [loginInfo] = useRecoilState(userInfoState);

  const onClickDeleteComment = async (event) => {
    try {
      await deleteComment({
        variables: {
          commentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardElId,
            },
          },
        ],
      });
      alert('댓글삭제!');
    } catch (error) {
      alert(error);
    }
  };

  const [commentEditVal, setCommentEditVal] = useState([false]);
  // 댓글수정버튼 클릭 시, 수정창이 보인다
  console.log(commentEditVal);
  const commentEditBtn = (index) => (event) => {
    const newCommentEditVal = [...commentEditVal];
    newCommentEditVal[index] = !commentEditVal[index];
    setCommentEditVal(newCommentEditVal);
  };

  // 댓글 좋아요
  const [likeComment] = useMutation(LIKE_COMMENT);
  const onClickCommentLike = async (event) => {
    try {
      await likeComment({
        variables: {
          commentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardElId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <GardenDetailCommentListUI
      boardElId={props.boardElId}
      comments={comments}
      onClickDeleteComment={onClickDeleteComment}
      commentEditBtn={commentEditBtn}
      commentEditVal={commentEditVal}
      loginInfo={loginInfo}
      onClickCommentLike={onClickCommentLike}
    />
  );
}
