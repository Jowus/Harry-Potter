import React, { useState, useEffect } from "react";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  return (
    <div className="characters--list">
      <div className="characters--header">
        List of Harry Potter Characters
      </div>
      {characters.map((char) => (
        <Character
          key={char.name}
          name={char.name}
          image={char.image}
          house={char.house}
          species={char.species}
          gender={char.gender}
          patronus={char.patronus}
          actor={char.actor}
        />
      ))}
    </div>
  );
}

export default Characters;
