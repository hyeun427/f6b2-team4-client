import styled from "@emotion/styled";
import { BiEdit } from "react-icons/bi";

export const GardenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 730px;
`;

export const Wrapper = styled.div`
  width: 850px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #727da1;
`;

export const GardenListBox = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: white;
`;

export const ContentsImg = styled.img`
  /* 이미지 연결 후 수정하기 */
  width: 480px;
  height: 480px;
  object-fit: cover;
  /* 완성 후 삭제 할 것 */
  background-color: #ffb950;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const WriterInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WriterInfo = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const WriterProfile = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;

  /* 완성 후 삭제 */
  background-color: gray;
`;

export const WriterName = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin: 0px 5px;
`;

export const CreatedAt = styled.time`
  font-size: 8px;
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

// 수정버튼
export const IconWrapper = styled.button`
  color: white;
  border: none;
  background-color: white;

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0));
  cursor: pointer;
`;

export const EditIcon = styled(BiEdit)`
  color: black;
  width: 24px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  :hover {
    color: #ffb950;
  }
`;
