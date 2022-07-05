import React , {useState} from "react";
import Card from "./Card";
import "./Deck.css";

const Deck = (props)=>{
    const {deck, updateScore, addToSelected, selectedCards, isGameOver} = props;
    
    const handleChange = (cardInfo)=>{
        isGameOver(selectedCards, cardInfo);
        addToSelected(cardInfo);
        updateScore();
    }
    
    // const addToSelected = (id)=>{
    //     const selectedCard = findCard(id);
    //     setSelectedCards([...selectedCards, selectedCard]);

    // }

    // const findCard = (id)=>{
    //     return deck.filter((card)=> card[2] === id);
    // }

    return (
        <div id="deck">
            {
                deck.map((cardInfo)=>{
                    const [shape, color, id] = cardInfo;
                    return <Card shape = {shape} color = {color} id = {id} onClick={()=> handleChange(cardInfo)} key={id}/>
                })
            }
        </div>
    )
}

export default Deck;
