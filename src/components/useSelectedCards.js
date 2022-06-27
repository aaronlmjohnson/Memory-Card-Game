import { useState } from "react";

const useSelectedCards = ()=>{
    const [selectedCards, setSelectedCards] = useState([]);

    const addToSelected = (card)=> {
        
        console.log(`add to ${card} selected`);
    }

      return {selectedCards, addToSelected};
}

export default useSelectedCards;


