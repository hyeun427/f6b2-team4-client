import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing1 from "../src/components/commons/landing/landing1";
import Landing2 from "../src/components/commons/landing/landing2";

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

// const LogoLanding = styled.img`
//   width: 100%;
//   height: 100%;
// `;

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
    infinite: true,
    speed: 800,
    slidesPerRow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Inner>
        {/* <LogoLanding src="/landing/logo.png" /> */}
        <Landing2 />
      </Inner>
      <Inner>
        <Slider1>
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
