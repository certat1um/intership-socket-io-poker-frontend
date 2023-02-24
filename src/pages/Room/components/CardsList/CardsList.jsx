import './CardsList.css';
import { useEffect, useState } from 'react';

export const CardsList = () => {
  const [cardItems, setCardItems] = useState([]);

  async function getAllCards() {
    const res = await fetch('http://localhost:8080/api/cards');

    return res.json();
  }

  useEffect(() => {
    getAllCards()
      .then((res) => {
        setCardItems(res);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(...cardItems);

  const [appState, changleState] = useState({
    activeObject: null,
    objects: [],
  });

  console.log(appState.objects);

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
