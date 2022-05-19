import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../../commons/store';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN, LOG_OUT } from '../../queries';
import { FaRegUserCircle } from 'react-icons/fa';
import { CgBee } from 'react-icons/cg';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3a3939;
  position: fixed;
  z-index: 100;
  padding: 12px 0px;
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
  height: 100%;
`;

const WrapperLogo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PLogoLang = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  color: #ffffff;
`;

const PLogoB = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  color: #a4b1da;
`;

const WrapperHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 100%;
`;

const BtnHeader = styled.button`
  width: auto;
  height: 100%;
  border: none;
  color: white;
  background-color: #3a3939;
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin: 0px 35px;

  :hover {
    color: #a4b1da;
    cursor: pointer;
  }
`;

const WrapperHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  color: white;

  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

const SignUpButton = styled.button`
  width: 90px;
  height: 40px;
  margin-left: 20px;
  font-size: 20px;
  line-height: 40px;
  border-radius: 5px;
`;

const SpanLogin = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [isToken, setIsToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userLogOut] = useMutation(LOG_OUT);

  //
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const [isOpen, setIsOpen] = useState(false);
  // const [logout] = useMutation(LOGOUT_USER);
  setUserInfo(data?.fetchUser);

  const onClickLogo = () => {
    router.push('/');
  };

  const onClickGarden = () => {
    router.push('/garden');
  };

  const onClickCommunity = () => {
    router.push('/community');
  };

  const onClickChat = () => {
    alert('준비중입니다');
  };

  const onClickSignIn = () => {
    router.push('/signin');
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogOut = async () => {
    try {
      await userLogOut();
      handleClose();
      setIsToken('');
      router.push('/garden');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveMypage = () => {
    router.push(`/profile/${userInfo.id}`);
    handleClose();
  };

  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperLogo onClick={onClickLogo}>
          <PLogoLang>Lang</PLogoLang>
          <PLogoB>B</PLogoB>
        </WrapperLogo>
        <WrapperHeaderMenu>
          <BtnHeader onClick={onClickGarden}>Garden</BtnHeader>
          <BtnHeader onClick={onClickCommunity}>Community</BtnHeader>
          <BtnHeader onClick={onClickChat}>Chat</BtnHeader>
        </WrapperHeaderMenu>
        <WrapperHeaderInfo>
          <FaRegUserCircle
            color='white'
            size={'20'}
            style={{ margin: '10' }}
            onClick={handleMenu}
          />

          {isToken ? (
            <>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={onClickLogOut}>Log Out</MenuItem>
                <MenuItem onClick={onClickMoveMypage}>MyPage</MenuItem>
              </Menu>
            </>
          ) : (
            <></>
          )}

          <CgBee color='white' size={'20'} style={{ margin: '10' }} />
          {isToken ? (
            <>{data?.fetchUser.points} P</>
          ) : (
            <>
              <SpanLogin onClick={onClickSignIn}>Login</SpanLogin>
            </>
          )}
        </WrapperHeaderInfo>
      </WrapperHeader>
    </Wrapper>
  );
}

// // 이 페이지는 서버사이드 렌더링 할래!!
// export const getServerSideProps = async (context) => {
//   // 데이터를 요청할 것!!!
//   // const {data} = use
//   const result = await request(
//     'https://backend06.codebootcamp.co.kr/graphql',
//     FETCH_BOARD,
//     {
//       boardId: context.query.boardId,
//     }
//   );

//   return {
//     props: {
//       myboardData: {
//         title: result.fetchBoard.title,
//         contents: result.fetchBoard.contents,
//         images: result.fetchBoard.images,
//       },
//     },
//   };
// };
