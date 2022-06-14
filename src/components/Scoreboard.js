import React  from "react";
import "./Scoreboard.css";

const Scoreboard = (props)=>{
    const {currentScore, bestScore} = props;
    return(
        <div id="scoreboard">
            <p id="current-score">Score: {currentScore}</p>
            <p id="best-score"> Best Score: {bestScore} </p>
        </div>
    )
}

export default Scoreboard;