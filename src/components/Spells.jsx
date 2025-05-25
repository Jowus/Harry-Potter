import React, { useState, useEffect } from "react";
import Spell from "./Spell";

function Spells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells")
      .then((response) => response.json())
      .then((data) => setSpells(data))
      .catch((error) => console.error("Error fetching spells:", error));
  }, []);

  return (
    <div className="characters--list">
      {spells.map((spell, index) => (
        <Spell 
        key={index} 
        name={spell.name} 
        description={spell.description} />
      ))}
    </div>
  );
}

export default Spells;
