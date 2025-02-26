import React, { useState } from "react";

export default function Player({ name, symbol, initialName }) {
  const [edit, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const playerNameContent = edit ? (
    <input type="text" value={playerName} onChange={onNameChange} />
  ) : (
    playerName
  );

  function onEditClick() {
    setIsEditing((edit) => !edit);
  }

  function onNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{playerNameContent}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onEditClick}>{edit ? "Save" : "Edit"}</button>
    </li>
  );
}
