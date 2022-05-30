import GardenCommentList from "../comment/list/GardenCommentList.container";
import GardenCommentWrite from "../comment/write/GardenCommentWrite.container";
import {
  CommentCount,
  CommentListBtn,
  Contents,
  ContentsBox,
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
  LikeOn,
  LikeOff,
  CommentIcon,
  SpanCommentCount,
  WrapperSearch,
  IconSearch,
  WrapperIconRow,
} from "./GardenList.styles";
import {
  MdQuestionAnswer,
  MdThumbUp,
  MdBookmarkBorder,
  MdBookmark,
} from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import GardenBestList from "../bestList/GardenBestList.container";
// 날짜 데이터 yyyy-mm-dd 로 변경 모듈

import { getDate } from "../../../../commons/libraries/utils";
import GardenWriteContainer from "../../GardenWrite/GardenWrite.container";
import DailyWordContainer from "../../dailyword/dailyword.container";
import ArchiveContainer from "../../archivelist/archivelist.container";
import InfiniteScroll from "react-infinite-scroller";
import GardenImg from "../gardenImg/gardenImg.container";
import TranslateGarden from "../../../commons/translate/garden";
import GardenSearch from "../search/GardenSearch.container";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

export default function GardenListUI(props: any) {
  return (
    <>
      <GardenWrapper>
        <WrapperLeft>
          <GardenWriteContainer />
          <DailyWordContainer />
        </WrapperLeft>
        <Wrapper>
          <WrapperSearch>
            <InputSearchBar
              // placeholder={'Search'}
              onChange={props.onChangeSearchKeyword}
            />
            <IconSearch />
          </WrapperSearch>
          {props.searchKeyword ? (
            <GardenSearch searchKeyword={props.searchKeyword} />
          ) : (
            <>
              <GardenBestList />
              <InfiniteScroll
                pageStart={0}
                loadMore={props.loadFunc}
                hasMore={true}
              >
                {props.data?.fetchBoards.map((el, index) => (
                  <div key={String(uuidv4())}>
                    {props.loginUserInfo?.newLang === el.writer.myLang ? (
                      <GardenListBox>
                        <WriterInfoBox>
                          {el.writer.image.includes("http") ? (
                            <WriterProfile
                              onClick={props.onClickUserProfile}
                              id={el.writer.id}
                              src={el.writer.image}
                            />
                          ) : (
                            <WriterProfile
                              onClick={props.onClickUserProfile}
                              id={el.writer.id}
                              src={"/image/defaultuser.png"}
                            />
                          )}
                          <WriterInfo>
                            <NameRow>
                              <WriterName>{el.writer.name}</WriterName>
                              {props.savedInfo?.fetchSavedBoards.filter(
                                (el2) => el2.board.id === el.id
                              ).length > 0 ? (
                                props.savedInfo?.fetchSavedBoards.map((el3) =>
                                  el3.board.id === el.id ? (
                                    el3.isSaved ? (
                                      <motion.div
                                        whileHover={{ scale: 1.25 }}
                                        transition={{ duration: 0.3 }}
                                        key={String(uuidv4())}
                                      >
                                        <MdBookmark
                                          size={"22"}
                                          onClick={() => props.onClickSaved(el)}
                                          style={{
                                            cursor: "pointer",
                                            color: "#FFB950",
                                          }}
                                        />
                                      </motion.div>
                                    ) : (
                                      <motion.div
                                        whileHover={{ scale: 1.25 }}
                                        transition={{ duration: 0.3 }}
                                        key={String(uuidv4())}
                                      >
                                        <MdBookmarkBorder
                                          size={"22"}
                                          onClick={() => props.onClickSaved(el)}
                                          style={{
                                            cursor: "pointer",
                                            color: "#FFB950",
                                          }}
                                        />
                                      </motion.div>
                                    )
                                  ) : (
                                    ""
                                  )
                                )
                              ) : (
                                <motion.div
                                  whileHover={{ scale: 1.4 }}
                                  transition={{ duration: 0.3 }}
                                  key={String(uuidv4())}
                                >
                                  <MdBookmarkBorder
                                    size={"22"}
                                    onClick={() => props.onClickSaved(el)}
                                    style={{
                                      cursor: "pointer",
                                      color: "#FFB950",
                                    }}
                                  />
                                </motion.div>
                              )}
                            </NameRow>
                            <CreatedAt>{getDate(el.createdAt)}</CreatedAt>
                          </WriterInfo>
                        </WriterInfoBox>
                        <ContentsBox>
                          <Contents>{el.content}</Contents>
                          <ContentsTranslateBox>
                            {/* 번역API 버튼 자리? */}
                            <TranslateGarden
                              content={el.content}
                              myLang={el.writer.myLang}
                            />
                          </ContentsTranslateBox>
                          {/* 캐러셀 */}
                          <GardenImg boardId={el.id} video={el.video} />
                          {/* <ContentsImg /> */}
                          <LikeAndCommentCountBox>
                            {/* <div></div> */}
                            <LikeAndCommentCount>
                              <CommentCount
                                onClick={props.onClickCommentListBtn(index)}
                                id={el.id}
                              >
                                <motion.div
                                  whileHover={{ scale: 1.4 }}
                                  transition={{ duration: 0.3 }}
                                  key={String(uuidv4())}
                                >
                                  <CommentIcon size={"13"} />{" "}
                                </motion.div>
                                <SpanCommentCount>
                                  {el.commentsCount}
                                </SpanCommentCount>
                              </CommentCount>

                              {props.savedInfo?.fetchSavedBoards.filter(
                                (element) => element.board.id === el.id
                              ).length > 0 ? (
                                props.savedInfo?.fetchSavedBoards.map(
                                  (element2) =>
                                    element2.board.id === el.id ? (
                                      element2.isLiked ? (
                                        <Like
                                          onClick={props.onClickLikeBoard}
                                          id={el.id}
                                        >
                                          <WrapperIconRow>
                                            <motion.div
                                              whileHover={{ scale: 1.4 }}
                                              transition={{ duration: 0.3 }}
                                              key={String(uuidv4())}
                                            >
                                              <LikeOn />
                                            </motion.div>
                                          </WrapperIconRow>
                                          {el.likes}
                                        </Like>
                                      ) : (
                                        <Like
                                          onClick={props.onClickLikeBoard}
                                          id={el.id}
                                        >
                                          <motion.div
                                            whileHover={{ scale: 1.4 }}
                                            transition={{ duration: 0.3 }}
                                            key={String(uuidv4())}
                                          >
                                            <LikeOff />
                                          </motion.div>

                                          {el.likes}
                                        </Like>
                                      )
                                    ) : (
                                      ""
                                    )
                                )
                              ) : (
                                <Like
                                  onClick={props.onClickLikeBoard}
                                  id={el.id}
                                >
                                  <LikeOff size={"13"} /> {el.likes}
                                </Like>
                              )}

                              {/* <Like onClick={props.onClickLikeBoard} id={el.id}>
                                <MdThumbUp size={'13'} /> {el.likes}
                              </Like> */}
                              {/* 해당 게시글의 댓글 갯수 */}
                              <MdKeyboardArrowDown
                                onClick={props.onClickCommentListBtn(index)}
                                id={el.id}
                                size={20}
                                style={{
                                  marginLeft: "320px",
                                  marginBottom: "5px",
                                  cursor: "pointer",
                                }}
                              />
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
                    ) : (
                      ""
                    )}
                    {/* 로그인 안했을 때 */}
                    {!props.isToken ? (
                      <GardenListBox>
                        <WriterInfoBox>
                          {el.writer.image.includes("http") ? (
                            <WriterProfile
                              onClick={props.onClickUserProfile}
                              id={el.writer.id}
                              src={el.writer.image}
                            />
                          ) : (
                            <WriterProfile
                              onClick={props.onClickUserProfile}
                              id={el.writer.id}
                              src={
                                "https://cdn.discordapp.com/attachments/974505238029533295/980389912345972736/defaultuser.png"
                              }
                            />
                          )}
                          <WriterInfo>
                            <NameRow>
                              <WriterName>{el.writer.name}</WriterName>
                              <MdBookmarkBorder
                                size={"22"}
                                onClick={() => props.onClickSaved(el)}
                                style={{ cursor: "pointer", color: "#FFB950" }}
                              />
                            </NameRow>
                            <CreatedAt>{getDate(el.createdAt)}</CreatedAt>
                          </WriterInfo>
                        </WriterInfoBox>
                        <ContentsBox>
                          <Contents>{el.content}</Contents>
                          <ContentsTranslateBox>
                            {/* 번역API 버튼 자리? */}
                            <TranslateGarden content={el.content} />
                          </ContentsTranslateBox>
                          {/* 캐러셀 */}
                          <GardenImg boardId={el.id} video={el.video} />
                          {/* <ContentsImg /> */}
                          <LikeAndCommentCountBox>
                            {/* <div></div> */}
                            <LikeAndCommentCount>
                              <CommentCount
                                onClick={props.onClickCommentListBtn(index)}
                                id={el.id}
                              >
                                <motion.div
                                  whileHover={{ scale: 1.4 }}
                                  transition={{ duration: 0.3 }}
                                  key={String(uuidv4())}
                                >
                                  <CommentIcon size={"13"} />{" "}
                                </motion.div>
                                <SpanCommentCount>
                                  {el.commentsCount}
                                </SpanCommentCount>
                              </CommentCount>

                              {props.savedInfo?.fetchSavedBoards.filter(
                                (element) => element.board.id === el.id
                              ).length > 0 ? (
                                props.savedInfo?.fetchSavedBoards.map(
                                  (element2) =>
                                    element2.board.id === el.id ? (
                                      element2.isLiked ? (
                                        <Like
                                          onClick={props.onClickLikeBoard}
                                          id={el.id}
                                        >
                                          <WrapperIconRow>
                                            <motion.div
                                              whileHover={{ scale: 1.4 }}
                                              transition={{ duration: 0.3 }}
                                              key={String(uuidv4())}
                                            >
                                              <LikeOn />
                                            </motion.div>
                                          </WrapperIconRow>
                                          {el.likes}
                                        </Like>
                                      ) : (
                                        <Like
                                          onClick={props.onClickLikeBoard}
                                          id={el.id}
                                        >
                                          <motion.div
                                            whileHover={{ scale: 1.4 }}
                                            transition={{ duration: 0.3 }}
                                            key={String(uuidv4())}
                                          >
                                            <LikeOff />
                                          </motion.div>

                                          {el.likes}
                                        </Like>
                                      )
                                    ) : (
                                      ""
                                    )
                                )
                              ) : (
                                <Like
                                  onClick={props.onClickLikeBoard}
                                  id={el.id}
                                >
                                  <LikeOff size={"13"} /> {el.likes}
                                </Like>
                              )}

                              {/* <Like onClick={props.onClickLikeBoard} id={el.id}>
                                <MdThumbUp size={'13'} /> {el.likes}
                              </Like> */}
                              {/* 해당 게시글의 댓글 갯수 */}
                              <MdKeyboardArrowDown
                                onClick={props.onClickCommentListBtn(index)}
                                id={el.id}
                                size={20}
                                style={{
                                  marginLeft: "320px",
                                  marginBottom: "5px",
                                  cursor: "pointer",
                                }}
                              />
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
                    ) : (
                      ""
                    )}
                  </div>
                )) || <div></div>}
              </InfiniteScroll>
            </>
          )}
        </Wrapper>
        <WrapperRight>
          <ArchiveContainer />
        </WrapperRight>
      </GardenWrapper>
    </>
  );
}
