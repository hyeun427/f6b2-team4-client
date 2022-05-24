import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "antd";
import "antd/dist/antd.css";

const ContentsImg = styled.img`
  width: 335px;
  height: 205px;
  margin-top: 30px;
  object-fit: cover;
`;

const SliderChild = styled.div`
  width: 335px;
  height: 221px;
`;

const SliderGarden = styled(Slider)`
  width: 335px;
  height: 221px;
  margin-top: 25px;
  margin-bottom: 10px;

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 40px;
    color: black;
  }

  .slick-prev:before {
    content: "<";
  }
  [dir="rtl"] .slick-prev:before {
    content: ">";
  }

  .slick-next:before {
    content: ">";
  }
  [dir="rtl"] .slick-next:before {
    content: "<";
  }

  .slick-prev {
    left: -60px;
    z-index: 10;
  }
  .slick-next {
    right: -35px;
    z-index: 10;
  }
  .slick-prev:before {
    color: black;
    font-size: 25px;
  }
  .slick-next:before {
    color: black; // arrow 색상 변경
    font-size: 25px; // arrow 크기 변경
  }
`;

const Image1 = styled(Image)`
  object-fit: cover;
`;

const Video = styled.video`
  width: 335px;
  height: 225px;
`;

export default function GardenImgUI(props) {
  // 캐러셀 세팅
  const settings = {
    dots: true,
    appendDots: (dots) => <ul style={{ marginBottom: "25px" }}> {dots} </ul>,
    lazyLoad: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log("AAAA", props.video);
  return (
    <>
      {props.video !== "temporary url" ||
      props.data?.fetchBoardImage.length > 0 ? (
        <SliderGarden {...settings}>
          {props.video !== "temporary url" ? (
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
                  <Image1 width={335} height={225} src={el.image} />
                </SliderChild>
              )}
            </div>
          ))}
        </SliderGarden>
      ) : (
        ""
      )}
    </>
  );
}
