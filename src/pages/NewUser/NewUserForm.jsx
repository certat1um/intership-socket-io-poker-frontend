import '../../public/Form.css';
import { useState } from 'react';
import { BackToHomepageLink } from '../../components/BackToHomepageLink/BackToHomepageLink';
import { enterExternalRoom } from '../../helpers/enterExternalRoom';
import { enterMyRoom } from '../../helpers/enterMyRoom';

export const NewUserForm = () => {
  const [value, setValue] = useState('');

  const handleRoom = () => {
    const username = value;
    if (!username) {
      return;
    }
    localStorage.setItem('username', username);

    const currentURL = window.location.href;
    const indexOfLastSlash = currentURL.lastIndexOf('/');
    const redirectType = currentURL.slice(indexOfLastSlash + 1);

    if (redirectType === 'internal') {
      enterMyRoom();
    } else if (redirectType === 'external') {
      enterExternalRoom();
    }
  };

  return (
    <>
      <div className="form">
        <BackToHomepageLink />
        <div className="form-welcome">
          <span>Type Your Username</span>
        </div>
        <div className="form-top">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
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
