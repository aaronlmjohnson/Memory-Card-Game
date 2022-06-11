import React from "react";
import "./Icon.css";
import "./Icon.scss";

const addColorToShape = (shape, color)=>{

}

const Icon = (props)=>{
    return (
        <div className={`${props.color}-${props.shape}`}>
            
        </div>
    )
}

export default Icon;