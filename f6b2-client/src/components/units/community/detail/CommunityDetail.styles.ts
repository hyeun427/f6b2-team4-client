import styled from "@emotion/styled";
import { GiHearts } from "react-icons/gi";
import { RiFileEditLine, RiDeleteBinLine } from "react-icons/ri";
import { BsListUl } from "react-icons/bs";
import { ICommunityDetailUIProps } from "./CommunityDetail.types";

export const OutWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 730px;
`;

export const Wrapper = styled.div`
  margin-top: 120px;
  width: 700px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000000;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 14px;
  background-color: white;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.25));
  border-radius: 50px;
`;

export const Writer = styled.div`
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  color: #000000;
  text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #000000;
  text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
`;

export const Img = styled.img`
  width: 300px;
  height: 350px;
  margin-bottom: 45px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  object-fit: cover;
`;

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GiHeartsIcon = styled(GiHearts)`
  font-size: 15px;
  color: lightgray;
`;

export const Likes = styled.div`
  font-size: 13px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const Detail = styled.div`
  margin-bottom: 45px;
  padding: 39px 37px;
  background: #3a3939;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 350px;
  height: 350px;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  color: #ffffff;
  border-bottom: 1px solid #cdcdcd;
`;

export const ContentsBox = styled.div`
  width: 100%;
  height: 230px;
  overflow: auto;
`;

export const Contents = styled.div`
  font-size: 13px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.button`
  color: white;
  border: none;
  background-color: white;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0));
  cursor: pointer;
`;

export const ListIcon = styled(BsListUl)`
  color: black;
  font-size: 22px;

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  :hover {
    color: #ffb950;
  }
`;

export const EditIcon = styled(RiFileEditLine)`
  color: black;
  font-size: 22px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  :hover {
    color: #ffb950;
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  color: black;
  font-size: 22px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  :hover {
    color: #ffb950;
  }
`;
