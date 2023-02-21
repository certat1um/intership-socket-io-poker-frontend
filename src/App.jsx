import "./App.css";
import { EnterRoomForm } from "./pages/EnterRoom/EnterRoomForm";
import { Room } from "./pages/Room/Room";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewUserForm } from "./pages/NewUser/NewUserForm";

//localStorage.setItem('username', 'test')
//localStorage.setItem('myRoomID', '4324523')

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnterRoomForm />} />
          <Route path="/new-user" element={<NewUserForm />} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
