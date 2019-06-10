import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-items: center;
`;
const CurrentScore = styled.div`
  background-color: rgb(24, 133, 196);
  display: flex;
  align-self: center;
  justify-content: center;
  width: 100%;
`;
const HighScoreContainer = styled.div`
  border: 3px solid blue;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
const StyledButton = styled.button`
  font-size: 1.02em;
  background-color: gray;
  border: 5px solid black;
  align-self: center;
  width: 50vw;
  min-height: 10vh;
  border-radius: 5px;

  transition: all 0.2s ease;
  font-weight: 600;
  &:hover {
    background-color: pink;
    font-size: 1.1em;
  }

  &:active {
    background-color: rgb(241, 143, 159);
    font-size: 1.1em;
  }
`;
function HighScores({ setAppState, highScores, currentScore }) {
  const { EASY, MEDIUM, HARD } = highScores;

  return (
    <StyledContainer>
      <CurrentScore>
        <h1>Latest Score: {currentScore}</h1>
      </CurrentScore>
      <HighScoreContainer>
        <h1>EASY SCORES</h1>
        <ol>
          {EASY.length > 0 ? (
            EASY.map((item, index) => (
              <li key={index}>
                {item.time} seconds at {item.date}
              </li>
            ))
          ) : (
            <li>No Scores Available</li>
          )}
        </ol>
      </HighScoreContainer>
      <HighScoreContainer>
        <h1>MEDIUM SCORES</h1>
        <ol>
          {MEDIUM.length > 0 ? (
            MEDIUM.map((item, index) => (
              <li key={index}>
                {item.time} seconds at {item.date}
              </li>
            ))
          ) : (
            <li>No Scores Available</li>
          )}
        </ol>
      </HighScoreContainer>
      <HighScoreContainer>
        <h1>HARD SCORES</h1>
        <ol>
          {HARD.length > 0 ? (
            HARD.map((item, index) => (
              <li key={index}>
                {item.time} seconds at {item.date}
              </li>
            ))
          ) : (
            <li>No Scores Available</li>
          )}
        </ol>
      </HighScoreContainer>
      <StyledButton onClick={() => setAppState()}>New Game</StyledButton>
    </StyledContainer>
  );
}

export default HighScores;
