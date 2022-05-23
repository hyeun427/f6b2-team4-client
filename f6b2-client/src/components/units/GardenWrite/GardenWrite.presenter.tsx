// import WebcamRecord from '../../commons/records';
import * as L from './GardenWrite.style';
import { IGardenWrite } from './GardenWrite.type';
import {
  BiVideoRecording,
  // BiImageAlt,
  BiCaretRightSquare,
} from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import ImageUpload from '../../commons/upload';
import { v4 as uuidv4 } from 'uuid';
import VideoUpload from '../../commons/videoupload';
// import dynamic from 'next/dynamic';
// const VideoRecorder = dynamic(() => import('react-video-recorder'), {
//   ssr: false,
// });

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
        <ImageUpload
          onChangeFileUrls={props.onChangeFileUrls}
          fileUrls={props.fileUrls}
          type={'garden'}
        />
        <VideoUpload
          onChangeVideoUrls={props.onChangeVideoUrls}
          videoUrls={props.videoUrls}
          type={'garden'}
        />
      </L.WrapperRowIcon>
      {props.fileUrls?.map((el, index) => (
        <>
          <L.ImageItempWrap>
            <L.ImageThumbnail
              key={uuidv4()}
              src={
                el.startsWith('https', 0)
                  ? el
                  : `https://storage.googleapis.com/${el}`
              }
            />
            {/* <button onClick={props.onClickImageDelete(index)}>삭제</button> */}
          </L.ImageItempWrap>
        </>
      ))}
      {props.videoUrls?.map((el, index) => (
        <>
          <L.VideoItempWrap>
            <L.VideoThumbnail
              key={uuidv4()}
              src={
                el.startsWith('https', 0)
                  ? el
                  : `https://storage.googleapis.com/${el}`
              }
            />
            {/* <button onClick={props.onClickImageDelete(index)}>삭제</button> */}
          </L.VideoItempWrap>
        </>
      ))}
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

      <L.ButtonSave onClick={props.onClickSave}>저장하기</L.ButtonSave>
    </L.WrapperDiv>
  );
}
