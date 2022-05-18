import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../../commons/store';
import { useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN } from '../../queries';
import { FaRegUserCircle } from 'react-icons/fa';
import { CgBee } from 'react-icons/cg';

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

export default function LayoutHeader() {
  const router = useRouter();
  const [isToken] = useRecoilState(accessTokenState);
  // const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
  // const [logout] = useMutation(LOGOUT_USER);
  setUserInfo(data?.fetchUser);
  console.log('userInfo', userInfo);

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

  const onClickSignUp = () => {
    router.push('/signup');
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
          <FaRegUserCircle color='white' size={'20'} style={{ margin: '10' }} />
          <CgBee color='white' size={'20'} style={{ margin: '10' }} />
          {isToken ? (
            <>{data?.fetchUser.points} P</>
          ) : (
            <>
              <SignUpButton onClick={onClickSignIn}>로그인</SignUpButton>
              <SignUpButton onClick={onClickSignUp}>회원가입</SignUpButton>
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
