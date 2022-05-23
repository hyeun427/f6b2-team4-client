import styled from '@emotion/styled';
import { FcLike } from 'react-icons/fc';

export const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WrapperColItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 150px;
  margin: 10px 10px;
`;

export const ImageItem = styled.img`
  width: 106px;
  height: 130px;
  background-color: gray;
  object-fit: cover;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
`;

export const WrapperRowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const WrapperRowRightItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: 100%;
`;

export const PItemDate = styled.p`
  width: 60%;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #000000;
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
`;

export const IconLike = styled(FcLike)`
  font-size: 10px;
`;

export const PItemLikeCount = styled.p`
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: right;
  color: #000000;
`;
