import * as Charge from './charge.style';

export default function ChargeStationUI(props) {
  return (
    <Charge.WrapperCol>
      <Charge.H2Title>Charging Station</Charge.H2Title>
      <Charge.WrapperColCurPoint>
        <Charge.PCurPointText>Current Point</Charge.PCurPointText>
        <Charge.WrapperRowCurPoint>
          <Charge.PCurPointNum>
            {props?.userInfo?.points.toLocaleString('ko-KR')}
          </Charge.PCurPointNum>
          <Charge.PCurPointNum>P</Charge.PCurPointNum>
        </Charge.WrapperRowCurPoint>
      </Charge.WrapperColCurPoint>
      <Charge.WrapperRowDetail>
        <Charge.WrapperColDetail>
          <Charge.WrapperRowItem>
            <Charge.PDetail>Charging Points</Charge.PDetail>
            <Charge.PChargePoint>
              +{props.isSelect.toLocaleString('ko-KR')}P
            </Charge.PChargePoint>
          </Charge.WrapperRowItem>
          <Charge.Divider></Charge.Divider>
          <Charge.WrapperRowItem>
            <Charge.PDetail>After Charge</Charge.PDetail>
            <Charge.PDetail>
              {(
                Number(props?.userInfo?.points) + props.isSelect
              ).toLocaleString('ko-KR')}
            </Charge.PDetail>
          </Charge.WrapperRowItem>
        </Charge.WrapperColDetail>
        <Charge.WrapperColBtn>
          <Charge.WrapperRowBtn>
            <Charge.BtnPoint
              isClicked={props.isClicked.btn1}
              onClick={props.onClickButton('btn1')}
            >
              100P
            </Charge.BtnPoint>
            <Charge.BtnPoint
              isClicked={props.isClicked.btn2}
              onClick={props.onClickButton('btn2')}
            >
              300P
            </Charge.BtnPoint>
          </Charge.WrapperRowBtn>
          <Charge.WrapperRowBtn>
            <Charge.BtnPoint
              isClicked={props.isClicked.btn3}
              onClick={props.onClickButton('btn3')}
            >
              1,000P
            </Charge.BtnPoint>
            <Charge.BtnPoint
              isClicked={props.isClicked.btn4}
              onClick={props.onClickButton('btn4')}
            >
              3,000P
            </Charge.BtnPoint>
          </Charge.WrapperRowBtn>
          <Charge.BtnCharge onClick={props.requestPay}>Charge</Charge.BtnCharge>
        </Charge.WrapperColBtn>
      </Charge.WrapperRowDetail>
    </Charge.WrapperCol>
  );
}
