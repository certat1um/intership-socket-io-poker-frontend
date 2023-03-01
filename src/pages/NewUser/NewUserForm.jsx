import '../../public/Form.css';
import { useState } from 'react';
import { BackToHomeLink } from '../../components/BackToHomeLink/BackToHomeLink';
import { useNavigate } from 'react-router-dom';

export const NewUserForm = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const redirectType = localStorage.getItem('redirectType');

  const createMyRoom = async (userID) => {
    const res = await fetch('http://localhost:8080/api/new-room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userID }),
    });
    //const { code: roomCode } = await res.json();
    const roomID = await res.text();
    return roomID;
  };

  const createUser = async (username) => {
    const res = await fetch('http://localhost:8080/api/new-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    const { id: userID } = await res.json();
    return userID;
  };

  const handleRoom = async () => {
    const username = inputValue.trim();
    if (!username) {
      return;
    }

    if (redirectType === 'thisUserRoom') {
      const userID = await createUser(username);
      const myRoomID = await createMyRoom(userID);

      localStorage.setItem('userID', userID);
      localStorage.setItem('myRoomID', myRoomID);

      return navigate(`/room/${myRoomID}`);
    } else if (redirectType === 'anotherUserRoom') {
      //const userID = await createUser(username);
      const externalRoomID = localStorage.getItem('externalRoomID');

      //localStorage.setItem('userID', userID);

      return navigate(`/room/${externalRoomID}`);
    } else {
      return navigate('/');
    }
  };

  return (
    <>
      <div className="form">
        <BackToHomeLink />
        <div className="form-welcome">
          <span>Type Your Username</span>
        </div>
        <div className="form-top">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Your Username..."
            name="username"
          />
          <button onClick={handleRoom}>Enter</button>
        </div>
      </div>
    </>
  );
};
