import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ChatRoomUI from "./ChatRoom.presenter";
import io from "socket.io-client";

let socket;

export default function ChatRoom() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://34.97.19.44:5000/";
  // const ENDPOINT = "https://react-chat-page.herokuapp.com/";

  useEffect(() => {
    socket = io(ENDPOINT);
    setName(String(router.query.chatInfo)?.split("-")[0]);
    setRoom(String(router.query.chatInfo)?.split("-")[1]);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
      }
    });
  });

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((msgs) => [...msgs, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  });

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const onClickSendMessage = () => {
    if (message) {
      socket.emit("sendMessage", message, name, room);
    }
  };

  const onClickExitChat = () => {
    router.push("/garden");
  };

  return (
    <ChatRoomUI
      name={name}
      room={room}
      onChangeMessage={onChangeMessage}
      onClickSendMessage={onClickSendMessage}
      messages={messages}
      users={users}
      onClickExitChat={onClickExitChat}
    />
  );
}
