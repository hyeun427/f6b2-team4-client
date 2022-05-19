import * as Dword from './dailyword.style';

export default function DailyWordUI() {
  return (
    <Dword.WrapperDiv>
      <Dword.WrapperRow>
        <Dword.H3Title>Daily Word</Dword.H3Title>
      </Dword.WrapperRow>
      <Dword.WrapperCol>
        <Dword.PNewLang>Decent</Dword.PNewLang>
        <Dword.Divider></Dword.Divider>
        <Dword.PMyLang>적절한, 알맞은</Dword.PMyLang>
      </Dword.WrapperCol>
    </Dword.WrapperDiv>
  );
}
