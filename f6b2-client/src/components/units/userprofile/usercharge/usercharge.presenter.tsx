import * as Charge from './usercharge.styles';
import Barcode from 'react-barcode';

export default function UserChargeUI() {
  const options = {
    width: 2,
    height: 40,
    format: 'CODE128',
    displayValue: true,
    fontOptions: '',
    font: 'monospace',
    textAlign: 'center',
    textPosition: 'bottom',
    textMargin: 2,
    fontSize: 8,
    background: '#ffffff',
    lineColor: '#000000',
    margin: 10,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: undefined,
    marginRight: undefined,
  };

  return (
    <>
      <Charge.WrapperColStart>
        {/* <Charge.ImageDefault src='/image/undraw_no_data_re_kwbl.svg' /> */}
        <Charge.H2Title>RECEIPT #174375</Charge.H2Title>
        <Charge.DividerTitle></Charge.DividerTitle>
        <Charge.WrapperRow56>
          <Charge.Ptext>LangB</Charge.Ptext>
          <Charge.Ptext>12:34</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>LangB Address : https://langbee.com</Charge.Ptext>
          <Charge.Ptext>Date : 2022-05-19</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>Manager : BaByOnTop</Charge.Ptext>
          <Charge.Ptext>Terminal #1</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.DividerPoint></Charge.DividerPoint>
        <Charge.WrapperRow53>
          <Charge.H3Title>Point</Charge.H3Title>
          <Charge.H3Title>Price</Charge.H3Title>
        </Charge.WrapperRow53>
        {/* 충전, 사용내역 시작 */}
        <Charge.WrapperRow61>
          <Charge.PDate>YYYY.MM.DD</Charge.PDate>
          <Charge.PPoint>0000P</Charge.PPoint>
          <Charge.Connector></Charge.Connector>
          <Charge.PPoint>00000W</Charge.PPoint>
        </Charge.WrapperRow61>
        <Charge.WrapperRow61>
          <Charge.PDate>YYYY.MM.DD</Charge.PDate>
          <Charge.PPoint>0000P</Charge.PPoint>
          <Charge.Connector></Charge.Connector>
          <Charge.PPoint>00000W</Charge.PPoint>
        </Charge.WrapperRow61>
        <Charge.WrapperRow61>
          <Charge.PDate>YYYY.MM.DD</Charge.PDate>
          <Charge.PPoint>0000P</Charge.PPoint>
          <Charge.Connector></Charge.Connector>
          <Charge.PPoint>00000W</Charge.PPoint>
        </Charge.WrapperRow61>
        <Charge.WrapperRow61>
          <Charge.PDate>YYYY.MM.DD</Charge.PDate>
          <Charge.PPoint>0000P</Charge.PPoint>
          <Charge.Connector></Charge.Connector>
          <Charge.PPoint>00000W</Charge.PPoint>
        </Charge.WrapperRow61>
        <Charge.DividerPoint></Charge.DividerPoint>
        <Charge.WrapperRow56>
          <Charge.Ptext>CARD #</Charge.Ptext>
          <Charge.Ptext>XXXX XXXX XXXX XXXX</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>AUTH</Charge.Ptext>
          <Charge.Ptext>#213331</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>TOTAL CHARGED POINTS</Charge.Ptext>
          <Charge.Ptext>4440P</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.WrapperRow56>
          <Charge.Ptext>TOTAL PRICE</Charge.Ptext>
          <Charge.Ptext>44000W</Charge.Ptext>
        </Charge.WrapperRow56>
        <Charge.DividerPoint></Charge.DividerPoint>
        <Charge.PTextCharge>THANK YOUR FOR YOUR PAYMENT!</Charge.PTextCharge>
        <Barcode value={'Langbe'} {...options} />
      </Charge.WrapperColStart>
    </>
  );
}
