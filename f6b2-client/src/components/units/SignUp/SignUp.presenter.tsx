import {
  AuthCallBtn,
  AuthInput,
  AuthInputBox,
  AuthSubmitBtn,
  EmailInput,
  EmailInputBox,
  Error,
  LangSelectBox,
  PasswordInput,
  PasswordInputBox,
  RePasswordInput,
  RePasswordInputBox,
  Select1,
  Select2,
  SelectBox1,
  SelectBox2,
  SelectError,
  SelectList,
  SignUpBox,
  SignUpBtn,
  SignUpTitle,
  VisibleBtn,
  Wrapper,
} from "./SignUp.styles";
import "antd/dist/antd.css";
import { Select } from "antd";
import { AiOutlineEye } from "react-icons/ai";

export default function SignUpUI(props: any) {
  const { Option } = Select;
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <Wrapper>
        <SignUpBox>
          <SignUpTitle>Sign Up</SignUpTitle>
          <EmailInputBox>
            <EmailInput
              placeholder="Enter your email"
              {...props.register("email")}
              disabled={props.authDisable}
              onChange={props.onChangeEmail}
            />
            <AuthCallBtn
              type="button"
              onClick={props.onClickAuthCall}
              disabled={props.authDisable}
            >
              Verify
            </AuthCallBtn>
          </EmailInputBox>
          <Error>{props.emailError}</Error>
          <AuthInputBox>
            <AuthInput
              placeholder="Enter your verification code"
              onChange={props.onChangeAuthNum}
              disabled={props.authCheckDisable}
            />
            <AuthSubmitBtn
              type="button"
              onClick={props.onClickAuthNumCheck}
              disabled={props.authCheckDisable}
            >
              Verify
            </AuthSubmitBtn>
          </AuthInputBox>
          <Error>{props.authError}</Error>
          <PasswordInputBox>
            <PasswordInput
              placeholder="Enter your password"
              {...props.register("password")}
              type={props.passwordVisible}
            />
            <VisibleBtn type="button" onClick={props.onClickVisible}>
              <AiOutlineEye />
            </VisibleBtn>
          </PasswordInputBox>
          <Error>{props.passwordError}</Error>
          <RePasswordInputBox>
            <RePasswordInput
              placeholder="Password check"
              {...props.register("rePassword")}
              type={props.rePasswordVisible}
            />
            <VisibleBtn type="button" onClick={props.onClickReVisible}>
              <AiOutlineEye />
            </VisibleBtn>
          </RePasswordInputBox>
          <Error>{props.rePasswordError}</Error>
          <LangSelectBox>
            <SelectBox1>
              <Select1 defaultValue={"My Lang"} {...props.register("myLang")}>
                <SelectList disabled={true}>My Lang</SelectList>
                <SelectList>한국어</SelectList>
                <SelectList>English</SelectList>
                <SelectList>日本語</SelectList>
                <SelectList>español</SelectList>
                <SelectList>Français</SelectList>
                <SelectList>中国</SelectList>
              </Select1>
              <SelectError>{props.myLangError}</SelectError>
            </SelectBox1>
            <SelectBox2>
              <Select2
                defaultValue={"Learn Lang"}
                {...props.register("learnLang")}
              >
                <SelectList disabled={true}>Learn Lang</SelectList>
                <SelectList>한국어</SelectList>
                <SelectList>English</SelectList>
                <SelectList>日本語</SelectList>
                <SelectList>español</SelectList>
                <SelectList>Français</SelectList>
                <SelectList>中国</SelectList>
              </Select2>
              <SelectError>{props.learnLangError}</SelectError>
            </SelectBox2>
          </LangSelectBox>
          <SignUpBtn disabled={props.signUpDisable}>회원가입</SignUpBtn>
        </SignUpBox>
      </Wrapper>
    </form>
  );
}
