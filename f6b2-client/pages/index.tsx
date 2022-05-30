import Landing1 from "../src/components/commons/landing/landing1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import Landing2 from "../src/components/commons/landing/landing2";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: none;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Inner = styled.div`
  scroll-snap-align: center;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Slider1 = styled(Slider)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  .slick-arrow {
    display: none;
  }
`;

const LogoLanding = styled.img`
  width: 100%;
  height: 100%;
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
    infinite: true,
    speed: 800,
    slidesPerRow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Inner>
        <LogoLanding src="/landing/logo.png" />
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

// import styled from "@emotion/styled";

// const Wrapper = styled.div`
//   /* position: relative; */
//   z-index: 1;
//   width: 100vw;
//   height: 100vh;
// `;

// const Video = styled.video`
//   /* position: relative; */
//   z-index: 2;
//   width: max-content;
//   width: 100%;
//   height: 100%;
//   /* width: 450px; */
//   object-fit: fill;
// `;

// const Btn = styled.button`
//   /* position: absolute; */
//   z-index: 1000;
//   width: 100px;
// `;

// export default function Home() {
//   return (
//     <Wrapper>
//       <Video muted autoPlay loop src="/landing/landing.mp4">
//       </Video>
//       <Btn>버튼</Btn>
//     </Wrapper>
//   );
// }
