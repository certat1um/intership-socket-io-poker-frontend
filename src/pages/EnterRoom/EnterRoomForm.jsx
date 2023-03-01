import '../../public/Form.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EnterRoomForm = () => {
  localStorage.setItem('externalRoomID', '');
  localStorage.setItem('redirectType', '');

  const username = localStorage.getItem('username') || null;
  //const userID = localStorage.getItem('userID') || null;
  const userID = '6b4b69b5-148a-4acb-af87-b1056fd0970a';
  const myRoomID = localStorage.getItem('myRoomID') || null;
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (userID !== null) {
      fetch(`http://localhost:8080/api/getUserRoom/${userID}`)
        .then((res) => res.text())
        .then((roomID) => console.log(roomID));

      //localStorage.setItem('myRoomID', roomID);
    } else {
      localStorage.setItem('myRoomID', '');
    }
  }, []);

  const handleExternalRoom = () => {
    const externalRoomID = inputValue.trim();
    if (!externalRoomID) {
      return;
    }

    localStorage.setItem('externalRoomID', externalRoomID);

    if (!username) {
      localStorage.setItem('redirectType', 'anotherUserRoom');
      return navigate(`/new-user/`);
    } else {
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
