import styled from "@emotion/styled";

export const CommentListBox = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  border-top: 1px solid gray;
  padding-top: 15px;
`;

export const CommentProfile = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  //test
  background-color: gray;
`;

export const CommentContentsBox = styled.main`
  width: 90%;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentName = styled.article`
  font-weight: 700;
  font-size: 14px;
  margin: 0px 5px;
`;

export const CreatedAt = styled.time`
  font-size: 8px;
  margin: 0px 5px;
  color: #65676b;
`;

export const CommentText = styled.article`
  font-weight: 400;
  font-size: 12px;
  color: black;
  margin-top: 10px;
  width: 300px;
`;

export const CommentImg = styled.img`
  width: 200px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const CommentVideo = styled.video`
  width: 300px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const MediaBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentBtns = styled.section`
  width: auto;
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

// export const CreatedAt = styled.time`
//   font-weight: 400;
//   font-size: 11px;
//   color: #767676;
// `;

export const Like = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 15px;
  font-size: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OtherBtns = styled.div`
  margin-left: 20px;
`;

export const Row1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
