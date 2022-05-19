import * as S from "./CommunityList.styles";
import { GiHearts } from "react-icons/gi";

export default function CommunityListUI(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.PageName>Community</S.PageName>

        <S.BtnWrapper>
          <S.Button>filter</S.Button>
          <S.Button onClick={props.onClickMoveToWrite}>Create</S.Button>
        </S.BtnWrapper>
      </S.Header>

      <S.Body>
        <S.ContentsWrapper>
          <S.Img src={"/default.jpg"} />
          <S.InfoWrapper>
            <S.Info>
              <S.Title>Title Goes here</S.Title>
              <S.Writer>User</S.Writer>
              <S.Date>2022.0512</S.Date>
            </S.Info>
            <S.LikesWrapper>
              <S.HeartsWrapper onClick={props.onClickLike}>
                <GiHearts />
              </S.HeartsWrapper>
              <S.Likes>20</S.Likes>
            </S.LikesWrapper>
          </S.InfoWrapper>
        </S.ContentsWrapper>
        {/* map 사용할 때 삭제 할 코드 */}
        <S.ContentsWrapper>
          <S.Img src={"/default.jpg"} />
          <S.InfoWrapper>
            <S.Info>
              <S.Title>Title Goes here</S.Title>
              <S.Writer>User</S.Writer>
              <S.Date>2022.0512</S.Date>
            </S.Info>
            <S.LikesWrapper>
              <S.HeartsWrapper>
                <GiHearts />
              </S.HeartsWrapper>
              <S.Likes>20</S.Likes>
            </S.LikesWrapper>
          </S.InfoWrapper>
        </S.ContentsWrapper>{" "}
        <S.ContentsWrapper>
          <S.Img src={"/default.jpg"} />
          <S.InfoWrapper>
            <S.Info>
              <S.Title>Title Goes here</S.Title>
              <S.Writer>User</S.Writer>
              <S.Date>2022.0512</S.Date>
            </S.Info>
            <S.LikesWrapper>
              <S.HeartsWrapper>
                <GiHearts />
              </S.HeartsWrapper>
              <S.Likes>20</S.Likes>
            </S.LikesWrapper>
          </S.InfoWrapper>
        </S.ContentsWrapper>{" "}
        <S.ContentsWrapper>
          <S.Img src={"/default.jpg"} />
          <S.InfoWrapper>
            <S.Info>
              <S.Title>Title Goes here</S.Title>
              <S.Writer>User</S.Writer>
              <S.Date>2022.0512</S.Date>
            </S.Info>
            <S.LikesWrapper>
              <S.HeartsWrapper>
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
          <S.Img src={"/default.jpg"} />
          <S.InfoWrapper>
            <S.Info>
              <S.Title>Title Goes here</S.Title>
              <S.Writer>User</S.Writer>
              <S.Date>2022.0512</S.Date>
            </S.Info>
            <S.LikesWrapper>
              <S.HeartsWrapper>
                <GiHearts />
              </S.HeartsWrapper>
              <S.Likes>20</S.Likes>
            </S.LikesWrapper>
          </S.InfoWrapper>
        </S.ContentsWrapper>
        {/* map 사용할 때 삭제 할 코드 */}
        <S.ContentsWrapper>
          <S.Img src={"/default.jpg"} />
          <S.InfoWrapper>
            <S.Info>
              <S.Title>Title Goes here</S.Title>
              <S.Writer>User</S.Writer>
              <S.Date>2022.0512</S.Date>
            </S.Info>
            <S.LikesWrapper>
              <S.HeartsWrapper>
                <GiHearts />
              </S.HeartsWrapper>
              <S.Likes>20</S.Likes>
            </S.LikesWrapper>
          </S.InfoWrapper>
        </S.ContentsWrapper>{" "}
        <S.ContentsWrapper>
          <S.Img src={"/default.jpg"} />
          <S.InfoWrapper>
            <S.Info>
              <S.Title>Title Goes here</S.Title>
              <S.Writer>User</S.Writer>
              <S.Date>2022.0512</S.Date>
            </S.Info>
            <S.LikesWrapper>
              <S.HeartsWrapper>
                <GiHearts />
              </S.HeartsWrapper>
              <S.Likes>20</S.Likes>
            </S.LikesWrapper>
          </S.InfoWrapper>
        </S.ContentsWrapper>{" "}
        <S.ContentsWrapper>
          <S.Img src={"/default.jpg"} />
          <S.InfoWrapper>
            <S.Info>
              <S.Title>Title Goes here</S.Title>
              <S.Writer>User</S.Writer>
              <S.Date>2022.0512</S.Date>
            </S.Info>
            <S.LikesWrapper>
              <S.HeartsWrapper>
                <GiHearts />
              </S.HeartsWrapper>
              <S.Likes>20</S.Likes>
            </S.LikesWrapper>
          </S.InfoWrapper>
        </S.ContentsWrapper>
        {/* 여기까지 삭제 */}
      </S.Body>
    </S.Wrapper>
  );
}
