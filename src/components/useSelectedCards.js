import { useState } from "react";
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

export default useSelectedCards;


