import './App.css';
import React, {useState} from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';
import uniqid from 'uniqid';

function App() {
  const SHAPES = ["circle", "triangle", "square", "star", "heart", "diamond", "pentagon", "hexagon"];
  const COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "cyan"];

//need to generate deck here and pass to Deck component
  const arrayEquals = (a, b) => {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

  const isCardUnique = (deck, arr)=>{
    if(arr === []) return false;
    return !deck.map((card)=>{
        return arrayEquals(card, arr);
    }).includes(true);
  }

  const generateCard = ()=>{
    return [SHAPES[(Math.floor(Math.random() * 8))], COLORS[(Math.floor(Math.random() * 8))], uniqid()];
  }

  const generateDeck = (size)=>{
    const deck = [];
    let card = [];
    for(let i = 0; i < size; i++){
        do{ card = generateCard(); }while(!isCardUnique(deck, card));
        deck.push(card);
    }
    return deck;
  }

  return (
    <div className="game-container">
      <Scoreboard currentScore = {0} bestScore = {0} />
      <Deck deck = {generateDeck(8)} isCardUnique = {isCardUnique}/>
    </div>
  );
}

export default App;
