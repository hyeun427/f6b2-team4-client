import { useMutation, useApolloClient } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../commons/store';
import SignInUI from './signin.presetner';
// 수업용
// import { FETCH_USER_LOGGED_IN, LOGIN_USER } from './signin.query';
// 팀플용
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from '../../commons/queries';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .email('이메일 형식이 적합하지 않습니다.')
      .required('이메일은 필수 입력 사항입니다.'),
    password: yup
      .string()
      .min(4, '비밀번호는 최소 4자리 이상 입력해주세요.')
      .max(15, '비밀번호는 최대 15자리로 입력해주세요 ')
      .required('비밀번호는 필수 입력 사항입니다'),
  })
  .required();

export default function SignInContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();
  const client = useApolloClient();

  const onClickSignin = async (data: any) => {
    const result = await loginUser({
      variables: data,
    });

    const accessToken = result.data.login;
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);
    console.log(resultUserInfo);

    setUserInfo(userInfo);
    router.push('/');
  };

  const onClickMoveSignUp = () => {
    router.push('/signup');
  };

  return (
    <SignInUI
      onClickSignin={onClickSignin}
      onClickMoveSignUp={onClickMoveSignUp}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
