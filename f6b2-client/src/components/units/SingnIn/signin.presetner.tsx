import * as U from './signin.style';
import { ISingninPresenter } from './signin.type';

export default function SignInUI(props: ISingninPresenter) {
  return (
    <U.WrapperDiv>
      <U.SignUpWrapperDiv>
        <U.SignUpTitleH1>Log in</U.SignUpTitleH1>
        <U.SignUpForm onSubmit={props.handleSubmit(props.onClickSignin)}>
          <U.SignUpItemDiv>
            <U.SignUpItemInput
              {...props.register('email')}
              type='email'
              placeholder='Enter your email'
            />
            <U.Warning>{props.formState.errors.email?.message}</U.Warning>
          </U.SignUpItemDiv>
          <U.SignUpItemDiv>
            <U.SignUpItemInput
              {...props.register('password')}
              type='password'
              placeholder='Enter your password'
            />
            <U.Warning>{props.formState.errors?.password?.message}</U.Warning>
          </U.SignUpItemDiv>
          <U.WrapperRow>
            <U.PFindId>Find ID / Password</U.PFindId>
          </U.WrapperRow>

          <U.SignUpItemDiv>
            <U.SignUpItemBtn disabled={!props.formState.isValid}>
              Log in
            </U.SignUpItemBtn>
          </U.SignUpItemDiv>
        </U.SignUpForm>
        <U.BtnMoveSignUp onClick={props.onClickMoveSignUp}>
          Don’t have any account? ➤ Go sign up
        </U.BtnMoveSignUp>
        <U.ButtonGoogle href='https://langbee.shop/login/google'>
          <U.WarperBtnContents>
            <U.ImageBtnIcon src={'/image/google.png'} />
            <U.PBtnText>Log in via Google</U.PBtnText>
          </U.WarperBtnContents>
        </U.ButtonGoogle>
        <U.ButtonKakao href='https://langbee.shop/login/kakao'>
          <U.WarperBtnContents>
            <U.ImageBtnIcon src={'/image/kakao.png'} />
            <U.PBtnText>Log in via Kakao</U.PBtnText>
          </U.WarperBtnContents>
        </U.ButtonKakao>
        <U.ButtonNaver href='https://langbee.shop/login/naver'>
          <U.WarperBtnContents>
            <U.ImageBtnIcon src={'/image/naver.png'} />
            <U.PBtnText style={{ color: 'white' }}>Log in via Naver</U.PBtnText>
          </U.WarperBtnContents>
        </U.ButtonNaver>
      </U.SignUpWrapperDiv>
    </U.WrapperDiv>
  );
}
