import styled from "@emotion/styled";

export const CommentWriteBox = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  border-top: 1px solid lightgray;
`;

export const CommentWriteProfile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 40px;
  margin-right: 3px;

  //test
  background-color: gray;
`;

export const CommentWriteInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 34px;
  border-radius: 3px;
`;

export const CommentWriteInput = styled.input`
  width: 100%;
  height: 34px;
  border-radius: 3px;
  border: none;
  font-weight: 400;
  font-size: 12px;
  padding-left: 9.5px;
  ::placeholder {
    font-size: 9px;
  }
  // test
  /* background-color: red; */
`;

export const CommentWriteBtn = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SubmitBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 10px;
  cursor: pointer;
`;

export const ImgBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 10px;
  cursor: pointer;
`;

export const VideoBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 10px;
  cursor: pointer;
  margin-right: 3px;
`;
