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
const DisplayScore = ({scores,name})=>{
  return (     
     <HighScoreContainer>
       <h1>{name} HIGHSCORES</h1>
      <ol>
        {scores.length > 0 ? (
          scores.map((item, index) => (
            <li key={index}>
              {item.time} seconds at {item.date}
            </li>
          ))
        ) : (
          <li>No Scores Available</li>
        )}
      </ol>
  </HighScoreContainer>
)
}
function HighScores(props) {
  const {  highScores, currentScore } =props

  const makeRedirect = () => {

    return  props.history.push(`/`)
  }
  
  return (
    <StyledContainer>
      <CurrentScore>
        <h1>Latest Score: {currentScore} Seconds</h1>
      </CurrentScore>
      {Object.keys(highScores).map(key=>(
         <DisplayScore key={key} scores={highScores[key]} name={key}/>))
      }  
      <StyledButton onClick={()=> makeRedirect()}>New Game</StyledButton>
    </StyledContainer>
  );
}

export default HighScores;
