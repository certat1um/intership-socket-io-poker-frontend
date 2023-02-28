import { useEffect, useState } from 'react';
import './ResultsTable.css';

export const ResultsTable = (props) => {
  const [resultsState, setResultsState] = useState([]);

  async function getResults() {
    const res = await fetch('http://localhost:8080/api/results');
    const data = await res.json();

    return data.filter((item) => item.room.code === props.roomCode);
  }

  useEffect(() => {
    getResults()
      .then((res) => setResultsState(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="room-participants-table">
        <div className="table-head">
          <div className="table-row">
            <div className="table-col">Name</div>
            <div className="table-col">Points</div>
          </div>
        </div>
        <div className="table-body">
          {resultsState.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-col">{item.username}</div>
              <div className="table-col">
                <div className="room-card table-card">
                  {item.activeCard.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
