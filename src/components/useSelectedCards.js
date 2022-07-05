import { useState } from "react";
let score = 0,  bestScore = 0;
const useSelectedCards = ()=>{
    const [selectedCards, setSelectedCards] = useState([]);
    

    const addToSelected = (card)=> {
        setSelectedCards([...selectedCards, card]);

        // if(isCardUnique(selectedCards, card)){
        //     score += 1;
        // }else{
        //     setSelectedCards([]);
        //     bestScore = score > bestScore ? score : bestScore;
        //     score = 0;
        // }
        
        // console.log(`Score:${score}`);
        // console.log(`Best Score:${bestScore}\n\n`);
        
    }

      return {selectedCards, addToSelected};
}

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



export default useSelectedCards;


