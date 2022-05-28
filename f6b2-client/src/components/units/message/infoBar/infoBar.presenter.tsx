export default function InfoUI(props) {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img
          className='onlineIcon'
          src={'/icon/onlineIcon.png'}
          alt='online icon'
        />
        <h3>{props.room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={'/icon/closeIcon'} alt='close icon' />
        </a>
      </div>
    </div>
  );
}
