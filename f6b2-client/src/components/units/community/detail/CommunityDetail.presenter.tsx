import * as S from "./CommunityDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { ICommunityDetaulUIProps } from "./CommunityDetail.types";

export default function CommunityDetailUI(props: ICommunityDetaulUIProps) {
  return (
    <S.OutWrapper>
      <S.Wrapper>
        {/* 프사, 작성자, 작성일자 */}
        <S.Header>
          <S.Info>
            <S.UserImg src="/community/profile.png" />
            <S.Writer>{props.data?.fetchCommunityBoard?.writer.name}</S.Writer>
          </S.Info>
          <S.Date>{getDate(props.data?.fetchCommunityBoard?.createdAt)}</S.Date>
        </S.Header>

        {/* 컨텐츠 */}
        <S.Body>
          {/* 이미지 */}
          <S.InnerWrapper>
            <S.Img src="/community/default2.png" />
            {/* 좋아요 */}
            <S.LikesWrapper>
              <S.IconWrapper>
                <S.GiHeartsIcon />
              </S.IconWrapper>
              <S.Likes>{props.data?.fetchCommunityBoard?.likes}</S.Likes>
            </S.LikesWrapper>
          </S.InnerWrapper>

          <S.InnerWrapper>
            {/* 제목,내용 */}
            <S.Detail>
              <S.Title>{props.data?.fetchCommunityBoard?.title}</S.Title>
              <S.Contents>
                {props.data?.fetchCommunityBoard?.content}
              </S.Contents>
            </S.Detail>
            {/* 버튼모음 */}
            <S.BtnWrapper>
              {/* 리스트로 */}
              <S.IconWrapper onClick={props.onClickMovetoList}>
                <S.ListIcon />
              </S.IconWrapper>
              {/* 수정하기 */}
              <S.IconWrapper>
                <S.EditIcon></S.EditIcon>
              </S.IconWrapper>
              {/* 삭제하기 */}
              <S.IconWrapper>
                <S.DeleteIcon></S.DeleteIcon>
              </S.IconWrapper>
            </S.BtnWrapper>
          </S.InnerWrapper>
        </S.Body>
      </S.Wrapper>
    </S.OutWrapper>
  );
}
