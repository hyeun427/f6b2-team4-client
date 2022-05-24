import { useState } from 'react';
// import VideoUpload from '../../../commons/videoupload';
import VideoRecordUI from './videorecord.presenter';
import { v4 as uuidv4 } from 'uuid';

export default function VideoRecord(props) {
  const [recordUrls, setRecordUrls] = useState([]);

  const onRecordingComplete = (videoBlob: Blob) => {
    const file = new File([videoBlob], `${uuidv4()}.webm`);
    setRecordUrls(file);
  };

  return (
    <VideoRecordUI
      recordUrls={recordUrls}
      onRecordingComplete={onRecordingComplete}
      onChangeVideoUrls={props.onChangeVideoUrls}
      handleClose={props.handleClose}
    />
  );
}
