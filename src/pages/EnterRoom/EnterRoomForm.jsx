import '../../public/Form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EnterRoomForm = () => {
  localStorage.setItem('externalRoomID', '');
  localStorage.setItem('redirectType', '');

  const username = localStorage.getItem('username');
  const myRoomID = localStorage.getItem('myRoomID');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleExternalRoom = () => {
    const externalRoomID = value.trim();
    if (!externalRoomID) {
      return;
    }

    localStorage.setItem('externalRoomID', externalRoomID);

    if (!username) {
      localStorage.setItem('redirectType', 'anotherUserRoom');
      return navigate(`/new-user/`);
    } else {
      // io.emit(joinExternalRoom)
      return navigate(`/room/${externalRoomID}`);
    }
  };

  const handleMyRoom = () => {
    const username = localStorage.getItem('username');
    if (!username) {
      localStorage.setItem('redirectType', 'thisUserRoom');
      return navigate(`/new-user/`);
    }
  };

  const enterMyRoom = () => {
    // io.emit(joinMyRoom)

    return navigate(`/room/${myRoomID}`);
  };

  return (
    <div className="form">
      <div className="form-welcome">
        {username === null ? (
          <span>Welcome to Scrum Poker!</span>
        ) : (
          <span>Welcome to Scrum Poker, {username}!</span>
        )}
      </div>
      <div className="form-top">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Room number..."
          name="roomID"
        />
        <button onClick={handleExternalRoom} className="btn">
          Enter
        </button>
      </div>
      <div className="form-bottom">
        <span>or</span>
        {myRoomID === null ? (
          <button onClick={handleMyRoom} className="btn blue-btn">
            Create New Room
          </button>
        ) : (
          <>
            <div className="form-roomInfo">Your Room ID: {myRoomID}</div>
            <button onClick={enterMyRoom} className="btn blue-btn">
              Enter My Room
            </button>
          </>
        )}
      </div>
    </div>
  );
};
