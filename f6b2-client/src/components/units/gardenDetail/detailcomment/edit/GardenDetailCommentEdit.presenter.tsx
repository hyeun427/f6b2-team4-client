import {
  CommentWriteBox,
  CommentWriteBtn,
  CommentWriteInput,
  CommentWriteInputBox,
  CommentWriteProfile,
  Img,
  ImgBtn,
  MediaWrapper,
  SubmitBtn,
  Video,
  VideoBtn,
  Wrapper,
} from "./GardenDetailCommentEdit.styles";
import { MdForwardToInbox, MdPhoto, MdPhotoCameraFront } from "react-icons/md";
import ImageUpload from "../../../../commons/upload";
import VideoUpload from "../../../../commons/videoupload";

export default function GardenDetailCommentEditUI(props: any) {
  return (
    <Wrapper>
      <CommentWriteBox>
        <CommentWriteProfile />
        <CommentWriteInputBox>
          <CommentWriteInput
            placeholder="Edit Your Comment Here!"
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
              <ImageUpload
                onChangeFileUrls={props.onChangeFileUrls}
                fileUrls={props.fileUrls}
                type={"comment"}
              />
            </ImgBtn>
            <VideoBtn>
              <VideoUpload
                onChangeVideoUrls={props.onChangeVideoUrls}
                videoUrls={props.videoUrls}
                type={"comment"}
              />
            </VideoBtn>
          </CommentWriteBtn>
        </CommentWriteInputBox>
      </CommentWriteBox>
      <MediaWrapper>
        {props.fileUrls === "" && <Img src={props.commentEl.image} />}
        {props.videoUrls === "" && (
          <Video src={props.commentEl.video} controls />
        )}
        {props.fileUrls !== "" && <Img src={props.fileUrls} />}
        {props.videoUrls !== "" && <Video src={props.videoUrls} controls />}
      </MediaWrapper>
    </Wrapper>
  );
}
