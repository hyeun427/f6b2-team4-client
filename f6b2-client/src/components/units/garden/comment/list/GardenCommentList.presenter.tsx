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

export default function GardenCommentListUI(props) {
  return (
    <>
      {props.comments?.fetchComments.map((el) => (
        <CommentListBox>
          <CommentProfile />
          <CommentContentsBox>
            <CommentInfo>
              <CommentName>{el.writer.name}</CommentName>
              <CreatedAt>{el.createdAt}</CreatedAt>
            </CommentInfo>
            <CommentText>{el.content}</CommentText>
            <CommentImg></CommentImg>
          </CommentContentsBox>
          <CommentBtns>
            <EditBtn>
              <MdModeEditOutline />
            </EditBtn>
            <DeleteBtn onClick={props.onClickDeleteComment} id={el.id}>
              <MdOutlineClear />
            </DeleteBtn>
          </CommentBtns>
        </CommentListBox>
      ))}
    </>
  );
}
