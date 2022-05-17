import styled from "@emotion/styled";

export const OutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4e8ea;
`;

export const Wrapper = styled.div`
  width: 997px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 55px 0px 65px;
`;

export const PageName = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const BtnWrapper = styled.div`
  width: 138px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FilterBtn = styled.button`
  width: 66px;
  height: 27px;
  background-color: white;
  font-size: 13px;
  color: #a4b1da;
  border: 2px solid #a4b1da;
  border-radius: 17px;
`;

export const WriteBtn = styled.button`
  width: 66px;
  height: 27px;
  background-color: white;
  font-size: 13px;
  color: #a4b1da;
  border: 2px solid #a4b1da;
  border-radius: 17px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 175px;
`;

export const Img = styled.div`
  width: 100%;
  height: 210px;
  border: 2px solid #a4b1da;

  text-align: center;
  /* 완성 후 삭제 */
  background-color: white;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;
  width: 100%;
  height: 90px;
`;

export const Info = styled.div``;

export const Title = styled.div`
  font-size: 15px;
`;

export const Writer = styled.div`
  font-size: 12px;
`;

export const Date = styled.div`
  font-size: 10px;
  color: #6a6a6a;
`;

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const HeartsWrapper = styled.button`
  color: white;
  border: none;
  background-color: #d4e8ea;
  cursor: pointer;
`;
export const Likes = styled.div`
  font-size: 10px;
`;
