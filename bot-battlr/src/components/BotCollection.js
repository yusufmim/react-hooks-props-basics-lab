import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAdd }) {
  return (
    <div>
      <h2>All Bots</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => onAdd(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
