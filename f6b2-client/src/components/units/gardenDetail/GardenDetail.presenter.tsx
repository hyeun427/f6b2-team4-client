import * as S from "./GardenDetail.styles";
import { getDate } from "../../../commons/libraries/utils";
import { MdQuestionAnswer, MdThumbUp, MdBookmarkBorder } from "react-icons/md";

export default function GardenDetailUI(props: any) {
  console.log(props.data?.fetchBoard.commentsCount, "댓글수나오냐");
  return (
    <>
      <S.GardenWrapper>
        <S.Wrapper>
          <S.GardenListBox key={props.data?.fetchBoard.id}>
            <S.WriterInfoBox>
              <S.WriterProfile />
              <S.WriterInfo>
                <S.NameRow>
                  <S.WriterName>
                    {props.data?.fetchBoard.writer.name}
                  </S.WriterName>
                </S.NameRow>
                <S.CreatedAt>
                  {getDate(props.data?.fetchBoard.createdAt)}
                </S.CreatedAt>
              </S.WriterInfo>
              {/* 수정버튼 */}
              <S.IconWrapper>
                <S.EditIcon />
              </S.IconWrapper>
            </S.WriterInfoBox>
            <S.ContentsBox>
              <S.Contents>{props.data?.fetchBoard.content}</S.Contents>
              {/* 번역API 버튼 자리? */}
              <S.ContentsTranslateBox>
                <S.ContentsTranslate>번역한 내용</S.ContentsTranslate>
              </S.ContentsTranslateBox>
              <S.ContentsImg />

              {/* 댓글 부분 다시 수정할 것 */}
              <S.LikeAndCommentCountBox>
                {props.commentListVal ? (
                  <S.CommentListBtn
                    onClick={props.onClickCommentListBtn}
                    id={props.data?.fetchBoard.id}
                  >
                    close
                  </S.CommentListBtn>
                ) : (
                  <S.CommentListBtn
                    onClick={props.onClickCommentListBtn}
                    id={props.data?.fetchBoard.id}
                  >
                    open
                  </S.CommentListBtn>
                )}

                <S.LikeAndCommentCount>
                  <S.Like>
                    <MdThumbUp
                      size={"13"}
                      style={{ marginRight: 5 }}
                      onClick={props.onClickLikeBoard}
                      id={props.data?.fetchBoard.id}
                    />{" "}
                    {props.data?.fetchBoard.likes}
                  </S.Like>
                  {/* 댓글 수 나옴 */}
                  <S.CommentCount>
                    <MdQuestionAnswer size={"13"} style={{ marginRight: 5 }} />
                    {props.data?.fetchBoard.commentsCount}
                  </S.CommentCount>
                </S.LikeAndCommentCount>
              </S.LikeAndCommentCountBox>
            </S.ContentsBox>
          </S.GardenListBox>
        </S.Wrapper>
      </S.GardenWrapper>
    </>
  );
}
