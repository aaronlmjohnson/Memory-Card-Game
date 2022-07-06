import React , {useState} from "react";
import Card from "./Card";
import "./Deck.css";

const Deck = (props)=>{
    const {deck, handleChange} = props;

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