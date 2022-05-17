import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../commons/store';
import { useQuery } from '@apollo/client';
// 팀플용
import { FETCH_USER_LOGGED_IN } from '../../queries';
// import { useState } from 'react';
// import { Modal } from 'antd';
// import RechargeModal from '../../rechargeModal/rechargeModal';

// export const LOGOUT_USER = gql`
//   mutation logoutUser {
//     logoutUser
//   }
// `;

const Wrapper = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  background-color: white;
  justify-content: center;
  position: fixed;
  box-shadow: -1px 1px 1px 0 rgb(42 42 42 / 27%);
  z-index: 100;
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
  width: 1200px;
  height: 100%;
`;

const WrapperHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 40px;
`;
const WrapperLogo = styled.div`
  width: 200px;
  height: 40px;
  line-height: 40px;
  :hover {
    background-color: lightgray;
  }
`;

const SignUpButton = styled.button`
  width: 90px;
  height: 40px;
  margin-left: 20px;
  font-size: 20px;
  line-height: 40px;
  border-radius: 5px;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [isToken] = useRecoilState(accessTokenState);
  // const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  // const [logout] = useMutation(LOGOUT_USER);
  // const [userInfo] = useRecoilState(userInfoState);

  const onClickLogo = () => {
    router.push('/');
  };

  const onClickSignIn = () => {
    router.push('/signin');
  };

  const onClickSignUp = () => {
    router.push('/signup');
  };

  // const onClickReCharge = () => {
  //   setIsOpen(true);
  // };

  // const handleOk = () => {
  //   setIsOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsOpen(false);
  // };

  // const onClickLogOut = async () => {
  //   try {
  //     await logout({
  //       variables: {
  //         logoutUser: true,
  //       },
  //     });
  //     setIsToken('');
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };

  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperLogo onClick={onClickLogo}>로고로고</WrapperLogo>
        <WrapperHeaderMenu>
          {isToken ? (
            <>
              {/* 수업용 */}
              {/* <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div> */}
              {/* 팀프로젝트용 */}
              <div>{data?.fetchUser.name}님 환영합니다</div>
              {/* <SignUpButton onClick={onClickLogOut}>로그아웃</SignUpButton> */}
            </>
          ) : (
            <>
              <SignUpButton onClick={onClickSignIn}>로그인</SignUpButton>
              <SignUpButton onClick={onClickSignUp}>회원가입</SignUpButton>
            </>
          )}
        </WrapperHeaderMenu>
      </WrapperHeader>
    </Wrapper>
  );
}
