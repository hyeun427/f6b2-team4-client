import * as S from "./CommunityWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { Quill } from "react-quill";

export default function CommunityListUI(props) {
  /*   // 에디터 커스텀
  const fontSizeArr = ["11px", "14px", "16px", "20px"];

  var Size = Quill.import("formats/size");
  Size.whitelist = fontSizeArr;
  Quill.register(Size, true);

  const modules = {
    toolbar: [
      // [{ header: [1, 2, 3] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: fontSizeArr }],
    ],
  }; */

  return (
    <S.OutWrapper>
      <S.Wrapper>
        {/* 제목 */}
        <S.TitleWrapper>
          <S.TitleInput
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
          />
        </S.TitleWrapper>

        {/* 내용 */}
        <S.ReactQuillWrapper>
          {/* 툴바 커스텀은 나중에 */}
          {/* <ReactQuill modules={modules} onChange={props.onChangeContent} /> */}
          <ReactQuill onChange={props.onChangeContent} />
        </S.ReactQuillWrapper>

        {/* 사진 */}
        <S.ImgWrapper>
          Image Upload
          <S.IconWrapper>
            <S.ImgBtn>
              <S.BsFileEarmarkIcon />
            </S.ImgBtn>
          </S.IconWrapper>
        </S.ImgWrapper>

        {/* 업로드버튼 */}
        <S.BtnWrapper>
          <S.UploadBtn onClick={props.onClickSubmit}>
            <S.MdUploadFileIcon />
            Upload
          </S.UploadBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
