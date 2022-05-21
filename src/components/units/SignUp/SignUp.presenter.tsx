import {
  AuthCallBtn,
  AuthInput,
  AuthInputBox,
  AuthSubmitBtn,
  EmailBtn,
  EmailInput,
  EmailInputBox,
  LangSelectBox,
  PasswordInput,
  PasswordInputBox,
  RePasswordInput,
  RePasswordInputBox,
  Select1,
  Select2,
  SelectBox1,
  SelectBox2,
  SelectList,
  SignUpBox,
  SignUpBtn,
  SignUpTitle,
  Wrapper,
} from "./SignUp.styles";
import { TiDeleteOutline } from "react-icons/ti";
import { Select } from "antd";
export default function SignUpUI() {
  return (
    <Wrapper>
      <SignUpTitle>SignUp</SignUpTitle>
      <SignUpBox>
        <EmailInputBox>
          <EmailInput placeholder="이메일을 입력하세요" />
          <EmailBtn>
            <TiDeleteOutline size={"25"} />
          </EmailBtn>
        </EmailInputBox>
        {/* 에러위치 */}
        <AuthCallBtn>인증번호 받기</AuthCallBtn>

        <AuthInputBox>
          <AuthInput placeholder="인증번호를 입력하세요" />
        </AuthInputBox>
        {/* 인증제한시간위치 */}
        <AuthSubmitBtn>인증 확인하기</AuthSubmitBtn>
        <PasswordInputBox>
          <PasswordInput placeholder="비밀번호" />
        </PasswordInputBox>
        <RePasswordInputBox>
          <RePasswordInput placeholder="비밀번호 확인" />
        </RePasswordInputBox>
        <LangSelectBox>
          <SelectBox1>
            <Select1 defaultValue={"MotherTongue"}>
              <SelectList disabled={true}>MotherTongue</SelectList>
              <SelectList>한국어</SelectList>
              <SelectList>영어</SelectList>
              <SelectList>일본어</SelectList>
            </Select1>
          </SelectBox1>
          <SelectBox2>
            <Select2 defaultValue={"LearningLanguage"}>
              <SelectList disabled={true}>LearningLanguage</SelectList>
              <SelectList>한국어</SelectList>
              <SelectList>영어</SelectList>
              <SelectList>일본어</SelectList>
            </Select2>
          </SelectBox2>
        </LangSelectBox>
        <SignUpBtn>회원가입</SignUpBtn>
      </SignUpBox>
    </Wrapper>
  );
}
