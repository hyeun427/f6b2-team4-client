import { useMutation, useQuery } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import {
  CREATE_BOARD,
  FETCH_USER_LOGGED_IN,
  FETCH_BOARDS,
} from '../../commons/queries';
import GardenWriteUI from './GardenWrite.presenter';

export default function GardenWriteContainer() {
  const [isContent, setIsContent] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);

  const [createGarden] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 가든 게시물 컨텐츠 입력값 받아오기
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setIsContent(event.target.value);
  };

  // 가든 게시물 생성하기 버튼
  const onClickSave = async () => {
    try {
      const response = await createGarden({
        variables: {
          createBoardInput: {
            content: String(isContent),
            // 비디오 URL 값이 필수값임
            // 현재 비디오 녹화 기능이 없어 임시 URL을 넣음
            video: 'temporary url',
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      setIsContent('');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <GardenWriteUI
      onChangeContents={onChangeContents}
      onClickSave={onClickSave}
      data={data}
    />
  );
}
