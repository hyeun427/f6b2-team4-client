import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 107px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

export const ChatAccessBox = styled.div`
  width: 900px;
  height: 500px;
  background-image: url("https://cdn.discordapp.com/attachments/974505238029533295/979575695640506408/Screen_Shot_2022-05-26_at_5.47.32_PM.png");
  background-size: 900px;
`;

export const ChatAccessInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 56px;
  font-weight: 700;
  font-size: 30px;
  color: #000000;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
`;

export const UserName = styled.div`
  margin-top: 87px;
  width: 283px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;

export const NameInput = styled.input`
  width: 190px;
  border: none;
  background: none;
  border-bottom: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  :focus {
    outline: none;
  }
`;

export const LanguageBox = styled.div`
  margin-top: 29px;
  width: 283px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectLanguage = styled.select`
  width: 190px;
  border: none;
  background: none;
  border-bottom: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  :focus {
    outline: none;
  }
  cursor: pointer;
`;

export const JoinChatBtn = styled.button`
  margin-top: 73px;
  border: none;
  background: none;
  width: 300px;
  height: 40px;
  background: #ffb950;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  :disabled {
    background: gray;
  }
`;

export const SelectList = styled.option``;
