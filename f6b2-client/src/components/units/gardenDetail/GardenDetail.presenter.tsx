import * as S from "./GardenDetail.styles";
import { getDate } from "../../../commons/libraries/utils";
import { MdQuestionAnswer, MdThumbUp, MdBookmarkBorder } from "react-icons/md";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../commons/store";
import GardenDetailCommentList from "./detailcomment/list/GardenCommentList.container";

export default function GardenDetailUI(props: any) {
  console.log(props.data?.fetchBoard.commentsCount, "댓글수나오냐");
  const [loginInfo] = useRecoilState(userInfoState);
  return (
    <>
      <S.GardenWrapper>
        <S.Wrapper>
          <S.GardenListBox key={props.data?.fetchBoard.id}>
            <S.ContentsImg />

            <S.RightWrapper>
              <S.WriterInfoBox>
                <S.WriterInfo>
                  <S.WriterProfile />
                  <S.WriterName>
                    {props.data?.fetchBoard.writer.name}
                  </S.WriterName>
                  <S.CreatedAt>
                    {getDate(props.data?.fetchBoard.createdAt)}
                  </S.CreatedAt>
                </S.WriterInfo>
                {/* 수정버튼 */}
                {props.data?.fetchBoard.writer.id === loginInfo?.id && (
                  <S.IconWrapper>
                    <S.EditIcon />
                  </S.IconWrapper>
                )}
                {props.data?.fetchBoard.writer.id !== loginInfo?.id && ""}
              </S.WriterInfoBox>

              <S.ContentsBox>
                <S.Contents>{props.data?.fetchBoard.content}</S.Contents>
                {/* 번역API 버튼 자리? */}
                <S.ContentsTranslateBox>
                  <S.ContentsTranslate>번역한 내용</S.ContentsTranslate>
                </S.ContentsTranslateBox>

                {/* 댓글 부분 다시 수정할 것 */}
                <S.LikeAndCommentCountBox>
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
                      <MdQuestionAnswer
                        size={"13"}
                        style={{ marginRight: 5 }}
                      />
                      {props.data?.fetchBoard.commentsCount}
                    </S.CommentCount>
                  </S.LikeAndCommentCount>
                </S.LikeAndCommentCountBox>
                <GardenDetailCommentList
                  boardElId={props.boardElId}
                  loginInfo={loginInfo}
                />
                {/* <GardenCommentList boardElId={props.boardElId} /> */}
              </S.ContentsBox>
            </S.RightWrapper>
          </S.GardenListBox>
        </S.Wrapper>
      </S.GardenWrapper>
    </>
  );
}
