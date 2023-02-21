import "./EnterRoomForm.css";
import { WelcomeExistingUser } from "./components/WelcomeUser/WelcomeExistingUser";
import { WelcomeNewUser } from "./components/WelcomeUser/WelcomeNewUser";
import { CreateMyRoom } from "./components/CreateMyRoom";
import { EnterMyRoom } from "./components/EnterMyRoom";
import { useRef } from "react";

export const EnterRoomForm = () => {
  const username = localStorage.getItem("username");
  const myRoomID = localStorage.getItem("myRoomID");
  const inputRef = useRef();

  const joinExternalRoom = () => {
    const roomID = inputRef.current.value.trim();

    if (!roomID) {
      return;
    }

    // socket emit implementation

    window.location.replace(`/room/${roomID}`);
  };

  return (
    <>
      <div className="form">
        <div className="form-welcome">
          {username === null ? (
            <WelcomeNewUser />
          ) : (
            <WelcomeExistingUser username={username} />
          )}
        </div>
        <div className="form-top">
          <input
            required
            ref={inputRef}
            type="text"
            placeholder="Room number..."
            name="roomID"
          />
          <button onClick={joinExternalRoom}>Enter</button>
        </div>
        <div className="form-bottom">
          <span>or</span>
          {myRoomID === null ? (
            <CreateMyRoom />
          ) : (
            <EnterMyRoom roomID={myRoomID} />
          )}
        </div>
      </div>
    </>
  );
};
