import React from "react";

import InputWithButton from "../../components/InputWithButton";

import "./EmptySessionState.css";

function EmptySessionState({ onCreateSession, onJoinSession }) {
  const [joinSessionId, setJoinSessionId] = React.useState("");

  const onTextChange = (e) => setJoinSessionId(e.target.value);
  return (
    <div className="emptySessionState">
      <div className="emptySessionState-intro">to begin sprint poker</div>
      <div className="button" onClick={onCreateSession}>
        create a new session
      </div>
      <div className="emptySessionState-seperation">or</div>
      <InputWithButton
        buttonText="join a session"
        placeholder="enter session id"
        inputText={joinSessionId}
        onHandleChange={onTextChange}
        onClick={() => onJoinSession(joinSessionId)}
      />
    </div>
  );
}

export default EmptySessionState;
