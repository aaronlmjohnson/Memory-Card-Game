import './App.css';
import React from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="game-container">
      <Scoreboard currentScore = {0} bestScore = {0} />
      <Deck />
    </div>
  );
}

export default App;
