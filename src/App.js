import './App.css';
import React, {useState, useEffect} from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';
import useGenerateDeck from './components/useGenerateDeck';
import useScoreUpdater from './components/useScoreUpdater';

function App() {
  const {deck, generateDeck} = useGenerateDeck();
  const {score, updateScore } = useScoreUpdater();


  useEffect(()=>{
    generateDeck();
  },[]);
  
  return (
    <div className="game-container">
      <Scoreboard currentScore = {score} bestScore = {0} />

      {<Deck deck = {deck} updateScore = {updateScore}/>}
    </div>
  );
}

export default App;
