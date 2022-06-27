import { useState } from "react";
import uniqid from "uniqid";

const useGenerateDeck = ()=>{
    const SHAPES = ["circle", "triangle", "square", "star", "heart", "diamond", "pentagon", "hexagon"];
    const COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "cyan"];
    const [deck, setDeck] = useState([]);

    const arrayEquals = (a, b) => {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }
    
      const isCardUnique = (deck, arr)=>{
        if(arr === []) return false;
        return !deck.map((card)=>{
            return arrayEquals([card[0], card[1]], arr);
        }).includes(true);
      }
    
      const generateUniqueCard = (deck)=>{
        let card = [];
        do{ 
          card = [SHAPES[(Math.floor(Math.random() * 8))], COLORS[(Math.floor(Math.random() * 8))]];
        }while(!isCardUnique(deck, card));

        return [...card, uniqid()];
      }
      
      const generateDeck = ()=>{
        for(let i = 0; i < 8; i++)
            setDeck( prevDeck => [...prevDeck, generateUniqueCard(prevDeck)]);
      }
      

      return {deck, generateDeck};
}

export default useGenerateDeck;


