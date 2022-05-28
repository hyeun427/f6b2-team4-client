import 'font-awesome/css/font-awesome.min.css';
import InputUI from './input.presenter';

export default function Input(props) {
  return (
    <InputUI
      message={props.message}
      setMessage={props.setMessage}
      sendMessage={props.sengMessage}
    />
  );
}
