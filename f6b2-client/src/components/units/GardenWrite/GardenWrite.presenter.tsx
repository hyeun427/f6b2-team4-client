// import WebcamRecord from '../../commons/records';
import * as L from './GardenWrite.style';
import { IGardenWrite } from './GardenWrite.type';
import {
  BiVideoRecording,
  BiImageAlt,
  BiCaretRightSquare,
} from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
// const WebcamRecord = dynamic(() => import('WebcamRecord'), { ssr: false });
// import VideoRecorder from 'react-video-recorder';
// const VideoRecorder = dynamic(() => import('react-video-recorder'), {
//   ssr: false,
// });

// import Webcam from 'react-webcam';

export default function GardenWriteUI(props: IGardenWrite) {
  // const videoConstraints = {
  //   width: 800,
  //   height: 600,
  //   facingMode: 'user',
  // };

  return (
    <L.WrapperDiv>
      <L.WrapperRow>
        <L.WrapperImgProfile>
          {props.data?.fetchUser?.image.includes('http') ? (
            <L.ImgProfile src={props.data?.fetchUser?.image} />
          ) : (
            <FaRegUserCircle />
          )}
        </L.WrapperImgProfile>
        <L.H2ProfileName>{props.data?.fetchUser?.name}</L.H2ProfileName>
      </L.WrapperRow>
      <L.WrapperRow>
        <L.TextareaContents
          onChange={props.onChangeContents}
          placeholder='Enter Your Words Here'
          value={props.isContent || ''}
        ></L.TextareaContents>
      </L.WrapperRow>
      <L.WrapperRowIcon>
        <BiVideoRecording size={'30'} color={'A4B1DA'} />
        <BiImageAlt size={'30'} color={'A4B1DA'} />
        <BiCaretRightSquare size={'30'} color={'A4B1DA'} />
      </L.WrapperRowIcon>
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
