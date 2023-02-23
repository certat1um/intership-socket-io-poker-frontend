import './CardsList.css';
import { useState } from 'react';

export const CardsList = () => {
  const cards = [
    {
      id: 1,
      text: 1,
    },
    {
      id: 2,
      text: 2,
    },
    {
      id: 3,
      text: 3,
    },
  ];

  const [appState, changleState] = useState({
    activeObject: null,
    objects: cards,
  });

  const toggleActive = (index) => {
    changleState({ ...appState, activeObject: appState.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    if (appState.objects[index] === appState.activeObject) {
      return 'active';
    } else {
      return '';
    }
  };

  return (
    <>
      <div className="room-cardlist">
        {appState.objects.map((elem, index) => (
          <div
            key={index}
            className={`room-card ${toggleActiveStyles(index)}`}
            onClick={() => {
              toggleActive(index);
            }}
          >
            <span>{elem.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};
