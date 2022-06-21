import React , {useState} from "react";
import Card from "./Card";
import "./Deck.css";
import uniqid from "uniqid";

const Deck = (props)=>{

    const SHAPES = ["circle", "triangle", "square", "star", "heart", "diamond", "pentagon", "hexagon"];
    const COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "cyan"];

    const [selectedCards, setSelectedCards] = useState([]);
    
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

    const addToSelected = (id)=>{
        console.log("1")
        setSelectedCards([...selectedCards, findCard(id)]);
        console.log(deck);
        /*TODO: remove unessential methods from Deck. POssibly add to App.js */
    }

    const findCard = (id)=>{
        return deck.filter((card)=> card[2] === id);
    }

    const deck = generateDeck(8);
    console.log("howdy");
    return (
        <div id="deck">
            {
                deck.map((cardInfo)=>{
                    const [shape, color, id] = cardInfo;
                    return <Card shape = {shape} color = {color} id = {id} onClick={addToSelected}/>
                })
            }
        </div>
    )
}

export default Deck;
