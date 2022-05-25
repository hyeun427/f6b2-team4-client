import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "antd";
import "antd/dist/antd.css";

const SliderChild = styled.div`
  width: 430px;
  height: 500px;
`;

const SliderGarden = styled(Slider)`
  width: 430px;
  height: 500px;
  .slick-dots {
    .slick-active {
      button::before {
        color: #ff0000;
      }
    }
    button::before {
      color: #ffffff;
    }
  }
  /* .slick-dots li button:before,
  .slick-dots li button::before,
  .slick-dots li button:after {
    color: #ffff00;
  } */
`;

const Image1 = styled(Image)`
  /* width: 100%; */
  /* height: 100%; */
  object-fit: cover;
`;

const Video = styled.video`
  width: 430px;
  height: 500px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 430px;
  height: 500px;
`;

export default function GardenDetailImgUI(props) {
  // 캐러셀 세팅
  const settings = {
    dots: false,
    prevArrow: false,
    nextArrow: false,
    // appendDots: (dots) => (
    //   <ul style={{ marginBottom: "50px", color: "yellow" }}> {dots} </ul>
    // ),
    lazyLoad: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(props.data?.fetchBoardImage);
  return (
    <Wrapper>
      {props.video !== "null" || props.data?.fetchBoardImage.length > 0 ? (
        <SliderGarden {...settings}>
          {props.video !== "null" ? (
            <SliderChild>
              <Video src={props.video} controls />
            </SliderChild>
          ) : (
            ""
          )}
          {props.data?.fetchBoardImage.map((el, index) => (
            <div key={index}>
              {props.data?.fetchBoardImage.length > 0 && (
                <SliderChild>
                  <Image1 width={430} height={500} src={el.image} />
                </SliderChild>
              )}
            </div>
          ))}
        </SliderGarden>
      ) : (
        ""
      )}
    </Wrapper>
  );
}
