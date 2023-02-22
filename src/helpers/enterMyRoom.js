export const enterMyRoom = (socket) => {
  const username = localStorage.getItem('username');
  if (!username) {
    return window.location.replace(`/new-user/${'internal'}`);
  }
  // io.emit('joinMyRoom')
  // const myRoomID =

  localStorage.setItem('myRoomID', '57835784'); // myRoomID
  window.location.replace(`/room/${123}`); // myRoomID
};
