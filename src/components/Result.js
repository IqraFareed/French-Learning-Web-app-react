import React from 'react';

const Result = ({score , playAgain})=>(
    <div className="score-board">
        <div className="score">
            Your Score is {score} / 5 
            <button className="playBtn" onClick={playAgain}>
                play Again!</button>
        </div>
    </div>
)

export default Result;