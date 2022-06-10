import React , {useState} from "react";
import "./Card.css";
import Icon from "./Icon";

const SHAPES = ["circle", "triangle", "square", "star", "heart", "diamond", "pentagon", "octagon"];
const COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "cyan"];

const generateCard = ()=>{
    return [SHAPES[(Math.floor(Math.random() * 7)) + 1], COLORS[(Math.floor(Math.random() * 7)) + 1]];
}

const Card = (props)=>{
    console.log(generateCard());


    
   

    return (
        <div className="card">
            <Icon shape={props.shape} color={props.color}/>
        </div>
    )
}

export default Card;