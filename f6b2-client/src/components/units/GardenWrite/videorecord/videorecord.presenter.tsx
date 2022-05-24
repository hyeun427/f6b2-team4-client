import Webcam from 'react-webcam';

export default function VideoRecordUI(props) {
  return (
    <>
      <Webcam audio={true} ref={props.webcamRef} />
      {props.capturing ? (
        <button onClick={props.handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={props.handleStartCaptureClick}>Start Capture</button>
      )}
      {props.recordedChunks.length > 0 && (
        <button onClick={props.handleDownload}>Download</button>
      )}
    </>
  );
}

// ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));

// https://www.npmjs.com/package/react-webcam
