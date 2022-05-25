import styled from '@emotion/styled';

export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 500px;
  padding: 56px 91px 65px 91px;
  margin-top: 107px;
  border: 1px solid #dbdbdb;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const H2Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  text-align: center;
  color: #000000;
  margin: 0px;
`;

export const WrapperColCurPoint = styled.div`
  width: 100%;
  height: 107px;
  background: #3a3939;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-top: 32px;
  margin-top: 26px;
`;

export const WrapperRowCurPoint = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: auto;
  margin-top: 10px;
`;

export const PCurPointText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin: 0px;
`;

export const PCurPointNum = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  margin: 0px;
`;

export const WrapperRowDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 191px;
  margin-top: 10px;
`;

export const WrapperColDetail = styled.div`
  width: 340px;
  height: 191px;
  background: #3a3939;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 42px;
`;

export const PDetail = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #ffffff;
  margin: 0px;
  text-align: center;
  width: 50%;
`;

export const Divider = styled.div`
  width: 255px;
  border-bottom: 2px solid white;
  margin: 6px 0px;
`;

export const WrapperRowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;

export const PChargePoint = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  color: #ffb950;
  margin: 0px;
  width: 50%;
`;

export const WrapperColBtn = styled.div`
  width: 340px;
  height: 191px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperRowBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

export const BtnPoint = styled.button`
  font-family: 'Noto Sans';
  width: 140px;
  height: 50px;
  background: ${(props) => (props.isClicked ? '#ffb950' : '#ffffff')};
  border: ${(props) => (props.isClicked ? '#dbdbdb' : '#dfa349')};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => (props.isClicked ? '#ffffff' : '#000000')};
  :hover {
    border: #dfa349;
    background: #ffb950;
    color: white;
  }
`;

export const BtnCharge = styled.button`
  font-family: 'Noto Sans';
  width: 100%;
  height: 54px;
  background: #3a3939;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  border: none;
  :hover {
    background: #ffb950;
  }
`;
