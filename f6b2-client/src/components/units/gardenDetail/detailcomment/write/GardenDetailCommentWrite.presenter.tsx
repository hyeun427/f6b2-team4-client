import {
  CommentWriteBox,
  CommentWriteBtn,
  CommentWriteInput,
  CommentWriteInputBox,
  CommentWriteProfile,
  ImgBtn,
  SubmitBtn,
  VideoBtn,
} from "./GardenDetailCommentWrite.styles";
import { MdForwardToInbox, MdPhoto, MdPhotoCameraFront } from "react-icons/md";

export default function GardenDetailCommentWriteUI(props: any) {
  return (
    <CommentWriteBox>
      <CommentWriteProfile />
      <CommentWriteInputBox>
        <CommentWriteInput
          placeholder="Enter Your Comment Here!"
          type={"text"}
          onChange={props.onChangeComment}
          defaultValue={props.commentEl?.content}
        />
        <CommentWriteBtn>
          {props.isEdit !== true ? (
            // 댓글등록
            <SubmitBtn onClick={props.onClickCommentWrite}>
              <MdForwardToInbox />
            </SubmitBtn>
          ) : (
            // 댓글수정
            <SubmitBtn onClick={props.onClickCommentUpdate}>
              <MdForwardToInbox />
            </SubmitBtn>
          )}
          <ImgBtn>
            <MdPhoto />
          </ImgBtn>
          <VideoBtn>
            <MdPhotoCameraFront />
          </VideoBtn>
        </CommentWriteBtn>
      </CommentWriteInputBox>
    </CommentWriteBox>
  );
}
