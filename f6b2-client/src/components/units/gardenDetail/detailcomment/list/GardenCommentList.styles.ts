import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: auto;
`;

export const CommentListBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 15px;
  border-top: 1px solid gray;
  padding-top: 15px;
`;

export const CommentProfile = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 40px;
  margin-right: 5px;
  //test
  background-color: gray;
`;

export const CommentContentsBox = styled.main`
  display: flex;
  flex-direction: column;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentName = styled.article`
  font-weight: 700;
  font-size: 12px;
  margin-right: 3px;
`;
export const CreatedAt = styled.div`
  color: #767676;
  margin-right: 3px;
`;

export const CommentText = styled.article`
  font-weight: 400;
  font-size: 12px;
`;

export const CommentImg = styled.img`
  width: 120px;
  height: 80px;
  margin-top: 5px;

  // test
  background-color: gray;
`;

export const CommentBtns = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const EditBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;
