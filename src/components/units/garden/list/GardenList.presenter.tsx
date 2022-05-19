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
  Like,
  LikeAndCommentCount,
  LikeAndCommentCountBox,
  Wrapper,
  WriterInfo,
  WriterInfoBox,
  WriterName,
  WriterProfile,
} from './GardenList.styles';
import { MdQuestionAnswer, MdThumbUp, MdBookmarkBorder } from 'react-icons/md';
import GardenBestList from '../bestList/GardenBestList.container';
// 날짜 데이터 yyyy-mm-dd 로 변경 모듈
import { getDate } from '../../../../commons/libraries/utils';

export default function GardenListUI(props) {
  return (
    <Wrapper>
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
                ex ) 여러분에게 물어볼 것이 있습니다! 이 꽃은 한국어로 뭐라고
                부릅니까?
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
          {props.commentListVal === true ? <GardenCommentList /> : <div></div>}
        </GardenListBox>
      ))}
    </Wrapper>
  );
}
