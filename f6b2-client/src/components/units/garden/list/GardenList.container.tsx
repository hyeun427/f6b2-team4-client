import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import GardenListUI from './GardenList.presenter';
import { FETCH_BOARDS, SAVE_BOARD } from '../../../commons/queries';
import { IBoard } from '../../../../commons/types/generated/types';

export default function GardenList() {
  const [commentListVal, setCommentListVal] = useState(false);
  const [saveGarden] = useMutation(SAVE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickCommentListBtn = () => {
    if (commentListVal === false) {
      setCommentListVal(true);
    } else {
      setCommentListVal(false);
    }
  };

  // 저장하기 버튼 클릭 함수

  const onClickSaved = async (data: IBoard) => {
    try {
      const result = await saveGarden({
        variables: {
          boardId: data.id,
          userId: data.writer.id,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <GardenListUI
      commentListVal={commentListVal}
      onClickCommentListBtn={onClickCommentListBtn}
      data={data}
      onClickSaved={onClickSaved}
    />
  );
}
