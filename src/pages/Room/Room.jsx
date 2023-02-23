import './Room.css';
import { CardsList } from './components/CardsList/CardsList';
import { ParticipantsActions } from './components/ParticipantsActions/ParticipantsActions';
import { ParticipantsTable } from './components/ParticipantsTable/ParticipantsTable';
import { BackToHomeLink } from '../../components/BackToHomeLink/BackToHomeLink';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

const socket = io();

export const Room = () => {
  const params = useParams();

  return (
    <>
      <div className="room">
        <BackToHomeLink />
        <div className="room-info">
          <span>Room: {params.id}</span>
        </div>
        <CardsList />

        <div className="room-participants">
          <ParticipantsActions />
          <ParticipantsTable />
        </div>
      </div>
    </>
  );
};
