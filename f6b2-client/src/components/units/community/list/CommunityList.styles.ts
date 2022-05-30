import styled from "@emotion/styled";
import { GiHearts } from "react-icons/gi";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  /* padding-bottom: 40px; */
  height: 605px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 68px;
  margin-bottom: 55px;
  width: 756px;
  line-height: 1.2;
`;

export const PageName = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 22px;
  height: 22px;
  background-color: white;
  color: black;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  border: 2px solid black;
  border-radius: 7px;
  :hover {
    cursor: pointer;
    width: 22px;
    height: 22px;
    background-color: white;
    color: #ffb950;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    border: 2px solid #ffb950;
    border-radius: 7px;
    transform: scale(1.15);
    transition: 0.4s;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 705px;
`;

export const ContentsWrapper = styled.div`
  width: 130px;
  margin-bottom: 20px;
  filter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25));
`;

export const Img = styled.img`
  width: 130px;
  height: 160px;
  object-fit: cover;
  border: 2px solid none;
  border-radius: 10px;
  transition-duration: 1s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;
  width: 120px;
`;

export const Info = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const HeartsWrapper = styled.button`
  color: #ff5b5b;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const Likes = styled.div`
  font-size: 10px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const GiHeartsIcon = styled(GiHearts)``;
