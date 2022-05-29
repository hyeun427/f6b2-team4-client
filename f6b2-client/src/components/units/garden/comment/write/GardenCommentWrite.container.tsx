import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from "../../../../commons/queries";
import GardenCommentWriteUI from "./GardenCommentWrite.presenter";

export default function GardenCommentWrite(props: any) {
  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const [comment, setComment] = useState("");
  const [loginInfo] = useRecoilState(userInfoState);

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
          boardId: props.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardId,
            },
          },
        ],
      });
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
    <GardenCommentWriteUI
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
      loginInfo={loginInfo}
    />
  );
}
