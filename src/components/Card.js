import React , {useState} from "react";
import "./Card.css";
import Icon from "./Icon";

const Card = (props)=>{
    const {shape, color, id, onClick} = props;
    return (
        <div className="card" onClick = {()=>onClick(id)} reactkey={id}>
            <Icon shape={shape} color={color}/>
        </div>
    )
}

export default Card;
