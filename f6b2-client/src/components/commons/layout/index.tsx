// import HeaderContainer from './header/header.container';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import LayoutHeader from './header';

const WrapperLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  width: 1080px;
  height: auto;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 60px;
  padding-bottom: 100px;
  background-color: white;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const BODY_YELLOW = [
    // 헤더 숨길 페이지 사용법 예시
    '/signin',
    '/signup',
    '/profile/[id]',
  ];

  const isBodyColor = BODY_YELLOW.includes(router.pathname);

  return (
    <WrapperLayout>
      {
        // !isHiddenHeader &&
        <LayoutHeader />
      }
      <BodyWrapper
        style={{ backgroundColor: `${isBodyColor ? '#ffb950' : 'white'}` }}
      >
        <Body>{props.children}</Body>
      </BodyWrapper>
    </WrapperLayout>
  );
}
