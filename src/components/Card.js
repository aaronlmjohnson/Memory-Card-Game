import React , {useState} from "react";
import "./Card.css";
import Icon from "./Icon";

const Card = (props)=>{
    const {shape, color} = props;
    return (
        <div className="card">
            <Icon shape={shape} color={color}/>
        </div>
    )
}

export default Card;