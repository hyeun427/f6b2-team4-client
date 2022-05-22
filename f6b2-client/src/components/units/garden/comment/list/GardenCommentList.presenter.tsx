import {
  CommentBtns,
  CommentContentsBox,
  CommentImg,
  CommentInfo,
  CommentListBox,
  CommentName,
  CommentProfile,
  CommentText,
  CreatedAt,
  DeleteBtn,
  EditBtn,
} from "./GardenCommentList.styles";
import { MdModeEditOutline, MdOutlineClear } from "react-icons/md";
import GardenCommentWrite from "../write/GardenCommentWrite.container";

export default function GardenCommentListUI(props) {
  return (
    <>
      {props.comments?.fetchComments.map((el, index) => (
        <>
          <CommentListBox key={index}>
            <CommentProfile />
            <CommentContentsBox>
              <CommentInfo>
                <CommentName>{el.writer.name}</CommentName>
                <CreatedAt>{el.createdAt}</CreatedAt>
              </CommentInfo>
              <CommentText>{el.content}</CommentText>
              <CommentImg></CommentImg>
            </CommentContentsBox>
            {/* 버튼 조건 (작성자-유저 이름이 동일 시, 보임) */}
            {props.loginInfo.name === el.writer.name && (
              <CommentBtns>
                <EditBtn onClick={props.commentEditBtn(index)}>
                  <MdModeEditOutline />
                </EditBtn>
                <DeleteBtn onClick={props.onClickDeleteComment} id={el.id}>
                  <MdOutlineClear />
                </DeleteBtn>
              </CommentBtns>
            )}
          </CommentListBox>
          {/* 댓글 수정창 */}
          {props.commentEditVal[index] && (
            <GardenCommentWrite commentEl={el} isEdit={true} />
          )}
        </>
      ))}
    </>
  );
}
