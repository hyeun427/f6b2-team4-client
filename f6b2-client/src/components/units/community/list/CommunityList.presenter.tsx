import * as S from "./CommunityList.styles";
import { GiHearts } from "react-icons/gi";

export default function CommunityListUI(props) {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        <S.Header>
          <S.PageName>Community</S.PageName>

          <S.BtnWrapper>
            <S.FilterBtn>filter</S.FilterBtn>
            <S.WriteBtn onClick={props.onClickMoveToWrite}>Create</S.WriteBtn>
          </S.BtnWrapper>
        </S.Header>

        <div>
          <S.Body>
            <S.ContentsWrapper>
              <S.Img>Image</S.Img>
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
              <S.Img>Image</S.Img>
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
              <S.Img>Image</S.Img>
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
              <S.Img>Image</S.Img>
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
              <S.Img>Image</S.Img>
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
              <S.Img>Image</S.Img>
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
              <S.Img>Image</S.Img>
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
              <S.Img>Image</S.Img>
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
        </div>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
