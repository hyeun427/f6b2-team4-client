import styled from '@emotion/styled';

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
  background-color: #d4e8ea;
  padding-top: 45px;
`;
export const WrapperRight = styled.div`
  width: 285px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 98px 0px 0px 47px;
  position: sticky;
  top: 60px;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  height: 31px;
  background: rgba(255, 255, 255, 0.55);
  border-radius: 25px;
  border: none;
  margin-bottom: 20px;
  color: #909090;
  padding: 8px 20px;
`;

export const GardenListBox = styled.main`
  width: 100%;
  padding: 30px;
  border-radius: 25px;
  border: 2px solid #727da1;
  background-color: white;
  margin-bottom: 20px;
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

  // test
  background-color: gray;
`;

export const WriterInfo = styled.article`
  display: flex;
  flex-direction: column;
`;

export const WriterName = styled.strong`
  font-size: 20px;
  font-weight: 600;
`;

export const CreatedAt = styled.time`
  margin-top: 5px;
  font-size: 15px;
  color: #65676b;
`;

export const ContentsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  width: 100%;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const ContentsTranslateBox = styled.article`
  width: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 5px;
`;

export const ContentsImg = styled.img`
  width: 335px;
  height: 221px;
  margin-top: 20px;
  // test
  background-color: gray;
`;

export const ContentsTranslate = styled.div`
  color: gray;
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
  font-size: 20px;

  margin-right: 30px;
  padding-right: 30px;
  border-right: 1px solid gray;
`;

export const CommentCount = styled.div`
  font-size: 20px;
`;

export const CommentListBtn = styled.button`
  border: none;
  background: none;
  font-size: 17px;
  color: gray;
  cursor: pointer;
`;

export const LikeAndCommentCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
