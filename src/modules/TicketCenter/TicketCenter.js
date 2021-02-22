import React from "react";

import Header from "../../components/Header";
import PointSystem from "../../components/PointSystem";

function TicketCenter({
  participantId,
  ticket = {},
  points,
  updateTicket,
  onReveal,
  isLatestTicket,
  jumpToLatest,
}) {
  const [hasEdited, setHasEdited] = React.useState(false);
  const [editedDescription, setEditedDescription] = React.useState("");

  React.useEffect(() => {
    setEditedDescription(ticket.description);
  }, [ticket.description]);

  const handleDescriptionChange = React.useCallback((e) => {
    setHasEdited(true);
    setEditedDescription(e.target.value);
  }, []);
  const handleOnSave = React.useCallback(() => {
    updateTicket("description")(editedDescription);
    setHasEdited(false);
  }, [editedDescription, updateTicket]);
  return (
    <div>
      <Header
        active={editedDescription && editedDescription !== ticket.description}
        buttonText="Save"
        label="Ticket Description"
        placeholder="Enter ticket description"
        infoHeading="Ticket Number"
        infoText={ticket.number}
        inputText={hasEdited ? editedDescription : ticket.description}
        onChange={handleDescriptionChange}
        onSave={handleOnSave}
        extraCtaText={isLatestTicket ? "" : "jump to latest ticket"}
        extraCtaClick={jumpToLatest}
      />
      <PointSystem
        selectedPoint={ticket.scoreset.find(
          (score) => score.participant === participantId
        )}
        points={points}
        onPointSelect={updateTicket("scoreset")}
        isRevealed={ticket.isRevealed}
        onRevealClick={onReveal}
      />
    </div>
  );
}

export default TicketCenter;
