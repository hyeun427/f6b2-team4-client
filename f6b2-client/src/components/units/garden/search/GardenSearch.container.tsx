import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import GardenListUI from "./GardenSearch.presenter";
import {
  FETCH_BOARDS,
  FETCH_SAVED_BOARDS,
  SAVE_BOARD,
  SEARCH_BOARD_CONTENT,
} from "../../../commons/queries";
import { IBoard } from "../../../../commons/types/generated/types";
import { LIKE_BOARD } from "./GardenSearch.queries";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { useRouter } from "next/router";

export default function GardenSearch(props) {
  const router = useRouter();
  const [saveGarden] = useMutation(SAVE_BOARD);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const [likeBoard] = useMutation(LIKE_BOARD);
  //  로그인 된 회원 정보(글로벌)
  const [loginUserInfo] = useRecoilState(userInfoState);
  // 엑세스 토큰
  const [isToken, setIsToken] = useRecoilState(accessTokenState);

  // 검색 불러오기
  const { data: searchBoard } = useQuery(SEARCH_BOARD_CONTENT, {
    variables: {
      content: props.searchKeyword,
    },
  });

  console.log("키워드", props.searchKeyword);

  // 댓글 펼치기
  const [commentListVal, setCommentListVal] = useState([false]);
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
          boardId: event.target.id,
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
          // userId: data.writer.id,
        },
        refetchQueries: [
          {
            query: FETCH_SAVED_BOARDS,
            variables: {
              userId: loginUserInfo.id,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 무한스크롤
  // const loadFunc = () => {
  //   if (!data) return;
  //   fetchMore({
  //     variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.fetchBoards)
  //         return { fetchBoards: [...prev.fetchBoards] };
  //       return {
  //         fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
  //       };
  //     },
  //   });
  // };

  // 가든에서 유저 프로필 클릭 시...
  const onClickUserProfile = (event) => {
    router.push(`/profile/${event.target.id}`);
  };

  // 검색 키워드
  const [searchKeyword, setSearchKeyword] = useState("");
  const onChangeSearchKeyword = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <GardenListUI
      commentListVal={commentListVal}
      onClickCommentListBtn={onClickCommentListBtn}
      data={data}
      onClickSaved={onClickSaved}
      // loadFunc={loadFunc}
      onClickLikeBoard={onClickLikeBoard}
      loginUserInfo={loginUserInfo}
      onClickUserProfile={onClickUserProfile}
      isToken={isToken}
      onChangeSearchKeyword={onChangeSearchKeyword}
      searchKeyword={searchKeyword}
      searchBoard={searchBoard}
    />
  );
}