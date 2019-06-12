import styled from "styled-components";

import React from "react";
//import PropTypes from 'prop-types'
const StyledButton = styled.button`
  font-size: 1.02em;
  margin: 5vh;
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
const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  height: 50vh;
  flex-direction: column;
  border: 10px solid black;
  border-radius: 5px;
  background-color: #317589;
`;
function ChoiceScreen(props) {
const makeRedirect = ()=>{
  return  props.history.push(`/MainCardArea`)
}

  return (
    <ChoiceContainer>
      <StyledButton
        onClick={() => {
          props.setDifficulty("EASY");
          makeRedirect();
        }}
      >
        Easy
      </StyledButton>
      <StyledButton
        onClick={() => {
          props.setDifficulty("MEDIUM");
          makeRedirect();
        }}
      >
        Medium
      </StyledButton>
      <StyledButton
        onClick={() => {
          props.setDifficulty("HARD");
          makeRedirect();
        }}
      >
        Hard
      </StyledButton>
    </ChoiceContainer>
  );
}

// ChoiceScreen.propTypes = {

// }

export default ChoiceScreen;
