const redirectToCreateUser = () => {
  window.location.replace(`/new-user`);
};

export const CreateMyRoom = () => {
  return <button onClick={redirectToCreateUser}>Create New Room</button>;
};
