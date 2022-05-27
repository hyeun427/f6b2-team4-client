import {
  ChatAccessBox,
  ChatAccessInfoBox,
  JoinChatBtn,
  LanguageBox,
  NameInput,
  SelectLanguage,
  SelectList,
  SubTitle,
  Title,
  UserName,
  Wrapper,
} from "./ChatAccess.styles";

export default function ChatAccessUI() {
  return (
    <Wrapper>
      <ChatAccessBox>
        <ChatAccessInfoBox>
          <Title>Language Group Chat</Title>
          <UserName>
            <SubTitle>User Name</SubTitle>
            <NameInput placeholder="Enter your user name" />
          </UserName>
          <LanguageBox>
            <SubTitle>Language</SubTitle>
            <SelectLanguage defaultValue={"Select language"}>
              <SelectList disabled={true}>Select language</SelectList>
              <SelectList>한국어</SelectList>
              <SelectList>English</SelectList>
              <SelectList>日本語</SelectList>
              <SelectList>español</SelectList>
              <SelectList>Français</SelectList>
              <SelectList>中国</SelectList>
            </SelectLanguage>
          </LanguageBox>
          <JoinChatBtn>Join Chat Room</JoinChatBtn>
        </ChatAccessInfoBox>
      </ChatAccessBox>
    </Wrapper>
  );
}
