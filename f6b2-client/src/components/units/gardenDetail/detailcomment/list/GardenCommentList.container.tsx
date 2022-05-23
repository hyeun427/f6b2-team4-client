import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import { DELETE_COMMENT, FETCH_COMMENTS } from "../../../../commons/queries";
import GardenCommentListUI from "./GardenCommentList.presenter";
import * as timeago from "timeago.js";
import ko from "timeago.js/lib/lang/ko";

export default function GardenDetailCommentList(props: any) {
  timeago.register("ko", ko);

  const { data: comments } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: props.boardElId,
    },
  });
  const [deleteComment] = useMutation(DELETE_COMMENT);
  const [loginInfo] = useRecoilState(userInfoState);

  const onClickDeleteComment = async (event) => {
    console.log(event.target.id);
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
      alert("댓글삭제!");
    } catch (error) {
      alert(error);
    }
  };

  const [commentEditVal, setCommentEditVal] = useState([false]);
  // 댓글수정버튼 클릭 시, 수정창이 보인다
  const commentEditBtn = (index) => (event) => {
    const newCommentEditVal = [...commentEditVal];
    newCommentEditVal[index] = !commentEditVal[index];
    setCommentEditVal(newCommentEditVal);
  };

  return (
    <GardenCommentListUI
      boardElId={props.boardElId}
      comments={comments}
      onClickDeleteComment={onClickDeleteComment}
      commentEditBtn={commentEditBtn}
      commentEditVal={commentEditVal}
      loginInfo={loginInfo}
    />
  );
}
