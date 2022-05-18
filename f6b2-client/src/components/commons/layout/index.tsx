// import HeaderContainer from './header/header.container';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import LayoutHeader from './header';
import LeftSidebar from './leftsidebar';
import RightSidebar from './rightsidebar';

const WrapperLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 117px;
  background-color: #d4e8ea;
`;

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_HEADER = [
    // 헤더 숨길 페이지
    // '/boards/post/[postid]',
    // '/boards/new',
    // '/boards/post/[postid]/edit',
  ];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.pathname);

  return (
    <WrapperLayout>
      {!isHiddenHeader && <LayoutHeader />}
      <BodyWrapper>
        <LeftSidebar />
        <Body>{props.children}</Body>
        <RightSidebar />
      </BodyWrapper>
    </WrapperLayout>
  );
}
