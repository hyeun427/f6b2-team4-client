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
import { BiSend } from "react-icons/bi";
import ImageUpload from "../../../../commons/upload";
import VideoUpload from "../../../../commons/videoupload";

export default function GardenCommentWriteUI(props: any) {
  return (
    <>
      <CommentWriteBox>
        {props.loginInfo?.image.includes("http") ? (
          <CommentWriteProfile src={props.loginInfo?.image} />
        ) : (
          <CommentWriteProfile
            src={
              "https://cdn.discordapp.com/attachments/974505238029533295/980389912345972736/defaultuser.png"
            }
          />
        )}
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
                <BiSend />
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
      <Thumbnail>
        {props.fileUrls !== "" && <ImageThumbnail src={props.fileUrls} />}
        {props.videoUrls !== "" && (
          <VideoThumbnail src={props.videoUrls} controls />
        )}
      </Thumbnail>
    </>
  );
}
