import styled from "styled-components";

import React from "react";
//import PropTypes from 'prop-types'
const StyledButton = styled.button`
  font-size: 1.02em;
  margin: 5vh;
  width: 50vw;
  min-height: 10vh;
  font-weight: 600;

`;
const ChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  height: 50vh;
  flex-direction: column;
  background-color:var(--screen-background-color);
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
