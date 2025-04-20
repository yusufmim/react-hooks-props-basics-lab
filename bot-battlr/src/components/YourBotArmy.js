import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRelease, onDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => onRelease(bot.id)}
            onDischarge={() => onDischarge(bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
