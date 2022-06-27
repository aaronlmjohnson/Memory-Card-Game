import './App.css';
import React, {useState, useEffect} from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';
import useGenerateDeck from './components/useGenerateDeck';

function App() {
  const {deck, generateDeck} = useGenerateDeck();

  useEffect(()=>{
    generateDeck();
  },[]);
  
  return (
    <div className="game-container">
      <Scoreboard currentScore = {0} bestScore = {0} />

      {<Deck deck = {deck}/>}
    </div>
  );
}

export default App;
