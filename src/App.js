import './App.css';
import { EnterRoomForm } from './pages/EnterRoom/EnterRoomForm';
import { Room } from './pages/Room/Room';
import { Route, Routes } from 'react-router-dom';
import { NewUserForm } from './pages/NewUser/NewUserForm';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EnterRoomForm />} />
        <Route path="/new-user" element={<NewUserForm />} />
        <Route path="/room/:id" element={<Room />} />
      </Routes>
    </>
  );
};
