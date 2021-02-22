import React from "react";

import Header from "../../components/Header";
import TicketCenter from "../TicketCenter";
import Toolkit from "./components/Toolkit";

import useAllPoints from "../../hooks/useAllPoints";

import Summary from "../Summary";

import "./Dashboard.css";

function Dashboard({
  participant,
  session,
  isLatestTicket,
  createSession,
  activeTicket,
  updateTicket,
  createTicket,
  jumpToLatest,
  handleUpdateNickname,
}) {
  const [isNameEdited, setIsNameEdited] = React.useState(false);
  const [editedName, setEditedName] = React.useState("");
  const { getAllPoints } = useAllPoints();
  const [points, setPoints] = React.useState([]);

  React.useEffect(() => {
    async function allPoints() {
      const { success, points } = await getAllPoints();

      if (!success) return;

      setPoints(points);
    }

    allPoints();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNameChange = React.useCallback((e) => {
    setIsNameEdited(true);
    setEditedName(e.target.value);
  }, []);
  return (
    <div className="dashboard">
      <Toolkit onNewSession={createSession} onCreateTicket={createTicket} />
      <div className="dashboard-section">
        <Header
          active={isNameEdited}
          label="nickname"
          placeholder="Enter your nickname"
          buttonText="save"
          inputText={isNameEdited ? editedName : participant.nickname}
          infoHeading="Session id"
          infoText={session.id}
          onChange={handleNameChange}
          onSave={() => {
            setIsNameEdited(false);
            handleUpdateNickname(editedName);
          }}
        />
      </div>
      <div className="dashboard-section">
        <TicketCenter
          participantId={participant._id}
          ticket={activeTicket}
          points={points}
          updateTicket={updateTicket}
          onReveal={updateTicket("isRevealed")}
          isLatestTicket={isLatestTicket}
          jumpToLatest={jumpToLatest}
        />
      </div>
      <div>
        <Summary
          participants={session.participants}
          ticket={activeTicket}
          points={points}
        />
      </div>
    </div>
  );
}

export default Dashboard;
