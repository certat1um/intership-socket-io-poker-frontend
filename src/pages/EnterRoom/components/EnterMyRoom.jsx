const enterExternalRoom = () => {
  const myRoomID = localStorage.getItem('myRoomID');
  window.location.replace(`/room/${myRoomID}`);
  
    // io.emit('joinExternalRoom') we get roomID
    // return ???
};

export const EnterMyRoom = (props) => {
  return (
    <>
      <div className="form-roomInfo">Your Room ID: {props.roomID}</div>
      <button onClick={enterExternalRoom}>Enter My Room</button>
    </>
  );
};