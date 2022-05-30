import {
  ChatRoom,
  ChatRoomBox,
  Content,
  ExitBtn,
  Header,
  InputBox,
  InputBoxWrapper,
  MainBox,
  MemberName,
  MessageInput,
  MyContent,
  MyName,
  MyUserInfo,
  Name,
  NameWrapper,
  Sidebar,
  SubmitBtn,
  TalkBox,
  TalkMyBox,
  TalkWrapper,
  Title,
  UserInfo,
  UserName,
  Wrapper,
} from "./ChatRoom.styles";
import { RiArrowGoBackLine } from "react-icons/ri";
import { BiSend } from "react-icons/bi";
import ScrollToBottom from "react-scroll-to-bottom";

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
                {props.users !== "" && (
                  <>
                    {props.users.map((el) => (
                      <MemberName>- {el.name}</MemberName>
                    ))}
                  </>
                )}
              </NameWrapper>
              <ExitBtn onClick={props.onClickExitChat}>
                <RiArrowGoBackLine style={{ marginRight: "10px" }} />
                Exit Chat Room
              </ExitBtn>
            </Sidebar>
            <ChatRoom>
              {props.messages !== "" && (
                <TalkWrapper ref={props.messageBoxRef}>
                  {props.messages.map((el) => (
                    <>
                      {el.user !== props.name ? (
                        <TalkBox>
                          <UserInfo>
                            <Name>{el.user}</Name>
                          </UserInfo>
                          <Content>{el.text}</Content>
                        </TalkBox>
                      ) : (
                        <TalkMyBox>
                          <MyUserInfo>
                            <MyName>{el.user}</MyName>
                          </MyUserInfo>
                          <MyContent>{el.text}</MyContent>
                        </TalkMyBox>
                      )}
                    </>
                  ))}
                </TalkWrapper>
              )}
              <InputBoxWrapper>
                <InputBox>
                  <MessageInput
                    placeholder="Enter your text here"
                    onChange={props.onChangeMessage}
                    onKeyPress={props.onKeyPressSubmit}
                    onClick={props.onClickSendMessage}
                    value={props.message}
                  />
                  <SubmitBtn
                    onClick={props.onClickSendMessage}
                    disabled={props.sendValid}
                  >
                    <BiSend />
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
