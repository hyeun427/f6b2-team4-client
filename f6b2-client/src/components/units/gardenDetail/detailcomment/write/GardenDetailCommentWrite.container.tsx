import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from "../../../../commons/queries";
import GardenDetailCommentWriteUI from "./GardenDetailCommentWrite.presenter";

export default function GardenCommentWrite(props: any) {
  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [comment, setComment] = useState("");
  const router = useRouter();

  const onChangeComment = (event: any) => {
    setComment(event.target.value);
  };

  const onClickCommentWrite = async () => {
    try {
      await createComment({
        variables: {
          createCommentInput: {
            content: comment,
            image: fileUrls,
            video: videoUrls,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      alert("댓글작성성공!");
      setComment("");
      setFileUrls("");
      setVideoUrls("");
    } catch (error) {
      alert(error);
    }
  };

  const onClickCommentUpdate = async () => {
    const myVariables = {
      updateCommentInput: {},
      commentId: props.commentEl?.id,
    };

    if (comment !== "") {
      myVariables.updateCommentInput.content = comment;
    }

    try {
      await updateComment({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardElId,
            },
          },
        ],
      });
      alert("댓글수정 성공!");
      setComment("");
    } catch (error) {
      alert(error);
    }
  };

  // 1. 이미지 URL을 받기 위한 set 선언
  const [fileUrls, setFileUrls] = useState("");
  // 2. 업로드 컴포넌트에 넘겨줄 콜백 함수(?)
  const onChangeFileUrls = (fileUrl: string) => {
    setFileUrls(fileUrl);
  };

  // 비디오 올리기
  const [videoUrls, setVideoUrls] = useState("");
  const onChangeVideoUrls = (fileUrl: string) => {
    setVideoUrls(fileUrl);
  };

  return (
    <GardenDetailCommentWriteUI
      onChangeComment={onChangeComment}
      onClickCommentWrite={onClickCommentWrite}
      onClickCommentUpdate={onClickCommentUpdate}
      commentEl={props.commentEl}
      isEdit={props.isEdit}
      comment={comment}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onChangeVideoUrls={onChangeVideoUrls}
      videoUrls={videoUrls}
    />
  );
}
