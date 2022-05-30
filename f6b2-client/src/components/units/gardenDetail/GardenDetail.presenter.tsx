
import * as S from './GardenDetail.styles';
import { getDate } from '../../../commons/libraries/utils';
import { MdQuestionAnswer, MdThumbUp, MdBookmarkBorder } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../commons/store';
import GardenDetailImg from './detailImg/gardenDetailImg.container';
import GardenDetailCommentList from './detailcomment/list/GardenDetailCommentList.container';
import GardenDetailCommentWrite from './detailcomment/write/GardenDetailCommentWrite.container';
import TranslateGarden from '../../commons/translate/garden';
import DropdownIcon from './dropDown';
import { FETCH_MYLIKED_COMMENT } from '../garden/comment/list/GrdenCommentList.queries';
import { useQuery } from '@apollo/client';
import { FETCH_SAVED_BOARDS } from '../../commons/queries';


export default function GardenDetailUI(props: any) {
  const [loginInfo] = useRecoilState(userInfoState);
  const { data: savedInfo } = useQuery(FETCH_SAVED_BOARDS, {
    variables: {
      userId: loginInfo?.id,
    },
  });

  // props.data.fetchBoard.id
  //

  return (
    <S.Outer>
      <S.GardenWrapper>
        <S.Wrapper>
          <S.GardenListBox key={props.data?.fetchBoard.id}>
            {/* 이미지 */}
            {/* <S.LeftWrapper> */}
            <S.ContentsImg>
              <GardenDetailImg
                boardId={props.data?.fetchBoard.id}
                video={props.data?.fetchBoard.video}
              />
            </S.ContentsImg>
            {/* </S.LeftWrapper> */}
            <S.RightWrapper>
              <S.WriterInfoBox>
                <S.WriterInfo>
                  <S.WriterProfile
                    src={
                      props.data?.fetchBoard?.writer.image.includes('http')
                        ? props.data?.fetchBoard?.writer.image
                        : '/image/defaultuser.png'
                    }
                  />
                  <S.WriterName>
                    {props.data?.fetchBoard.writer.name}
                  </S.WriterName>
                  <S.CreatedAt>
                    {getDate(props.data?.fetchBoard.createdAt)}
                  </S.CreatedAt>
                </S.WriterInfo>
                {/* 수정,삭제버튼 */}
                {props.data?.fetchBoard.writer.id === loginInfo?.id && (
                  <DropdownIcon />
                )}
                {props.data?.fetchBoard.writer.id !== loginInfo?.id && ''}
              </S.WriterInfoBox>

              <S.ContentsBox>
                <S.Contents>{props.data?.fetchBoard.content}</S.Contents>
                <S.ContentsTranslateBox>
                  <TranslateGarden
                    content={props.data?.fetchBoard.content}
                    myLang={props.data?.fetchBoard.writer.myLang}
                  />
                </S.ContentsTranslateBox>

                <S.LikeAndCommentCountBox>
                  <S.LikeAndCommentCount>
                    {/* 댓글 수 나옴 */}
                    <S.CommentCount>
                      <S.CommentIcon />

                      {props.data?.fetchBoard.commentsCount}
                    </S.CommentCount>

                    {props.savedInfo?.fetchSavedBoards.filter(
                      (element) =>
                        element.board.id === props.data?.fetchBoard.id
                    ).length > 0 ? (
                      props.savedInfo?.fetchSavedBoards.map((element2) =>
                        element2.board.id === props.data?.fetchBoard.id ? (
                          element2.isLiked ? (
                            <S.Like
                              onClick={props.onClickLikeBoard}
                              id={props.data?.fetchBoard.id}
                            >
                              <S.LikeOn /> {props.data?.fetchBoard.likes}
                            </S.Like>
                          ) : (
                            <S.Like
                              onClick={props.onClickLikeBoard}
                              id={props.data?.fetchBoard.id}
                            >
                              <S.LikeOff /> {props.data?.fetchBoard.likes}
                            </S.Like>
                          )
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <S.Like
                        onClick={props.onClickLikeBoard}
                        id={props.data?.fetchBoard.id}
                      >
                        <S.LikeOff /> {props.data?.fetchBoard.likes}
                      </S.Like>
                    )}

                    {/* <S.Like>
                      <S.LikeOff
                        onClick={props.onClickLikeBoard}
                        id={props.data?.fetchBoard.id}
                      />
                      {props.data?.fetchBoard.likes}
                    </S.Like> */}
                  </S.LikeAndCommentCount>
                </S.LikeAndCommentCountBox>
                {/* 댓글 목록 불러오기 */}
                <S.CommentBox>
                  <GardenDetailCommentList
                    boardElId={props.boardElId}
                    loginInfo={loginInfo}
                  />
                </S.CommentBox>
                {/* 댓글 작성하기 */}
                <GardenDetailCommentWrite />
              </S.ContentsBox>
            </S.RightWrapper>
          </S.GardenListBox>
        </S.Wrapper>
      </S.GardenWrapper>
    </S.Outer>
  );
}
