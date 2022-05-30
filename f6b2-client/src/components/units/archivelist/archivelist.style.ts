import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 382px;
  background-color: #fff;
  border: 2px solid #727da1;
  border-radius: 20px;
  padding: 25px 20px;
  border: 1px solid #dbdbdb;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0px 50px;
`;

export const WrapperLottie = styled.div`
  width: 50px;
  height: 50px;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const InputSearchBar = styled.input`
  width: 100%;
  height: 28px;
  border: none;
  border-radius: 16px;
  margin: 7px 0px 13px 0px;
  padding: 7px 15px 6px 15px;
  background: rgba(219, 219, 219, 0.55);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #767676;
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
  height: 45px;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ImageItem = styled.img`
  width: 45px;
  height: 45px;
  background-color: #c4c4c4;
  margin-right: 6px;
  border-radius: 10px;
  object-fit: cover;
`;

export const PItem = styled.p`
  width: 100%;
  height: 28px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0px;
  margin-bottom: 3px;
`;

export const SliderTab = styled(Slider)`
  width: 100%;
  height: 100%;
`;

export const PDate = styled.p`
  width: 100%;
  height: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #949494;
  margin: 0px;
`;

export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImageNodata = styled.img`
  width: 160px;
  height: 160px;
  margin-top: 47px;
  margin-bottom: 25px;
`;

export const PNodata = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  margin-bottom: 15px;
`;

export const PNodataSub = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #505050;
`;

export const MoveToLogin = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 40px;
  background-color: #ffb950;
  color: white;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const WapperLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WapperLottie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
`;

export const VideoItem = styled.video`
  width: 45px;
  height: 45px;
  background-color: #c4c4c4;
  margin-right: 6px;
  object-fit: cover;
  border-radius: 10px;
`;
