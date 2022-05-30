import * as Charge from './charge.style';
export default function ChargeStationUI(props) {
  return (
    <Charge.WrapperCol>
      <Charge.H2Title>Charging Station</Charge.H2Title>
      <Charge.WrapperRowDetail>
        {/* 왼쪽 박스 */}
        <Charge.WrapperColDetail>
          <Charge.WrapperColCurPoint>
            <Charge.PCurPointNum>
              {props?.userInfo?.points.toLocaleString('ko-KR')}
            </Charge.PCurPointNum>
            <Charge.PCurPointText>POINT</Charge.PCurPointText>
          </Charge.WrapperColCurPoint>
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
            <Charge.BtnHexa
              isClicked={props.isClicked.btn1}
              onClick={props.onClickButton('btn1')}
            >
              100P
            </Charge.BtnHexa>

            <Charge.BtnHexa
              isClicked={props.isClicked.btn2}
              onClick={props.onClickButton('btn2')}
            >
              300P
            </Charge.BtnHexa>
            <Charge.BtnHexa
              isClicked={props.isClicked.btn3}
              onClick={props.onClickButton('btn3')}
            >
              500P
            </Charge.BtnHexa>
          </Charge.WrapperRowBtn>
          <Charge.WrapperRowBtn2>
            <Charge.BtnHexa
              isClicked={props.isClicked.btn4}
              onClick={props.onClickButton('btn4')}
            >
              1000P
            </Charge.BtnHexa>
            <Charge.BtnHexa
              isClicked={props.isClicked.btn5}
              onClick={props.onClickButton('btn5')}
            >
              3000P
            </Charge.BtnHexa>
          </Charge.WrapperRowBtn2>
          <Charge.WrapperRowBtn3>
            <Charge.BtnHexaCharge onClick={props.requestPay}>
              <Charge.SpanChargeText>Charge</Charge.SpanChargeText>
            </Charge.BtnHexaCharge>
          </Charge.WrapperRowBtn3>
        </Charge.WrapperColBtn>
      </Charge.WrapperRowDetail>
    </Charge.WrapperCol>
  );
}
