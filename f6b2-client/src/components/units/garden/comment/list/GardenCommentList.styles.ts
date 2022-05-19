import styled from "@emotion/styled";

export const CommentListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  border-top: 1px solid gray;
  padding-top: 15px;
`;

export const CommentProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;

  //test
  background-color: gray;
`;

export const CommentContentsBox = styled.main`
  background-color: #a4b1da;
  padding: 15px;
  border-radius: 15px 15px 15px 15px;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentName = styled.article`
  font-weight: 700;
  font-size: 14px;
`;

export const CommentText = styled.article`
  font-weight: 400;
  font-size: 12px;
  color: white;
  margin-top: 10px;
`;

export const CommentImg = styled.img`
  width: 200px;
  margin-top: 5px;

  // test
  height: 150px;
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

export const CreatedAt = styled.time`
  font-weight: 400;
  font-size: 11px;
  color: #767676;
`;
