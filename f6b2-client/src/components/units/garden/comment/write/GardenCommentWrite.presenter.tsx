import {
  CommentWriteBox,
  CommentWriteBtn,
  CommentWriteInput,
  CommentWriteInputBox,
  CommentWriteProfile,
  ImageThumbnail,
  ImgBtn,
  SubmitBtn,
  Thumbnail,
  VideoBtn,
  VideoThumbnail,
} from "./GardenCommentWrite.styles";
import { MdForwardToInbox, MdPhoto, MdPhotoCameraFront } from "react-icons/md";
import ImageUpload from "../../../../commons/upload";
import VideoUpload from "../../../../commons/videoupload";

export default function GardenCommentWriteUI(props: any) {
  return (
    <>
      <CommentWriteBox>
        <CommentWriteProfile />
        <CommentWriteInputBox>
          <CommentWriteInput
            placeholder="Enter Your Comment Here!"
            type={"text"}
            onChange={props.onChangeComment}
            // value={props.comment || props.commentEl?.content || ""}
            value={props.comment}
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
                type={"garden"}
              />
            </ImgBtn>
            <VideoBtn>
              <VideoUpload
                onChangeVideoUrls={props.onChangeVideoUrls}
                videoUrls={props.videoUrls}
                type={"garden"}
              />
            </VideoBtn>
          </CommentWriteBtn>
        </CommentWriteInputBox>
      </CommentWriteBox>
      <Thumbnail>
        {props.fileUrls?.map((el, index) => (
          <ImageThumbnail
            key={index}
            src={
              el.startsWith("https", 0)
                ? el
                : `https://storage.googleapis.com/${el}`
            }
          />
        ))}
        {props.videoUrls?.map((el, index) => (
          <VideoThumbnail
            key={index}
            src={
              el.startsWith("https", 0)
                ? el
                : `https://storage.googleapis.com/${el}`
            }
            controls
          />
        ))}
      </Thumbnail>
    </>
  );
}
