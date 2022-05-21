import * as S from "./CommunityList.styles";
import { GiHearts } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { getDate } from "../../../../commons/libraries/utils";
import { ICommunityListUIProps } from "./CommunityList.types";

// 캐러셀 커스터마이징
const Slider1 = styled(Slider)`
  width: 705px;
  .slick-prev {
    left: -60px;
    z-index: 10;
  }
  .slick-next {
    right: -35px;
    z-index: 10;
  }
  .slick-prev:before {
    color: none;
    font-size: 25px;
  }
  .slick-next:before {
    color: none; // arrow 색상 변경
    font-size: 25px; // arrow 크기 변경
  }
`;

export default function CommunityListUI(props: ICommunityListUIProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.PageName>Community</S.PageName>
        {/* 검색창 및 버튼 Wrapper */}
        <S.BarBtnWrapper>
          {/* 검색창 Wrapper */}
          <S.SearchbarWrapper>
            <S.Searchbar />
            <S.AiOutlineSearchIcon />
          </S.SearchbarWrapper>
          {/* 버튼 Wrapper */}
          <S.BtnWrapper>
            <S.Button>filter</S.Button>
            <S.Button onClick={props.onClickMoveToWrite}>Create</S.Button>
          </S.BtnWrapper>
        </S.BarBtnWrapper>
      </S.Header>

      <S.Body>
        <Slider1 {...settings}>
          {props.data?.fetchCommunityBoards.map((el) => (
            <S.ContentsWrapper key={el.id}>
              <S.Img
                id={el.id}
                src={"/community/default.png"}
                onClick={props.onClickContent}
              />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>{el.title}</S.Title>
                  <S.Writer>{el.writer.name}</S.Writer>
                  <S.Date>{getDate(el.createdAt)}</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <S.GiHeartsIcon />
                  </S.HeartsWrapper>
                  <S.Likes>{el.likes}</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
          ))}
        </Slider1>
      </S.Body>
    </S.Wrapper>
  );
}
