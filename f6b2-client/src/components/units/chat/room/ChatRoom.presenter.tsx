import Head from "next/head";
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
} from "./ChatRoom.styles";

export default function ChatRoomUI(props) {
  return (
    <>
      <Wrapper>
        <ChatRoomBox>
          <Header>
            <Title>{props.room}</Title>
          </Header>
          <MainBox>
            <Sidebar>
              <NameWrapper>
                <UserName>{props.name}</UserName>

                <MemberName>aa</MemberName>
              </NameWrapper>
              <ExitBtn>Exit Chat Room</ExitBtn>
            </Sidebar>
            <ChatRoom>
              {props.messages?.map((el, index) => (
                <TalkBox key={index}>
                  <UserInfo>
                    <Name>Jay</Name>
                    <CreatedAt>5:24 PM</CreatedAt>
                  </UserInfo>
                  <Content>{el}</Content>
                </TalkBox>
              ))}
              <InputBoxWrapper>
                <InputBox>
                  <MessageInput
                    placeholder="Enter your text here"
                    onChange={props.onChangeMessage}
                  />
                  <SubmitBtn onClick={props.onClickSendMessage}>
                    Submit
                  </SubmitBtn>
                </InputBox>
              </InputBoxWrapper>
            </ChatRoom>
          </MainBox>
        </ChatRoomBox>
      </Wrapper>
    </>
  );
}
