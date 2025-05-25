import React from "react";

function Character(props) {
  return (
    <div className="characters">
      <div className="characters--image"></div>
      <img src={props.image} alt={props.image} />
      <h2>{props.name || "Unknown"}</h2>
      <p>House: {String(props.house || "Unknown")}</p>
      <p>Species: {String(props.species || "Unknown")}</p>
      <p>Gender: {String(props.gender || "Unknown")}</p>
      <p>Patronus: {String(props.patronus || "Unknown")}</p>
      <p>Actor: {String(props.actor || "Unknown")}</p>
    </div>
  );
}

export default Character;
