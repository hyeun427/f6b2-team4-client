import styled from "@emotion/styled";

export const TmpDiv = styled.div`
  width: 100%;
  height: 60px;
`;

export const GardenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

export const WrapperLeft = styled.div`
  width: 285px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 98px 47px 0px 0px;
  position: sticky;
  top: 60px;
`;

export const Wrapper = styled.div`
  width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-top: 45px;
`;
export const WrapperRight = styled.div`
  width: 236px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 60px;
  margin-left: 50px;
  padding: 98px 0px 0px 0px;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  height: 31px;
  border: none;
  margin-bottom: 20px;
  color: #909090;
  padding: 8px 20px;

  background: rgba(219, 219, 219, 0.55);
  border-radius: 25px;
`;

export const GardenListBox = styled.main`
  width: 100%;
  padding: 30px;
  border: 1px solid #dbdbdb;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  margin-bottom: 50px;
`;

export const WriterInfoBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WriterProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 10px;
  cursor: pointer;

  // test
  background-color: gray;
`;

export const WriterInfo = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WriterName = styled.strong`
  font-weight: 700;
  font-size: 14px;
  margin-right: 5px;
`;

export const CreatedAt = styled.time`
  margin-top: 1px;
  font-weight: 400;
  font-size: 11px;
  color: #65676b;
`;

export const ContentsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const ContentsTranslateBox = styled.article`
  width: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 5px;
`;

// export const ContentsImg = styled.img`
//   width: 335px;
//   height: 221px;
//   margin-top: 30px;
//   // test
//   background-color: gray;
// `;

export const ContentsTranslate = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #a4b1da;
`;

export const LikeAndCommentCountBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Like = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;

  margin-right: 30px;
  padding-right: 30px;
  border-right: 1px solid gray;
`;

export const CommentCount = styled.div`
  font-weight: 400;
  font-size: 12px;
`;

export const CommentListBtn = styled.button`
  border: none;
  background: none;
  font-weight: 400;
  font-size: 12px;
  color: gray;
  cursor: pointer;
`;

export const LikeAndCommentCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputSearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;