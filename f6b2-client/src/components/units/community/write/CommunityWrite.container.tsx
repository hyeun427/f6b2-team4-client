import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, ChangeEventHandler, useRef, useState } from "react";
import { checkFileValidation } from "../../../../commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { CREATE_COMMUNITY_BOARD } from "../../../commons/queries";
import CommunityWriteUI from "./CommunityWrite.presenter";

export default function CommunityWrite() {
  const router = useRouter();

  const [createCommunityBoard] = useMutation(CREATE_COMMUNITY_BOARD);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  // 제목 작성 시
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  // 내용 작성 시
  const onChangeContent = (value) => {
    setContent(value);
  };

  // 이미지 업로드 시
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {};

  const onClickSubmit = async () => {
    try {
      const result = await createCommunityBoard({
        variables: {
          createCommunityBoardInput: {
            title,
            content,
            image,
          },
        },
      });
      alert("등록성공");
      router.push(`/community/${result.data.createCommunityBoard.id}`);
    } catch (error) {
      alert("실패ㅠ");
    }
  };
  return (
    <CommunityWriteUI
      onClickSubmit={onClickSubmit}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeFile={onChangeFile}
    />
  );
}
