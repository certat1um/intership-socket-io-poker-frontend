import '../../public/Form.css';
import { useState } from 'react';
import { enterExternalRoom } from '../../helpers/enterExternalRoom';
import { enterMyRoom } from '../../helpers/enterMyRoom';

export const EnterRoomForm = () => {
  localStorage.setItem('externalRoomID', '');
  const username = localStorage.getItem('username');
  const myRoomID = localStorage.getItem('myRoomID');
  const [value, setValue] = useState('');

  const handleExternalRoom = () => {
    const externalRoomID = value;
    if (!externalRoomID) {
      return;
    }

    localStorage.setItem('externalRoomID', externalRoomID);

    if (!username) {
      return window.location.replace(`/new-user/${'external'}`);
    }

    enterExternalRoom(externalRoomID);
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
          onChange={(e) => setValue(e.target.value.trim())}
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
          <button onClick={enterMyRoom} className="btn blue-btn">
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
