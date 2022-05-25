import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  CREATE_BOARD,
  FETCH_USER_LOGGED_IN,
  FETCH_BOARDS,
} from "../../commons/queries";

import { CREATE_BOARD_IMAGE } from "./GardenWrite.queries";
import GardenWriteUI from "./GardenWrite.presenter";

export default function GardenWriteContainer() {
  const [isContent, setIsContent] = useState("");
  const [fileUrls, setFileUrls] = useState([]);

  const [videoUrls, setVideoUrls] = useState('');
  const [isSave, setIsSave] = useState(false);


  const [createGarden] = useMutation(CREATE_BOARD);
  const [createImage] = useMutation(CREATE_BOARD_IMAGE);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 모달
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 가든 게시물 컨텐츠 입력값 받아오기
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setIsContent(event.target.value);
  };

  // 업로드 된 이미지 경로 받아오기
  const onChangeFileUrls = (fileUrl: string) => {
    const newFileUrls = [...fileUrls];
    newFileUrls.push(fileUrl);
    setFileUrls(newFileUrls);
  };

  const onClickImageDelete = (index) => () => {
    const newFileUrls = [...fileUrls];
    newFileUrls.splice(index, 1);
    setFileUrls(newFileUrls);
  };

  // 업로드 된 비디오 경로 받아오기
  const onChangeVideoUrls = (fileUrl: string) => {
    console.log(fileUrl);
    // const newVideoUrls = [...videoUrls];
    // newVideoUrls.push(fileUrl);
    setVideoUrls(fileUrl);
  };

  const onClickVideoDelete = () => {
    // const newFileUrls = [...fileUrls];
    // newFileUrls.splice(index, 1);
    setVideoUrls("");
  };

  // 가든 게시물 생성하기 버튼
  const onClickSave = async () => {
    if (isContent === "") {
      alert("Please Enter your words");
      return;
    }

    try {
      const { data: resultCreateBoard } = await createGarden({
        variables: {
          createBoardInput: {
            content: String(isContent),
            video: videoUrls,
          },
        },
      });

      // 이미지 쿼리
      const { data: imageResult } = await createImage({
        variables: {
          image: fileUrls,
          board: resultCreateBoard.createBoard.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      setIsContent("");
      setFileUrls([]);
      setVideoUrls("");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <GardenWriteUI
      onChangeContents={onChangeContents}
      onClickSave={onClickSave}
      data={data}
      isContent={isContent}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onChangeVideoUrls={onChangeVideoUrls}
      videoUrls={videoUrls}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      onClickImageDelete={onClickImageDelete}
      onClickVideoDelete={onClickVideoDelete}
      isSave={isSave}
    />
  );
}
