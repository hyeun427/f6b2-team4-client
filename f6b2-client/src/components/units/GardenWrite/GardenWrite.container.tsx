import { useState } from 'react';
import GardenWriteUI from './GardenWrite.presenter';

export default function GardenWriteContainer() {
  const [isContents, setIsContents] = useState('');
  const onChangeContents = (event) => {
    setIsContents(event.target.value);
  };

  const onClickSave = () => {
    alert(isContents);
  };

  return (
    <GardenWriteUI
      onChangeContents={onChangeContents}
      onClickSave={onClickSave}
    />
  );
}
