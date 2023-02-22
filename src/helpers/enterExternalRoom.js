export const enterExternalRoom = () => {
  const externalRoomID = localStorage.getItem('externalRoomID');

  // io.emit('joinExternalRoom')

  window.location.replace(`/room/${externalRoomID}`);
};
