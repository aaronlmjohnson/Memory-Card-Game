// when the card is clicked update the score here also update the best score
import { useState } from "react";

const useScoreUpdater = ()=>{
    const [score, setScore] = useState(0);

    const updateScore = ()=>setScore(prevScore=> prevScore+1);


    return {score, updateScore}
}

export default useScoreUpdater;

//instantiate in App.js pass updateScore method to deck to update score whenever card is clicked
//pass score to Score to display the score
//make useBestScoreUpdater