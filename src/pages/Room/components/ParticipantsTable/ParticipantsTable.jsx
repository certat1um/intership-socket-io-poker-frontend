import './ParticipantsTable.css';

export const ParticipantsTable = () => {
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
          <div className="table-row">
            <div className="table-col">John</div>
            <div className="table-col">
              <div className="room-card table-card">2</div>
            </div>
          </div>
          <div className="table-row">
            <div className="table-col">Doe</div>
            <div className="table-col">
              <div className="room-card table-card">13</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
