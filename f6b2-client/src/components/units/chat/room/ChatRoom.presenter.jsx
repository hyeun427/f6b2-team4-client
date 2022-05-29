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
  console.log(props.messages);
  return (
    <>
      <Wrapper>
        <ChatRoomBox>
          <Header>
            <Title>{props.room}</Title>
            <div
              style={{ color: "white", fontSize: "40px" }}
              onClick={props.onClickExitChat}
            >
              x
            </div>
          </Header>
          <MainBox>
            <Sidebar>
              <NameWrapper>
                <UserName>{props.name}</UserName>
                {props.users !== "" && (
                  <>
                    {props.users.map((el) => (
                      <MemberName>{el.name}</MemberName>
                    ))}
                  </>
                )}
              </NameWrapper>
              <ExitBtn>Exit Chat Room</ExitBtn>
            </Sidebar>
            <ChatRoom>
              {props.messages !== "" && (
                <>
                  {props.messages.map((el) => (
                    <TalkBox>
                      <UserInfo>
                        <Name></Name>
                        <CreatedAt>5:24 PM</CreatedAt>
                      </UserInfo>
                      <Content>{el[0].text}</Content>
                    </TalkBox>
                  ))}
                </>
              )}
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
