import { useState } from "react";

const useGameStatus = ()=>{
    const [gameOver, setGameOver] = useState(false);

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

    const isGameOver = (selectedCards, card)=>{
        if(!isCardUnique(selectedCards, card)) setGameOver(true);
    }

    return {gameOver, isGameOver, setGameOver}
}

export default useGameStatus;
