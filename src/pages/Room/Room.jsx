import './Room.css';
import { CardsList } from './components/CardsList/CardsList';
import { ParticipantsActions } from './components/ParticipantsActions/ParticipantsActions';
import { ParticipantsTable } from './components/ParticipantsTable/ParticipantsTable';
import { BackToHomepageLink } from '../../components/BackToHomepageLink/BackToHomepageLink';
import io from 'socket.io-client';

const socket = io();

export const Room = () => {
  return (
    <>
      <div className="room">
        <BackToHomepageLink />
        <div className="room-info">
          <span>Room: 12 34 45 56</span>
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
