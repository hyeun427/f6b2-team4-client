import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHearts } from "react-icons/gi";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-bottom: 40px;
  height: 673px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 47px;
  width: 783px;
`;

export const PageName = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const BarBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 220px;
  height: 73px;
`;

export const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px 5px;
  width: 100%;
  background-color: #dbdbdb;
  border: none;
  border-radius: 5px;
`;

export const Searchbar = styled.input`
  width: 100%;
  background-color: #dbdbdb;
  border: none;
  border-radius: 5px;
  :focus {
    outline: none;
  }
`;

export const AiOutlineSearchIcon = styled(AiOutlineSearch)`
  color: #a4b1da;
  margin: 0px 5px;
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
  background-color: #3a3939;
  font-size: 13px;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 17px;
  :hover {
    cursor: pointer;
    width: 66px;
    height: 27px;
    background-color: #ffb950;
    font-size: 13px;
    font-weight: 700;
    color: white;
    border: none;
    border-radius: 17px;
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
  color: red;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const Likes = styled.div`
  font-size: 10px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const GiHeartsIcon = styled(GiHearts)``;
