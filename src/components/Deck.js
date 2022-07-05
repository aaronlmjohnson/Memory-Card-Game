import React , {useState} from "react";
import Card from "./Card";
import "./Deck.css";
import useSelectedCards from "./useSelectedCards";

const Deck = (props)=>{
    const {deck, updateScore} = props;

    const {selectedCards, addToSelected} = useSelectedCards();
    
    const handleChange = (cardInfo)=>{
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
