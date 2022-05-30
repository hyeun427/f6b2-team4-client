import TranslateWord from '../../commons/translate/word';
import * as Dword from './dailyword.style';

export default function DailyWordUI(props: any) {
  return (
    <Dword.WrapperDiv>
      <Dword.WrapperRow>
        <Dword.H3Title>Daily Word</Dword.H3Title>
      </Dword.WrapperRow>
      <Dword.WrapperCol>
        <Dword.PNewLang> {props.word}</Dword.PNewLang>
        <Dword.Divider></Dword.Divider>
        <Dword.PMyLang>
          <TranslateWord word={props.word} />
        </Dword.PMyLang>
      </Dword.WrapperCol>
    </Dword.WrapperDiv>
  );
}
