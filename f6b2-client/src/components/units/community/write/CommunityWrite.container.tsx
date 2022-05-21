import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_COMMUNITY_BOARD } from "../../../commons/queries";
import CommunityWriteUI from "./CommunityWrite.presenter";

export default function CommunityWrite() {
  const router = useRouter();

  const [createCommunityBoard] = useMutation(CREATE_COMMUNITY_BOARD);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (value) => {
    setContent(value);
  };

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
      console.log(result);
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
    />
  );
}
