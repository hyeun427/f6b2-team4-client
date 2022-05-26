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
  Row1,
} from "./GardenDetailCommentList.styles";
import styled from "@emotion/styled";
import { MdModeEditOutline, MdOutlineClear } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
// import GardenCommentEdit from "../edit/GardenCommentEdit.container";
import { Image } from "antd";
import "antd/dist/antd.css";
import { getDate } from "../../../../../commons/libraries/utils";

const Image1 = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;

export default function GardenDetailCommentListUI(props) {
  return (
    <>
      {props.comments?.fetchComments.map((el, index) => (
        <>
          <CommentListBox key={index}>
            <CommentProfile />
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
                <CreatedAt>{getDate(el.createdAt)}</CreatedAt>
              </CommentInfo>
              <ContentWrapper>
                <CommentText>{el.content}</CommentText>
                <Like onClick={props.onClickCommentLike} id={el.id}>
                  <AiOutlineHeart />
                  {el.likes}
                </Like>
              </ContentWrapper>
              <MediaBox>
                {el.image !== "empty" && <Image1 src={el.image} width={300} />}
                {el.video !== "empty" && (
                  <CommentVideo src={el.video} controls />
                )}
              </MediaBox>
            </CommentContentsBox>
            {/* 버튼 조건 (작성자-유저 이름이 동일 시, 보임) */}

            <CommentBtns></CommentBtns>
          </CommentListBox>
          {/* 댓글 수정창! */}
          {/* {props.commentEditVal[index] && (
            <GardenCommentEdit
              commentEl={el}
              isEdit={true}
              boardElId={props.boardElId}
            />
          )} */}
        </>
      ))}
    </>
  );
}