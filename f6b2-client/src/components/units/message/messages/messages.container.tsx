import MessagesUI from './messages.presenter';

export default function Messages(props) {
  return <MessagesUI messages={props.messages} name={props.name} />;
}
