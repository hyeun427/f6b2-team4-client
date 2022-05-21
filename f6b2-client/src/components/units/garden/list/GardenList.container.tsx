import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import GardenListUI from "./GardenList.presenter";
import { FETCH_BOARDS, SAVE_BOARD } from "../../../commons/queries";
import { IBoard } from "../../../../commons/types/generated/types";
import { LIKE_BOARD } from "./GardenList.queries";

export default function GardenList() {
  const [saveGarden] = useMutation(SAVE_BOARD);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const [likeBoard] = useMutation(LIKE_BOARD);

  const [commentListVal, setCommentListVal] = useState([false]);

  // 댓글 펼치기
  const onClickCommentListBtn = (index) => (event) => {
    const newCommentOpen = [...commentListVal];
    newCommentOpen[index] = !commentListVal[index];
    setCommentListVal(newCommentOpen);
  };

  // 좋아요 클릭
  const onClickLikeBoard = async (event) => {
    console.log(event.currentTarget.id);
    try {
      await likeBoard({
        variables: {
          boardId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            variables: {
              boardId: event.target.id,
            },
          },
        ],
      });
      alert("좋아요!");
    } catch (error) {
      alert(error);
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

  // 무한스크롤
  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <GardenListUI
      commentListVal={commentListVal}
      onClickCommentListBtn={onClickCommentListBtn}
      data={data}
      onClickSaved={onClickSaved}
      loadFunc={loadFunc}
      onClickLikeBoard={onClickLikeBoard}
    />
  );
}
