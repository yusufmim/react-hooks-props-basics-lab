import React from "react";

function BotCard({ bot, handleClick, onDischarge }) {
  return (
    <div
      onClick={handleClick}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "200px",
        textAlign: "center",
        cursor: "pointer",
        position: "relative"
      }}
    >
      <img src={bot.avatar_url} alt={bot.name} width="100%" />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      {onDischarge && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDischarge();
          }}
          style={{ position: "absolute", top: 5, right: 5, background: "red", color: "white", border: "none", padding: "5px" }}
        >
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
