import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatUI from './chat.presenter';
import { useRouter } from 'next/router';

export default function Chat() {
  let socket;
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://34.97.19.44:5000/';
  const router = useRouter();

  // useEffect(() => {
  //   setName(String(router.query.chatInfo)?.split("-")[0]);
  //   setLanguage(String(router.query.chatInfo)?.split("-")[1]);
  // }, []);

  useEffect(() => {
    console.log(router.query.chatInfo);
    // const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(String(router.query.chatInfo)?.split('-')[0]);
    setRoom(String(router.query.chatInfo)?.split('-')[1]);

    socket.emit('join', { name, room }, (error) => {
      console.log(name, room);
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((msgs) => [...msgs, message]);
      console.log(message);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
      console.log(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  return (
    <ChatUI
      users={users}
      room={room}
      messages={messages}
      name={name}
      setMessage={setMessage}
      sendMessage={sendMessage}
    />
  );
}
