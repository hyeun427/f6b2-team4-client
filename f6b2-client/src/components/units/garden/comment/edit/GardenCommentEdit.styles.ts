import styled from "@emotion/styled";

export const CommentWriteBox = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  // test
  /* background-color: gray; */
`;

export const CommentWriteProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 15px;

  //test
  background-color: gray;
`;

export const CommentWriteInputBox = styled.article`
  width: 385px;
  height: 34px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;

  // test
  background-color: #a4b1da;
`;

export const CommentWriteInput = styled.input`
  width: 286px;
  height: 24px;
  border: none;
  border-radius: 11px;
  margin-left: 3.5px;
  font-weight: 400;
  font-size: 12px;
  padding-left: 9.5px;
`;

export const CommentWriteBtn = styled.section`
  width: 130px;
  display: flex;
  flex-direction: row;
  margin-left: 8px;
`;

export const SubmitBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 25px;
  cursor: pointer;
`;

export const ImgBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 25px;
  cursor: pointer;
  margin-left: 13px;
`;

export const VideoBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 25px;
  cursor: pointer;
  margin-left: 13px;
`;
