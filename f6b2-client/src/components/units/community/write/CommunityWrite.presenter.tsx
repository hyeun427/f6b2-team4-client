import * as S from "./CommunityWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CommunityListUI() {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        {/* 제목 */}
        <S.TitleWrapper>
          <S.TitleInput type="text" placeholder="제목을 작성해주세요." />
        </S.TitleWrapper>

        {/* 내용 */}
        <S.ReactQuillWrapper>
          <ReactQuill />
        </S.ReactQuillWrapper>

        {/* 사진 */}
        <S.ImgWrapper>
          Image Upload
          <S.IconWrapper>
            <S.ImgBtn>
              <S.BsFileEarmarkIcon />
            </S.ImgBtn>
          </S.IconWrapper>
          {/* <S.Img>Upload</S.Img> */}
        </S.ImgWrapper>

        {/* 업로드버튼 */}
        <S.BtnWrapper>
          <S.UploadBtn>
            {/* <S.UploadBtn onClick={props.onClickSubmit}> */}
            <S.MdUploadFileIcon />
            Upload
          </S.UploadBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
