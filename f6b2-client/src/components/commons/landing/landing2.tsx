import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const textScale = keyframes`
  0% {
    color: white;
    transform: scale(1);
    opacity: 0;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
  50% {
    color: white;
    transform: scale(1);
    opacity: 1;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
  100% {
    color: white;
    transform: scale(1);
    opacity: 0;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: none;
  position: relative;
`;
const ImgWrapper = styled.div``;

const LogoLanding = styled.img`
  width: 100%;
  height: 100%;
`;

const SwipeWrapper = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 90%;
  animation: ${textScale} 2s infinite;
`;

const Swipe = styled.img``;

export default function Landing2() {
  return (
    <Wrapper>
      <ImgWrapper>
        <LogoLanding src="/landing/logo.png" />
      </ImgWrapper>
      <SwipeWrapper>
        <Swipe src="/landing/swipe.png" />
      </SwipeWrapper>
    </Wrapper>
  );
}
