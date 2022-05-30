import GardenCommentList from '../comment/list/GardenCommentList.container';
import GardenCommentWrite from '../comment/write/GardenCommentWrite.container';
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
  InputSearchBarWrapper,
} from './GardenSearch.styles';
import { MdQuestionAnswer, MdThumbUp, MdBookmarkBorder } from 'react-icons/md';
import GardenBestList from '../bestList/GardenBestList.container';
// 날짜 데이터 yyyy-mm-dd 로 변경 모듈

import { getDate } from '../../../../commons/libraries/utils';
import GardenWriteContainer from '../../GardenWrite/GardenWrite.container';
import DailyWordContainer from '../../dailyword/dailyword.container';
import ArchiveContainer from '../../archivelist/archivelist.container';
import InfiniteScroll from 'react-infinite-scroller';
import GardenImg from '../gardenImg/gardenImg.container';
import TranslateGarden from '../../../commons/translate/garden';
import GardenSearch from '../search/GardenSearch.container';

export default function GardenSearchUI(props: any) {
  return (
    <>
      <GardenWrapper>
        <Wrapper>
          <div style={{ marginBottom: '15px', fontSize: '15px' }}>
            "{props.searchKeyword}"로(으로) 찾은 결과 입니다
          </div>
          <>
            {props.searchBoard?.searchBoardContent.map((el, index) => (
              <div key={index}>
                <GardenListBox>
                  <WriterInfoBox>
                    {el.writer.image.includes('http') ? (
                      <WriterProfile
                        onClick={props.onClickUserProfile}
                        id={el.writer.id}
                        src={el.writer.image}
                      />
                    ) : (
                      <WriterProfile
                        onClick={props.onClickUserProfile}
                        id={el.writer.id}
                        src={'/image/defaultuser.png'}
                      />
                    )}
                    <WriterInfo>
                      <NameRow>
                        <WriterName>{el.writer.name}</WriterName>
                        <MdBookmarkBorder
                          size={'22'}
                          onClick={() => props.onClickSaved(el)}
                          style={{ cursor: 'pointer' }}
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
                      {/* {props.commentListVal[index] ? (
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
                      )} */}
                      <div></div>
                      <LikeAndCommentCount>
                        <Like onClick={props.onClickLikeBoard} id={el.id}>
                          <MdThumbUp size={'13'} /> {el.likes}
                        </Like>
                        {/* 해당 게시글의 댓글 갯수 */}
                        <CommentCount
                          onClick={props.onClickCommentListBtn(index)}
                          id={el.id}
                        >
                          <MdQuestionAnswer size={'13'} /> {el.commentsCount}
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
              </div>
            ))}
          </>
        </Wrapper>
      </GardenWrapper>
    </>
  );
}
