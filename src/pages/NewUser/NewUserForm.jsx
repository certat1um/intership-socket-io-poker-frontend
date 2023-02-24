import '../../public/Form.css';
import { useState } from 'react';
import { BackToHomeLink } from '../../components/BackToHomeLink/BackToHomeLink';
import { useNavigate } from 'react-router-dom';

export const NewUserForm = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const createMyRoom = async () => {
    const res = await fetch('http://localhost:8080/api/new-room', {
      method: 'POST',
    });
    const { code } = await res.json();

    return code;
  };

  const handleRoom = async () => {
    const username = value.trim();
    if (!username) {
      return;
    }
    localStorage.setItem('username', username);
    const redirectType = localStorage.getItem('redirectType');

    if (redirectType === 'thisUserRoom') {
      const myRoomID = await createMyRoom();

      localStorage.setItem('myRoomID', myRoomID);
      return navigate(`/room/${myRoomID}`);
    } else if (redirectType === 'anotherUserRoom') {
      // io.emit(joinExternalRoom)

      const externalRoomID = localStorage.getItem('externalRoomID');
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
