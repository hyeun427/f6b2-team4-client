import styled from "@emotion/styled";
import { BsFileEarmarkImage } from "react-icons/bs";
import { MdUploadFile } from "react-icons/md";

export const OutWrapper = styled.div`
  background-color: #d4e8ea;
  display: flex;
  justify-content: center;
  height: 730px;
`;

export const Wrapper = styled.div`
  margin-top: 64px;
  width: 700px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 43px;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 16px 0px 16px 32px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50px 0px;
  ::placeholder {
    color: #767676;
    font-size: 11px;
  }
  :focus {
    outline: none;
  }
`;

export const ReactQuillWrapper = styled.div`
  margin-bottom: 43px;
  width: 700px;

  .quill {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 50px 0px;
  }
  .ql-toolbar {
    height: 48px;
  }
  .ql-toolbar.ql-snow {
    padding: 13px 0px 13px 34px;
    border: none;
    border-bottom: 2px solid #b9b9b9;
  }

  .ql-container {
    height: 251px;
  }
  .ql-container.ql-snow {
    border: none;
  }
`;

export const ImgWrapper = styled.div`
  margin-bottom: 52px;
  padding: 21px 51px 0px 51px;
  width: 700px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px;
  font-size: 11px;
  font-weight: 700;
  color: #999999;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgBtn = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0);
`;

export const BsFileEarmarkIcon = styled(BsFileEarmarkImage)`
  font-size: 20px;
  color: #999999;
  cursor: pointer;
`;

export const Img = styled.div``;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadBtn = styled.button`
  width: 120px;
  height: 30px;
  color: #999999;
  font-size: 11px;

  border: 2px solid #999999;
  border-radius: 10px;
  background-color: #d4e8ea;
  cursor: pointer;
`;

export const MdUploadFileIcon = styled(MdUploadFile)``;
