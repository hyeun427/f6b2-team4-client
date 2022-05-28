import Head from 'next/head';
import {
  ChatRoom,
  ChatRoomBox,
  Content,
  CreatedAt,
  ExitBtn,
  Header,
  InputBox,
  InputBoxWrapper,
  MainBox,
  MemberName,
  MessageInput,
  Name,
  NameWrapper,
  Sidebar,
  SubmitBtn,
  TalkBox,
  Title,
  UserInfo,
  UserName,
  Wrapper,
} from './ChatRoom.styles';

export default function ChatRoomUI(props) {
  return (
    <>
      <Wrapper>
        <ChatRoomBox>
          <Header>
            <Title>{props.language}</Title>
          </Header>
          <MainBox>
            <Sidebar>
              <NameWrapper>
                <UserName>{props.name}</UserName>
                <MemberName>Jay</MemberName>
              </NameWrapper>
              <ExitBtn>Exit Chat Room</ExitBtn>
            </Sidebar>
            <ChatRoom>
              <TalkBox>
                <UserInfo>
                  <Name>Jay</Name>
                  <CreatedAt>5:24 PM</CreatedAt>
                </UserInfo>
                <Content>Hello!</Content>
              </TalkBox>
              <InputBoxWrapper>
                <InputBox>
                  <MessageInput placeholder='Enter your text here' />
                  <SubmitBtn>Submit</SubmitBtn>
                </InputBox>
              </InputBoxWrapper>
            </ChatRoom>
          </MainBox>
        </ChatRoomBox>
      </Wrapper>
    </>
  );
}
