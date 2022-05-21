import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { DELETE_COMMENT, FETCH_COMMENTS } from "../../../../commons/queries";
import GardenCommentListUI from "./GardenCommentList.presenter";

export default function GardenCommentList(props: any) {
  const { data: comments } = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: props.boardElId,
    },
  });
  const [deleteComment] = useMutation(DELETE_COMMENT);

  const onClickDeleteComment = async (event: any) => {
    console.log(event.target.id);
    try {
      await deleteComment({
        variables: {
          commentId: event.target.id,
        },
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
    />
  );
}
