import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4e8ea;
  padding-bottom: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 55px 0px 47px;
  width: 900px;
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

export const Button = styled.button`
  cursor: pointer;
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
  flex-direction: row;
  justify-content: space-between;
  width: 750px;
`;

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 18px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;
export const HeartsWrapper = styled.div`
  color: white;
  cursor: pointer;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const Likes = styled.div`
  font-size: 10px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;
  width: 120px;
  height: 90px;
`;

export const Info = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 13px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const Writer = styled.div`
  font-size: 10px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const Date = styled.div`
  font-size: 10px;
  color: #6a6a6a;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const Img = styled.img`
  width: 120px;
  height: 160px;
  object-fit: cover;
  border: 2px solid none;
  filter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25));
`;
