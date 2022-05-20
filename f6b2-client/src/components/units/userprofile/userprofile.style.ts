import styled from '@emotion/styled';
import { BsStack } from 'react-icons/bs';
import { AiOutlineAppstore, AiFillFire } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const WrapperColCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 102px;
  margin-bottom: 163px;
`;

export const WrapperColUserinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  height: 465px;
  background: #ffffff;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  padding: 15px 19px;
`;

export const WrapperMyContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 702px;
  height: 408px;
  background-color: #fff;
`;

export const WrapperRowEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  height: auto;
`;

export const ButtonEdit = styled.button`
  width: 50px;
  height: 22px;
  padding: 4px 10px;
  border: 1px solid #767676;
  border-radius: 30px;
  color: #767676;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  background-color: #fff;
`;

export const ImageProfile = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #e4c2ff;
  margin-top: 10px;
`;

export const H3ProfileName = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  margin-bottom: 40px;
  margin-top: 6px;
`;

export const WrapperRowDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;

export const PDetailTitle = styled.p`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #595959;
`;

export const PDetailValue = styled.p`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: #2b2b2b;
`;

export const WrapperRowTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: auto;
  border-top: 1px solid black;
  padding-top: 16px;
  margin-top: 16px;
`;

export const PMyGardenText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  margin-top: 7px;
  margin-bottom: 4px;
`;

export const PMyGardenCount = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #000000;
`;

export const IconMyGarden = styled(BsStack)`
  color: ${(props) => (props.isTab === 'mygarden' ? 'black' : '#ffb950')};
  font-size: 25px;
  cursor: pointer;
`;

export const IconMyHive = styled(AiOutlineAppstore)`
  color: ${(props) => (props.isTab === 'myhive' ? 'black' : '#ffb950')};
  font-size: 25px;
  cursor: pointer;
`;

export const IconMyCharge = styled(AiFillFire)`
  color: ${(props) => (props.isTab === 'mycharge' ? 'black' : '#ffb950')};
  font-size: 25px;
  cursor: pointer;
`;

export const SliderTab = styled(Slider)`
  width: 500px;
  height: 320px;
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
