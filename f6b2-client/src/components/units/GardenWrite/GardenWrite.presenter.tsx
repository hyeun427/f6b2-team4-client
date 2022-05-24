// import WebcamRecord from '../../commons/records';
import * as L from './GardenWrite.style';
import { IGardenWrite } from './GardenWrite.type';
import { BiVideoRecording } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import ImageUpload from '../../commons/upload';
import { v4 as uuidv4 } from 'uuid';
import VideoUpload from '../../commons/videoupload';
import { Box, Modal } from '@mui/material';
import VideoRecord from './videorecord/videorecord.container';

export default function GardenWriteUI(props: IGardenWrite) {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
        <BiVideoRecording
          size={'30'}
          color={'#FFB950'}
          onClick={props.handleOpen}
        />
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <VideoRecord onChangeVideoUrls={props.onChangeVideoUrls} />
          </Box>
        </Modal>

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
