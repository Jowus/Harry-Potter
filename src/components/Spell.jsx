import React from "react";

function Spell(props) {
  return (
    <div className="characters">
      <h2>{props.name || "Unknown"}</h2>
      <p>
        <strong>Description:</strong> {props.description || "Unknown"}
      </p>
    </div>
  );
}

export default Spell;
