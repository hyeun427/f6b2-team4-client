// import WebcamRecord from '../../commons/records';
import dynamic from 'next/dynamic';
import * as L from './GardenWrite.style';
// const WebcamRecord = dynamic(() => import('WebcamRecord'), { ssr: false });
// import VideoRecorder from 'react-video-recorder';
// const VideoRecorder = dynamic(() => import('react-video-recorder'), {
//   ssr: false,
// });

// import Webcam from 'react-webcam';

export default function GardenWriteUI(props) {
  // const videoConstraints = {
  //   width: 800,
  //   height: 600,
  //   facingMode: 'user',
  // };

  return (
    <L.WrapperDiv>
      <L.WrapperRow>
        <L.WrapperImgProfile>
          <L.ImgProfile />
        </L.WrapperImgProfile>
        <L.H2ProfileName>Jay</L.H2ProfileName>
      </L.WrapperRow>
      <L.WrapperRow>
        <L.TextareaContents
          onChange={props.onChangeContents}
          placeholder='Enter Your Words Here'
        ></L.TextareaContents>
      </L.WrapperRow>
      <L.WrapperRow>
        <L.ImgIcon src='/icon/notice.svg' />
        <L.ImgIcon src='/icon/image.svg' />
        <L.ImgIcon src='/icon/video.svg' />
      </L.WrapperRow>
      {/* {typeof window !== 'undefined' ? (
        <VideoRecorder
          onRecordingComplete={(videoBlob) => {
            // Do something with the video...
            console.log('videoBlob', videoBlob);
          }}
        />
      ) : (
        ''
      )} */}

      {/* {typeof window !== 'undefined' ? <WebcamRecord /> : ''} */}
      {/* <Webcam videoConstraints={videoConstraints} audio={true} />
      <button>녹화시작</button>
      <button>녹화종료</button> */}

      <L.ButtonSave onClick={props.onClickSave}>저장하기</L.ButtonSave>
    </L.WrapperDiv>
  );
}
