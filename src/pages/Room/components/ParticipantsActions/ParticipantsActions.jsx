import './ParticipantsActions.css';

export const ParticipantsActions = () => {
  return (
    <>
      <div className="room-participants-actions">
        <span className="results">Results</span>
        <button>Remove all names</button>
        <button>Delete Estimates</button>
        <button className="show-result-btn">Show</button>
      </div>
    </>
  );
};
