import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing1 from "../src/components/commons/landing/landing1";
import Landing2 from "../src/components/commons/landing/landing2";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: none;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  /* 스크롤바 안보이게 설정 */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Inner = styled.div`
  scroll-snap-align: start;
  scrollbar-width: none;
  /* 스크롤바 안보이게 설정 */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none; /* IE and Edge */
`;

const Slider1 = styled(Slider)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .slick-arrow {
    display: none;
  }
`;

const GardenLanding = styled.img`
  width: 100%;
  height: 100%;
`;

const CommunityLanding = styled.img`
  width: 100%;
  height: 100%;
`;

const ChatLanding = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Home() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesPerRow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Inner>
        <Landing2 />
      </Inner>
      <Inner>
        <Slider1 {...settings}>
          <GardenLanding src="/landing/garden.png" />
          <CommunityLanding src="/landing/community.png" />
          <ChatLanding src="/landing/chat.png" />
        </Slider1>
      </Inner>

      <Inner>
        <Landing1 />
      </Inner>
    </Wrapper>
  );
}
