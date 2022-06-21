import React , {useState} from "react";
import "./Card.css";
import Icon from "./Icon";

const Card = (props)=>{
    const {shape, color, id, onClick} = props;
    return (
        <div className="card" onClick = {()=>onClick(id)} reactkey={id} key={id}>
            <Icon shape={shape} color={color}/>
        </div>
    )
}

export default Card;


/*
When a card is clicked
    it should be added into the selected Queue
    the order of the cards should be randomized in the deck
    and rerender them to the screen to display their different order
*/