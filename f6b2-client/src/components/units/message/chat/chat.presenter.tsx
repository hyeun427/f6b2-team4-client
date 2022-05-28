import InfoBar from '../infoBar/infoBar.container';
import Input from '../input/input.container';
import Messages from '../messages/messages.container';
import TextContainer from '../textcontainer/textcontainer';

export default function ChatUI(props) {
  return (
    <div className='outerContainer'>
      <TextContainer users={props.users} />
      <div className='container'>
        <InfoBar room={props.room} />
        <Messages messages={props.messages} name={props.name} />
        <Input
          message={props.message}
          setMessage={props.setMessage}
          sendMessage={props.sendMessage}
        />
      </div>
    </div>
  );
}
