import React , {useState} from "react";
import "./Card.css";
import Icon from "./Icon";

const Card = (props)=>{

    return (
        <div className="card">
            <Icon shape={props.shape} color={props.color}/>
        </div>
    )
}

export default Card;