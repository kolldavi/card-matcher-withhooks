import React from "react";

function HighScores({ setAppState, highScores }) {
  console.log("highScores", highScores);
  return (
    <div>
      <button onClick={() => setAppState()}>New Game</button>
    </div>
  );
}

export default HighScores;
