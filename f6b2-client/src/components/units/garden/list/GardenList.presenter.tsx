import GardenCommentList from "../comment/list/GardenCommentList.container";
import GardenCommentWrite from "../comment/write/GardenCommentWrite.container";
import {
  CommentCount,
  CommentListBtn,
  Contents,
  ContentsBox,
  ContentsImg,
  ContentsTranslate,
  ContentsTranslateBox,
  CreatedAt,
  GardenListBox,
  InputSearchBar,
  Like,
  LikeAndCommentCount,
  LikeAndCommentCountBox,
  Wrapper,
  WriterInfo,
  WriterInfoBox,
  WriterName,
  WriterProfile,
  WrapperLeft,
  WrapperRight,
  GardenWrapper,
  NameRow,
} from "./GardenList.styles";
import { MdQuestionAnswer, MdThumbUp, MdBookmarkBorder } from "react-icons/md";
import GardenBestList from "../bestList/GardenBestList.container";
// 날짜 데이터 yyyy-mm-dd 로 변경 모듈
import { getDate } from "../../../../commons/libraries/utils";
import GardenWriteContainer from "../../GardenWrite/GardenWrite.container";
import DailyWordContainer from "../../dailyword/dailyword.container";
import ArchiveContainer from "../../archivelist/archivelist.container";
import InfiniteScroll from "react-infinite-scroller";

export default function GardenListUI(props: any) {
  console.log("boardId1" + props.boardId);
  return (
    <>
      <GardenWrapper>
        <WrapperLeft>
          <GardenWriteContainer />
          <DailyWordContainer />
        </WrapperLeft>
        <Wrapper>
          <InputSearchBar defaultValue={"Search"} />
          <GardenBestList />
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
          >
            {props.data?.fetchBoards.map((el, index) => (
              <GardenListBox key={index}>
                <WriterInfoBox>
                  <WriterProfile />
                  <WriterInfo>
                    <NameRow>
                      <WriterName>{el.writer.name}</WriterName>
                      <MdBookmarkBorder
                        size={"16"}
                        onClick={() => props.onClickSaved(el)}
                      />
                    </NameRow>
                    <CreatedAt>{getDate(el.createdAt)}</CreatedAt>
                  </WriterInfo>
                </WriterInfoBox>
                <ContentsBox>
                  <Contents>{el.content}</Contents>
                  <ContentsTranslateBox>
                    {/* 번역API 버튼 자리? */}
                    <ContentsTranslate>번역한 내용</ContentsTranslate>
                  </ContentsTranslateBox>
                  <ContentsImg />
                  <LikeAndCommentCountBox>
                    {/* {props.commentListVal === true ? (
                    <CommentListBtn
                      onClick={props.onClickCommentListBtn(index)}
                      id={el.id}
                    >
                      Close Comments
                    </CommentListBtn>
                  ) : (
                    <CommentListBtn
                      onClick={props.onClickCommentListBtn(index)}
                      id={el.id}
                    >
                      Open Comments
                    </CommentListBtn>
                  )} */}
                    {props.commentListVal[index] ? (
                      <CommentListBtn
                        onClick={props.onClickCommentListBtn(index)}
                        id={el.id}
                      >
                        close
                      </CommentListBtn>
                    ) : (
                      <CommentListBtn
                        onClick={props.onClickCommentListBtn(index)}
                        id={el.id}
                      >
                        open
                      </CommentListBtn>
                    )}

                    <LikeAndCommentCount>
                      <Like>
                        <MdThumbUp size={"13"} /> {el.likes}
                      </Like>
                      <CommentCount>
                        <MdQuestionAnswer size={"13"} /> 1
                      </CommentCount>
                    </LikeAndCommentCount>
                  </LikeAndCommentCountBox>
                </ContentsBox>
                <GardenCommentWrite boardId={el.id} />
                {props.commentListVal[index] ? (
                  <GardenCommentList boardElId={el.id} />
                ) : (
                  <div></div>
                )}
              </GardenListBox>
            ))}
          </InfiniteScroll>
        </Wrapper>
        <WrapperRight>
          <ArchiveContainer />
        </WrapperRight>
      </GardenWrapper>
    </>
  );
}
