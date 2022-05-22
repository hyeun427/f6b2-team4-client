import styled from '@emotion/styled';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 236px;
  height: auto;
  background-color: #fff;
  border: 2px solid #727da1;
  border-radius: 20px;
  padding: 20px 20px;
  margin-bottom: 20px;
  z-index: 10;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 4px;
`;

export const WrapperImgProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border: none;
  margin-right: 10px;
`;

export const ImgProfile = styled.img`
  width: 100%;
  height: 100%;
  background-color: gray;
  border-radius: 50%;
`;
export const H2ProfileName = styled.h2`
  width: 100%;
  height: 100%;
`;

export const TextareaContents = styled.textarea`
  width: 100%;
  height: 69px;
  padding: 8px 7px;
  background: #dee1ec;
  border-radius: 6px;
  border: none;
`;

export const ImgIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const ButtonSave = styled.button`
  width: 100%;
  height: auto;
`;

export const WrapperRowIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ImageItempWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: auto;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const ImageThumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;
