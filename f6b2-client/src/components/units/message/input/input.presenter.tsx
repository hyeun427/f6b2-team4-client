export default function InputUI(props) {
  return (
    <form className='form'>
      <input
        className='input'
        type='text'
        placeholder='Type a message...'
        value={props.message}
        onChange={(e) => props.setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? props.sendMessage(e) : null)}
      />
      <button className='sendButton' onClick={(e) => props.sendMessage(e)}>
        <div>
          <i className='fa fa-paper-plane' />
        </div>
      </button>
    </form>
  );
}
