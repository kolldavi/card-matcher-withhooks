import React, { useState, useEffect } from "react";

import styled from "styled-components";

const StyledTimer = styled.div`
  grid-column: 2 / span 2;
  grid-row: -1 / span 1;

  display: flex;
  width: 100%;
  align-self: center;
  justify-self: center;
  align-content: center;
  justify-content: center;


  border: 5px solid #6F2232;
  height: 100%;
  background-color: #4E4E50;
  border-radius: 5px;
  font-size: 1.5em;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
`;
const Timer = ({ isDone, setHighScores }) => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDone) {
      setHighScores(seconds);
    }
  }, [isDone, seconds, setHighScores]);

  return (
    <StyledTimer>
      <p>Current Time: {seconds}</p>
    </StyledTimer>
  );
};

export default Timer;
