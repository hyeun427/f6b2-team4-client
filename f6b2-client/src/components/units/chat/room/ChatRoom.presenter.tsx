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
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.9.2/qs.min.js"
          integrity="sha512-f0AM6x08kthGzMyDHZjBgjBCPp8V8ovlHYCI1jMkhViTeX3MykGCf/DnN1khWss/6d1105eAG4TniSKy6UhZrw=="
          crossorigin="anonymous"
        ></script>
        <script src="/socket.io/socket.io.js"></script>
        <script src="js/main.js"></script>
      </Head>
      <Wrapper>
        <ChatRoomBox>
          <Header>
            <Title>English</Title>
          </Header>
          <MainBox>
            <Sidebar>
              <NameWrapper>
                <UserName>Users</UserName>
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
                  <MessageInput placeholder="Enter your text here" />
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
