import VideoRecorder from 'react-video-recorder';
import VideoUpload from '../../../commons/videoupload';
export default function VideoRecordUI(props) {
  return (
    <>
      <VideoRecorder
        constraints={{
          audio: true,
          video: true,
        }}
        isFlipped={false}
        onRecordingComplete={props.onRecordingComplete}
      />
      <VideoUpload
        type={'record'}
        recordUrls={props.recordUrls}
        onChangeVideoUrls={props.onChangeVideoUrls}
      />
    </>
  );
}
