import React , {useState} from "react";
import "./Card.css";
import Icon from "./Icon";

const SHAPES = ["circle", "triangle", "square", "star", "heart", "diamond", "pentagon", "hexagon"];
const COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "cyan"];

const generateCard = ()=>{
    return [SHAPES[(Math.floor(Math.random() * 8))], COLORS[(Math.floor(Math.random() * 8))]];
}

const Card = (props)=>{
    const [shape, color] = generateCard()
    return (
        <div className="card">
            <Icon shape={shape} color={color}/>
        </div>
    )
}

export default Card;