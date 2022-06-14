import React , {useState} from "react";
import Card from "./Card";
import "./Deck.css";

const Deck = (props)=>{

    const SHAPES = ["circle", "triangle", "square", "star", "heart", "diamond", "pentagon", "hexagon"];
    const COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "cyan"];

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
        return [SHAPES[(Math.floor(Math.random() * 8))], COLORS[(Math.floor(Math.random() * 8))]];
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
        <div id="deck">
            {
                generateDeck(8).map((pair)=>{
                    const [shape, color] = pair;
                    return <Card shape = {shape} color = {color} />
                })
            }
        </div>
    )
}

export default Deck;

/*
Generating a deck:
    The deck will attempt to make a card
        it will take a random shape 
        and random color 
        put them in a pair 
        and add it to the deck array
        for the next pair it will need to make sure
        that the pair is not already in the array
        if it is
        then try another pair combination until 
        it is unique.

*/