import styled from "@emotion/styled";
import { GiHearts } from "react-icons/gi";
import { BiReceipt, BiEdit, BiTrash } from "react-icons/bi";

export const OutWrapper = styled.div`
  background-color: #d4e8ea;
  display: flex;
  justify-content: center;
  /* height 다시 수정 할 것 */
  height: 730px;
`;

export const Wrapper = styled.div`
  margin-top: 64px;
  width: 700px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  text-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 300px;
  height: 350px;
  margin-bottom: 45px;
`;

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GiHeartsIcon = styled(GiHearts)`
  font-size: 15px;
`;

export const Likes = styled.div`
  font-size: 13px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const Detail = styled.div`
  margin-bottom: 45px;
  padding: 39px 37px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px 0px;
  width: 350px;
  height: 350px;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  padding-bottom: 6px;
  font-size: 11px;
  border-bottom: 1px solid #a5a5a5;
`;

export const Contents = styled.div`
  font-size: 11px;
`;

export const BtnWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.button`
  color: white;
  border: none;
  background-color: #d4e8ea;
  /* color: ${(props: ICommunityLikeProps) => (props.like ? "red" : "none")}; */
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0));
  cursor: pointer;
`;

export const ListIcon = styled(BiReceipt)`
  color: white;
  width: 24px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const EditIcon = styled(BiEdit)`
  color: white;
  width: 24px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const DeleteIcon = styled(BiTrash)`
  color: white;
  width: 24px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`;
