import React from "react";

import "./Toolkit.css";

function Toolkit({ onNewSession, onCreateTicket }) {
  return (
    <div className="toolkit">
      <div className="button" onClick={onNewSession}>
        create/join session
      </div>
      <div className="button" onClick={onCreateTicket}>
        create ticket
      </div>
    </div>
  );
}

export default Toolkit;
