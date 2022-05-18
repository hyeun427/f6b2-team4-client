import * as U from './signin.style';
import { ISingninPresenter } from './signin.type';

export default function SignInUI(props: ISingninPresenter) {
  return (
    <U.WrapperDiv>
      <U.SignUpTitleH1>로그인</U.SignUpTitleH1>
      <U.SignUpWrapperDiv>
        <U.SignUpForm onSubmit={props.handleSubmit(props.onClickSignin)}>
          <U.SignUpItemDiv>
            <U.SignUpItemInput
              {...props.register('email')}
              type='email'
              placeholder='이메일을 입력해주세요'
            />
            <U.Warning>{props.formState.errors.email?.message}</U.Warning>
          </U.SignUpItemDiv>
          <U.SignUpItemDiv>
            <U.SignUpItemInput
              {...props.register('password')}
              type='password'
              placeholder='비밀번호를 입력해주세요'
            />
            <U.Warning>{props.formState.errors?.password?.message}</U.Warning>
          </U.SignUpItemDiv>

          <U.SignUpItemDiv>
            <U.SignUpItemBtn disabled={!props.formState.isValid}>
              로그인
            </U.SignUpItemBtn>
          </U.SignUpItemDiv>
        </U.SignUpForm>
        <U.BtnMoveSignUp onClick={props.onClickMoveSignUp}>
          회원가입
        </U.BtnMoveSignUp>
      </U.SignUpWrapperDiv>
    </U.WrapperDiv>
  );
}
