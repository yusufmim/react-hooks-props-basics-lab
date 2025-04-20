//import logo from './logo.svg';
import './App.css';

//function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
//}

//export default App;










import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then(setBots);
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((bot) => bot.id !== id));
      setArmy(army.filter((bot) => bot.id !== id));
    });
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy bots={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onAdd={addToArmy} />
    </div>
  );
}

export default App;
