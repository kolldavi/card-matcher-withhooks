import React from "react";

function HighScores({ setAppState, highScores }) {
  const { EASY, MEDIUM, HARD } = highScores;

  console.log(EASY);
  return (
    <div>
      <h1>EASY SCORES</h1>
      <ol>
        {EASY.length > 0 ? (
          EASY.map((item, index) => <li key={index}>{item} seconds</li>)
        ) : (
          <li>No Scores Available</li>
        )}
      </ol>
      <h1>MEDIUM SCORES</h1>
      <ol>
        {MEDIUM.length > 0 ? (
          MEDIUM.map((item, index) => <li key={index}>{item} seconds</li>)
        ) : (
          <li>No Scores Available</li>
        )}
      </ol>
      <h1>HARD SCORES</h1>
      <ol>
        {HARD.length > 0 ? (
          HARD.map((item, index) => <li key={index}>{item} seconds</li>)
        ) : (
          <li>No Scores Available</li>
        )}
      </ol>
      <button onClick={() => setAppState()}>New Game</button>
    </div>
  );
}

export default HighScores;
