import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ChatRoomBox = styled.div`
  margin-top: 106px;
  width: 900px;
  height: 493px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Header = styled.div`
  width: 100%;
  height: 52px;
  background-color: #3a3939;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #ffb950;
  padding: 10px;
  padding-left: 60px;
`;

export const MainBox = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  width: 260px;
  height: 440px;
  border-right: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameWrapper = styled.div`
  padding: 60px;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;

export const MemberName = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  margin-top: 10px;
`;

export const ExitBtn = styled.button`
  border: none;
  background: none;
  width: 259px;
  height: 62px;
  background: #3a3939;
  border-radius: 0px 0px 0px 10px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
`;

export const ChatRoom = styled.div`
  width: 640px;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TalkBox = styled.div`
  width: 563px;
  height: 50px;
  background: #ffb950;
  border-radius: 30px 30px 30px 0px;
  padding: 12px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 40px;
  margin-left: 40px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: #000000;
`;

export const CreatedAt = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;

export const InputBoxWrapper = styled.div`
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dbdbdb;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 563px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  align-items: center;
  padding-left: 15px;
`;

export const MessageInput = styled.input`
  width: 100%;
  border: none;
  background: none;
  :focus {
    outline: none;
  }
  font-weight: 400;
  font-size: 14px;
`;

export const SubmitBtn = styled.button`
  background: none;
  border: 1px solid black;
  width: 100px;
  height: 30px;
  margin-right: 5px;
  border-radius: 30px;
`;
