import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_COMMENT, FETCH_COMMENTS } from "../../../../commons/queries";
import GardenCommentWriteUI from "./GardenCommentWrite.presenter";

export default function GardenCommentWrite(props: any) {
  const [createComment] = useMutation(CREATE_COMMENT);
  const [comment, setComment] = useState("");

  const onChangeComment = (event: any) => {
    setComment(event.target.value);
  };

  const onClickCommentWrite = async () => {
    try {
      await createComment({
        variables: {
          createCommentInput: {
            content: comment,
            image: "test",
            video: "test",
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
      alert("댓글작성성공!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <GardenCommentWriteUI
      onChangeComment={onChangeComment}
      onClickCommentWrite={onClickCommentWrite}
    />
  );
}
