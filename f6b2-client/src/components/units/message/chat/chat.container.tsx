import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatUI from './chat.presenter';
import { useRouter } from 'next/router';

export default function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const ENDPOINT = 'http://34.97.19.44:5000/';
  const router = useRouter();

  // let socket;

  useEffect(() => {
    console.log('useEffect');
    const socket = io(ENDPOINT);
    setName(String(router.query.chatInfo)?.split('-')[0]);
    setRoom(String(router.query.chatInfo)?.split('-')[1]);

    socket.emit('join', { name, room }, (error) => {
      console.log(name, room, 'join');
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, name, room]);

  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     setMessages((msgs) => [...msgs, message]);
  //     console.log(message);
  //   });

  //   socket.on('roomData', ({ users }) => {
  //     setUsers(users);
  //     console.log(users);
  //   });
  // }, []);

  const sendMessage = (event) => {
    console.log('메시지전송', event);
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log('유저', users, '룸', room, '메시지', messages, '이름', name);

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
