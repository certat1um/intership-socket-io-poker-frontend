import './App.css';
import { EnterRoom } from './pages/EnterRoom/EnterRoom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewUser } from './pages/NewUser/NewUser';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EnterRoom/>} />
          <Route path='/new-user' element={<NewUser />} />
          <Route path='/room/:id' element={<h1>Some room</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
