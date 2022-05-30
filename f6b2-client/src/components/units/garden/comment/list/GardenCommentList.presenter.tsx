import {
  CommentBtns,
  CommentContentsBox,
  CommentImg,
  CommentInfo,
  CommentListBox,
  CommentName,
  CommentProfile,
  CommentText,
  CommentVideo,
  ContentWrapper,
  CreatedAt,
  DeleteBtn,
  EditBtn,
  Like,
  MediaBox,
  OtherBtns,
  ProfileWrapper,
  Row1,
  LikeOn,
  LikeOff,
} from './GardenCommentList.styles';
import styled from '@emotion/styled';
import { MdModeEditOutline, MdOutlineClear } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import GardenCommentEdit from '../edit/GardenCommentEdit.container';
import { Image } from 'antd';
import 'antd/dist/antd.css';
import * as timeago from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

const Image1 = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;

export default function GardenCommentListUI(props) {
  timeago.register('ko', ko);
  console.log('페치커멘트', props.comments?.fetchComments);
  return (
    <>
      {props.comments?.fetchComments.map((el, index) => (
        <>
          <CommentListBox key={index}>
            <ProfileWrapper>
              {el.writer.image.includes('http') ? (
                <CommentProfile src={el.writer.image} />
              ) : (
                <CommentProfile src={'/image/defaultuser.png'} />
              )}
            </ProfileWrapper>
            <CommentContentsBox>
              <CommentInfo>
                <Row1>
                  <CommentName>{el.writer.name}</CommentName>
                  {props.loginInfo?.name === el.writer.name && (
                    <OtherBtns>
                      <EditBtn onClick={props.commentEditBtn(index)}>
                        <MdModeEditOutline size={14} />
                      </EditBtn>
                      <DeleteBtn
                        onClick={props.onClickDeleteComment}
                        id={el.id}
                      >
                        <MdOutlineClear size={14} />
                      </DeleteBtn>
                    </OtherBtns>
                  )}
                </Row1>
                <CreatedAt datetime={el.createdAt} locale='ko'>
                  {/* <TimeAgo datetime={el.createdAt} locale='ko' /> */}
                </CreatedAt>
              </CommentInfo>
              <ContentWrapper>
                <CommentText>{el.content}</CommentText>

                {props.myLike?.fetchLikedComment.filter(
                  (el2) => el2.comment.id === el.id
                ).length > 0 ? (
                  props.myLike?.fetchLikedComment.map((el3) =>
                    el3.comment.id === el.id ? (
                      el3.isLiked ? (
                        <Like onClick={props.onClickCommentLike} id={el.id}>
                          <LikeOn />
                          {el.likes}
                        </Like>
                      ) : (
                        <Like onClick={props.onClickCommentLike} id={el.id}>
                          <LikeOff />
                          {el.likes}
                        </Like>
                      )
                    ) : (
                      ''
                    )
                  )
                ) : (
                  <Like onClick={props.onClickCommentLike} id={el.id}>
                    <LikeOff />
                    {el.likes}
                  </Like>
                )}
              </ContentWrapper>
              <MediaBox>
                {el.image !== '' && <Image1 src={el.image} width={300} />}
                {el.video !== '' && <CommentVideo src={el.video} controls />}
              </MediaBox>
            </CommentContentsBox>
            {/* 버튼 조건 (작성자-유저 이름이 동일 시, 보임) */}

            <CommentBtns></CommentBtns>
          </CommentListBox>
          {/* 댓글 수정창! */}
          {props.commentEditVal[index] && (
            <GardenCommentEdit
              commentEl={el}
              isEdit={true}
              boardElId={props.boardElId}
            />
          )}
        </>
      ))}
    </>
  );
}
