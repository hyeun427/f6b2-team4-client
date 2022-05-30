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
  height: 61px;
  background: #3a3939;
  border-radius: 0px 0px 0px 10px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: #ffb950;
  }
`;

export const ChatRoom = styled.div`
  width: 640px;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TalkBox = styled.div`
  width: 300px;
  background: #ffb950;
  border-radius: 30px 30px 30px 0px;
  padding: 12px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: #000000;
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #000000;
`;

export const InputBoxWrapper = styled.div`
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dbdbdb;
  padding: 10px;
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
  border: none;
  background: none;
  margin-right: 5px;
  cursor: pointer;
`;

export const TalkWrapper = styled.div`
  overflow: auto;
`;

export const TalkMyBox = styled.div`
  width: 300px;
  background: #3a3939;
  border-radius: 30px 30px 0px 30px;
  padding: 12px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 310px;
`;

export const MyUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MyName = styled.div`
  font-weight: 700;
  font-size: 15px;
  color: white;
`;

export const MyContent = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: white;
`;
