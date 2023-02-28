import './Room.css';
import { CardsList } from './components/CardsList/CardsList';
import { ParticipantsActions } from './components/ParticipantsActions/ParticipantsActions';
import { ResultsTable } from './components/ResultsTable/ResultsTable';
import { BackToHomeLink } from '../../components/BackToHomeLink/BackToHomeLink';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Room = () => {
  //const socket = io('http://localhost:8081');
  const params = useParams();
  const roomCode = params.id;
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetch('http://localhost:8080/api/add-participant', {
      method: 'POST',
      body: {
        username,
        roomCode,
      },
    }).catch((err) => console.log(err));

    //socket.emit('joinRoom', { roomCode, username });
  }, []);

  return (
    <>
      <div className="room">
        <BackToHomeLink />
        <div className="room-info">
          <span>Room: {roomCode}</span>
        </div>
        <CardsList />
        <div className="room-participants">
          <ParticipantsActions />
          <ResultsTable roomCode={roomCode} />
        </div>
      </div>
    </>
  );
};
