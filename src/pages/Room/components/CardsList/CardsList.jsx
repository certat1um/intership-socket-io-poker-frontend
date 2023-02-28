import './CardsList.css';
import { useEffect, useState } from 'react';

export const CardsList = () => {
  const [cardState, changeCardState] = useState({
    activeObject: null,
    objects: [],
  });

  // generate cards
  useEffect(() => {
    getAllCards()
      .then((res) => {
        changeCardState({
          activeObject: null,
          objects: res,
        });
      })
      .catch((e) => console.log(e));
  }, []);

  // creating empty participant entity in database
  useEffect(() => {
    // make GET fetch if this user is in room

    // send username, roomCode in fetch POST
    console.log(1);
  }, []);

  const getAllCards = async () => {
    const res = await fetch('http://localhost:8080/api/cards');

    return res.json();
  };

  const toggleActive = (index) => {
    changeCardState({ ...cardState, activeObject: cardState.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    if (cardState.objects[index] === cardState.activeObject) {
      return 'active';
    } else {
      return '';
    }
  };

  return (
    <>
      <div className="room-cardlist">
        {cardState.objects.map((elem, index) => (
          <div
            key={elem.id}
            className={`room-card ${toggleActiveStyles(elem.id)}`}
            onClick={() => {
              toggleActive(elem.id);
            }}
          >
            <span>{elem.value}</span>
          </div>
        ))}
      </div>
    </>
  );
};
