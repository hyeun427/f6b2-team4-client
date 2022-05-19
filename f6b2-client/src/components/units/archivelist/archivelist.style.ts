import styled from '@emotion/styled';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fff;
  border: 2px solid #727da1;
  border-radius: 20px;
  padding: 25px 20px;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  height: 28px;
  border: 2px solid #727da1;
  border-radius: 16px;
  margin: 7px 0px 7px 0px;
  padding: 7px 13px 6px 7px;
`;

export const WrapperColItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

export const WrapperRowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 40px;
  margin-bottom: 7px;
`;

export const ImageItem = styled.img`
  width: 40px;
  height: 40px;
  background-color: #c4c4c4;
  margin-right: 6px;
`;

export const PItem = styled.p`
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
