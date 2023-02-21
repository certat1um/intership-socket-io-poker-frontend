import "./NewUserForm.css";
import { useRef } from "react";

export const NewUserForm = () => {
  const inputRef = useRef();

  const enterMyRoom = () => {
    const username = inputRef.current.value.trim();

    if (!username) {
      return;
    }

    // io.emit('joinMyRoom') we get roomID
    // const myRoomID =

    localStorage.setItem("username", username);
    localStorage.setItem("myRoomID", "57835784");

    window.location.replace(`/room/${123}`);
  };

  return (
    <>
      <div className="form">
        <div className="form-welcome">
          <span>Type Your Username</span>
        </div>
        <div className="form-inner">
          <input
            ref={inputRef}
            type="text"
            placeholder="Your Username..."
            name="username"
          />
          <button onClick={enterMyRoom}>Enter</button>
        </div>
      </div>
    </>
  );
};
