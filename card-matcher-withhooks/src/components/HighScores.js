import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  height:100vh;
  width: 90vw;
  margin-left:5vw;
  height: 100vh;
  justify-items: center;
  grid-template-rows: repeat(4,1fr) 10vh;
  grid-gap:10px;
`;
const CurrentScore = styled.div`
  background-color: rgb(24, 133, 196);
  display: flex;
  width: 100%;
  justify-self: center;
  justify-content: center;
`;
const HighScoreContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color:var(--screen-background-color);

`;
const StyledButton = styled.button`
  font-size: 1.5em;
  width: 50vw;
  height: 5vh;
  font-weight: 600;
  height: 100%;
  &:hover{
    font-size: 1.6em;
  }
  
`;
const StyledListItem = styled.li`
color:white;

`;
const DisplayScore = ({scores,name})=>{
  return (     
     <HighScoreContainer>
       <h2 style={{color: '#fEf',textShadow: 'rgb(241, 143, 159)'}}>TOP {name} SCORES</h2>
      <ol>
        {scores.length > 0 ? (
          scores.map((item, index) => (
            <StyledListItem key={index}>
              {item.time} seconds at {item.date}
            </StyledListItem>
          ))
        ) : (
          <StyledListItem>No Scores Available</StyledListItem>
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
        <h2 styled={{fontWeight:'bold'}}>Latest Score: {currentScore} Seconds</h2>
      </CurrentScore>
         <DisplayScore scores={highScores['EASY']} name={'EASY'}/>
         <DisplayScore scores={highScores['MEDIUM']} name={'MEDIUM'}/>
         <DisplayScore scores={highScores["HARD"]} name={'HARD'}/>
      <StyledButton onClick={()=> makeRedirect()}>New Game</StyledButton>
    </StyledContainer>
  );
}

export default HighScores;
