import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../message/message.container';

export default function MessagesUI(props) {
  return (
    <ScrollToBottom className='messages'>
      {props.messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={props.name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
