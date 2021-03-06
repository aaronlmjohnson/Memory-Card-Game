import './App.css';
import React, {useState, useEffect} from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';
import useGenerateDeck from './components/useGenerateDeck';
import useGameStatus from './components/useGameStatus';


function App() {
  const {deck, generateDeck, setDeck} = useGenerateDeck();
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const {gameOver, isGameOver, setGameOver} = useGameStatus();

  useEffect(()=>{ generateDeck()},[]);
  useEffect(()=> {if(gameOver) restartGame()})

  const handleChange = (cardInfo)=>{
    isGameOver(selectedCards, cardInfo);
    setSelectedCards([...selectedCards, cardInfo]);
    setScore((prevScore)=> prevScore+1);
    setDeck(shuffleDeck(deck));
  }

const restartGame = ()=>{
  generateDeck();
  setSelectedCards([]);
  setBestScore(score > bestScore ? score : bestScore);
  setScore(0);
  setGameOver(false);
}

const shuffleDeck = (deck)=>{
  let remainingNums = []
  const shuffled = [];

  for(let i = 0; i < deck.length; i++)
    remainingNums.push(i);
  
  while(remainingNums.length > 0){
    let k = remainingNums[Math.floor(Math.random() * remainingNums.length)]
    shuffled.push(deck[k]);
    remainingNums = remainingNums.filter((n)=> n !== k);
  }
  return shuffled;
}
 
  return (
    <div className="game-container">
      <Scoreboard currentScore = {score} bestScore = {bestScore} />
      {<Deck 
        deck = {deck} 
        handleChange = {handleChange}
      />}
    </div>
  );
}

export default App;
