import './App.css';
import React, {useState, useEffect} from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';
import useGenerateDeck from './components/useGenerateDeck';
import useScoreUpdater from './components/useScoreUpdater';
import useSelectedCards from "./components/useSelectedCards";
import useGameStatus from './components/useGameStatus';


function App() {
  const {deck, generateDeck} = useGenerateDeck();
  const {score, updateScore } = useScoreUpdater();
  const {selectedCards, addToSelected} = useSelectedCards();
  const {gameOver, isGameOver} = useGameStatus();

  useEffect(()=>{
    generateDeck();
  },[]);

  console.log(`is game over: ${gameOver}`);


  
  return (
    <div className="game-container">
      <Scoreboard currentScore = {score} bestScore = {0} />

      {<Deck deck = {deck} updateScore = {updateScore} addToSelected = {addToSelected} isGameOver = {isGameOver} selectedCards = {selectedCards} />}
    </div>
  );
}

export default App;
