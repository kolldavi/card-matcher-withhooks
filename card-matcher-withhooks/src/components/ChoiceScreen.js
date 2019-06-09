import styled from "styled-components";

import React from "react";
//import PropTypes from 'prop-types'
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
const ChoiceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  min-width: 100vw;
  height: 50vh;
  flex-direction: column;
`;
function ChoiceScreen({ setDifficulty, setAppState }) {
  return (
    <ChoiceContainer>
      <StyledButton
        onClick={() => {
          setDifficulty("EASY");
          setAppState();
        }}
      >
        Easy
      </StyledButton>
      <StyledButton
        onClick={() => {
          setDifficulty("MEDIUM");
          setAppState();
        }}
      >
        Medium
      </StyledButton>
      <StyledButton
        onClick={() => {
          setDifficulty("HARD");
          setAppState();
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
