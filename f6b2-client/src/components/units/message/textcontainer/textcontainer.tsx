export default function TextContainer(props) {
  console.log(props.users);
  return (
    <div className='textContainer'>
      <div></div>
      {props.users ? (
        <div>
          <h1>Users chatting</h1>
          <div className='activeContainer'>
            <h2>
              {props.users.map(({ name }) => (
                <div key={name} className='activeItem'>
                  {name}
                  <img alt='Online Icon' src={'/icons/onlineIcon.png'} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
