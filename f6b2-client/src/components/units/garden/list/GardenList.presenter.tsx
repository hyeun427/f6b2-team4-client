import GardenCommentList from '../comment/list/GardenCommentList.container';
import GardenCommentWrite from '../comment/write/GardenCommentWrite.container';
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
} from './GardenList.styles';
import { MdQuestionAnswer, MdThumbUp, MdBookmarkBorder } from 'react-icons/md';
import GardenBestList from '../bestList/GardenBestList.container';
// 날짜 데이터 yyyy-mm-dd 로 변경 모듈
import { getDate } from '../../../../commons/libraries/utils';
import GardenWriteContainer from '../../GardenWrite/GardenWrite.container';
import DailyWordContainer from '../../dailyword/dailyword.container';
import ArchiveContainer from '../../archivelist/archivelist.container';

export default function GardenListUI(props) {
  return (
    <>
      <GardenWrapper>
        <WrapperLeft>
          <GardenWriteContainer />
          <DailyWordContainer />
        </WrapperLeft>
        <Wrapper>
          <InputSearchBar defaultValue={'Search'} />
          <GardenBestList />
          {props.data?.fetchBoards.map((el, index) => (
            <GardenListBox key={index}>
              <WriterInfoBox>
                <WriterProfile />
                <WriterInfo>
                  <WriterName>{el.writer.name}</WriterName>
                  <CreatedAt>{getDate(el.createdAt)}</CreatedAt>
                </WriterInfo>
                <MdBookmarkBorder
                  size={'30'}
                  onClick={() => props.onClickSaved(el)}
                />
              </WriterInfoBox>
              <ContentsBox>
                <Contents>{el.content}</Contents>
                <ContentsTranslateBox>
                  {/* 번역API 버튼 자리? */}
                  <ContentsTranslate>
                    ex ) 여러분에게 물어볼 것이 있습니다! 이 꽃은 한국어로
                    뭐라고 부릅니까?
                  </ContentsTranslate>
                </ContentsTranslateBox>
                <ContentsImg />
                <LikeAndCommentCountBox>
                  {props.commentListVal === true ? (
                    <CommentListBtn onClick={props.onClickCommentListBtn}>
                      Close Comments
                    </CommentListBtn>
                  ) : (
                    <CommentListBtn onClick={props.onClickCommentListBtn}>
                      Open Comments
                    </CommentListBtn>
                  )}
                  <LikeAndCommentCount>
                    <Like>
                      <MdThumbUp /> {el.likes}
                    </Like>
                    <CommentCount>
                      <MdQuestionAnswer /> 1
                    </CommentCount>
                  </LikeAndCommentCount>
                </LikeAndCommentCountBox>
              </ContentsBox>
              {/* GardenCommentWrite */}
              <GardenCommentWrite />
              {/* GardenCommentList */}
              {props.commentListVal === true ? (
                <GardenCommentList />
              ) : (
                <div></div>
              )}
            </GardenListBox>
          ))}
        </Wrapper>
        <WrapperRight>
          <ArchiveContainer />
        </WrapperRight>
      </GardenWrapper>
    </>
  );
}
