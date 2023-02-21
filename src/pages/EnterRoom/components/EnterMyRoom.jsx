import { Link } from "react-router-dom";

export const EnterMyRoom = (props) => {
  const url = `/room/${props.roomID}`;

  return (
    <>
      <div className="form-roomInfo">Your Room ID: {props.roomID}</div>
      <Link to={url}>Enter My Room</Link>
    </>
  );
};
