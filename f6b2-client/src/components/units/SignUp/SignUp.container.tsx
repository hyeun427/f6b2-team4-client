import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SignUpUI from "./SignUp.presenter";
import { AUTH_NUM_CHECK, CREATE_USER, EMAIL_CHECK } from "./SignUp.queries";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);
  const [emailCheck] = useMutation(EMAIL_CHECK);
  const [verification] = useMutation(AUTH_NUM_CHECK);
  // 인증번호를 받고 누르면 true로 바뀌어서 분기를 태우는 값
  const [authNumVal, setAuthNumVal] = useState(false);
  // 내가 친 인증번호
  const [authNum, setAuthNum] = useState("");
  // 내가 친 이메일
  const [email, setEmail] = useState("");
  // 이메일 에러
  const [emailError, setEmailError] = useState("");
  // 인증번호 에러메세지
  const [authError, setAuthError] = useState("");
  // 인증번호 받기를 누를 시 버튼 authCall css-disabled 상태값
  const [authDisable, setAuthDisable] = useState(false);
  // 인증번호 받기를 누를 시 버튼 authCheck css-disabled 상태값
  const [authCheckDisable, setAuthCheckDisable] = useState(true);
  // 인증번호 인증이 설공할 시 signUp css-disabled 상태값
  const [signUpDisable, setSignUpDisable] = useState(true);
  // 눈버튼 누르면 비밀번호가 보임
  const [passwordVisible, setPasswordVisible] = useState("password");
  // 눈버튼 누르면 check비밀번호가 보임
  const [rePasswordVisible, setRePasswordVisible] = useState("password");
  // 모국어 error
  const [myLangError, setMyLangError] = useState("");
  // 배울언어 error
  const [learnLangError, setLearnLangError] = useState("");
  // 비밀번호 에러
  const [passwordError, setPasswordError] = useState("");
  // 비밀번호 확인 에러
  const [rePasswordError, setRePasswordError] = useState("");

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const onClickVisible = () => {
    if (passwordVisible === "password") {
      setPasswordVisible("text");
      return;
    } else {
      setPasswordVisible("password");
      return;
    }
  };

  const onClickReVisible = () => {
    if (rePasswordVisible === "password") {
      setRePasswordVisible("text");
      return;
    } else {
      setRePasswordVisible("password");
      return;
    }
  };

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
    console.log("email:" + email);
  };

  const onChangeAuthNum = (event: any) => {
    setAuthNum(event.target.value);
    console.log("authNum" + authNum);
  };

  const onClickAuthNumCheck = async () => {
    console.log("auth보내는 email값: " + email);
    console.log("auth보내는 authNum값: " + authNum);
    const result = await verification({
      variables: {
        email: email,
        token: authNum,
      },
    });

    if (result.data.verification === "true") {
      setAuthError("");
      setAuthNumVal(true);
      setAuthCheckDisable(true);
      setSignUpDisable(false);
    } else {
      setAuthError("인증번호가 틀립니다!");
      setAuthCheckDisable(false);
      setAuthNumVal(false);
      return;
    }
  };

  const onClickAuthCall = async () => {
    if (email === "") {
      setEmailError("이메일을 입력해주세요!");
      return;
    } else {
      setEmailError("");
    }
    try {
      const result = await emailCheck({
        variables: {
          email: email,
        },
      });
      setAuthDisable(true);
      setAuthCheckDisable(false);
      alert("인증메일이 발송되었습니다!");
      console.log(result);
    } catch (error) {
      alert(error);
    }
  };

  const onClickSignUp = async (data: any) => {
    if (data.password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    } else {
      setPasswordError("");
    }

    if (data.password !== data.rePassword || data.rePassword === "") {
      setRePasswordError("비밀번호랑 다릅니다!");
    } else {
      setRePasswordError("");
    }

    if (data.myLang === "My Lang") {
      setMyLangError("모국어를 선택해주세요!");
    } else {
      setMyLangError("");
    }

    if (data.learnLang === "Learn Lang") {
      setLearnLangError("배울언어를 선택해주세요!");
    } else {
      setLearnLangError("");
    }

    if (
      data.password !== "" &&
      data.password === data.rePassword &&
      data.myLang !== "My Lang" &&
      data.learnLang !== "Learn Lang"
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              name: data.email.split("@")[0],
              image: "test",
              email: data.email,
              password: data.password,
              myLang: data.myLang,
              newLang: data.learnLang,
            },
          },
        });
        alert("회원가입 성공!");
        router.push("/signin");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSignUp={onClickSignUp}
      onChangeAuthNum={onChangeAuthNum}
      onClickAuthNumCheck={onClickAuthNumCheck}
      authError={authError}
      authDisable={authDisable}
      authCheckDisable={authCheckDisable}
      onChangeEmail={onChangeEmail}
      signUpDisable={signUpDisable}
      formState={formState}
      onClickVisible={onClickVisible}
      passwordVisible={passwordVisible}
      onClickReVisible={onClickReVisible}
      rePasswordVisible={rePasswordVisible}
      myLangError={myLangError}
      learnLangError={learnLangError}
      emailError={emailError}
      passwordError={passwordError}
      rePasswordError={rePasswordError}
      onClickAuthCall={onClickAuthCall}
    />
  );
}
