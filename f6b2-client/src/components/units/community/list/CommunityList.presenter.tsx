import * as S from './CommunityList.styles';
import { GiHearts } from 'react-icons/gi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';

// 캐러셀 커스터마이징
const Slider1 = styled(Slider)`
  width: 778px;
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

export default function CommunityListUI(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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

      <Slider1 {...settings}>
        <div>
          <S.Body>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <S.GiHeartsIcon />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            {/* map 사용할 때 삭제 할 코드 */}
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            {/* 여기까지 삭제 */}
          </S.Body>
          <S.Body>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            {/* map 사용할 때 삭제 할 코드 */}
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            {/* 여기까지 삭제 */}
          </S.Body>
        </div>
        <div>
          <S.Body>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            {/* map 사용할 때 삭제 할 코드 */}
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            {/* 여기까지 삭제 */}
          </S.Body>
          <S.Body>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            {/* map 사용할 때 삭제 할 코드 */}
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            <S.ContentsWrapper>
              <S.Img src={'/community/default.png'} />
              <S.InfoWrapper>
                <S.Info>
                  <S.Title>Title Goes here</S.Title>
                  <S.Writer>User</S.Writer>
                  <S.Date>2022.0512</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper
                    onClick={props.onClickLike}
                    like={props.like}
                  >
                    <GiHearts />
                  </S.HeartsWrapper>
                  <S.Likes>20</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
            {/* 여기까지 삭제 */}
          </S.Body>
        </div>
      </Slider1>
    </S.Wrapper>
  );
}
