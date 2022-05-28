import { useRouter } from 'next/router';
import React, { useState } from 'react';
import JoinPresenter from './join.presenter';

export default function JoinContainer() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [access, setAccess] = useState(true);
  console.log('join');

  const onChangeName = (event) => {
    setName(event.target.value);

    if (name !== '' && language !== '') {
      setAccess(false);
    }
  };

  const onChangeLanguage = (event) => {
    setLanguage(event.target.value);

    if (name !== '' && language !== '') {
      setAccess(false);
    }
  };

  const onClickMoveToChat = () => {
    router.push('/message/' + name + '-' + language);
  };

  return (
    <JoinPresenter
      onChangeName={onChangeName}
      onChangeLanguage={onChangeLanguage}
      onClickMoveToChat={onClickMoveToChat}
      access={access}
    />
  );
}
