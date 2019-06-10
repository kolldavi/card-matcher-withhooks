import React, { useState, useEffect } from "react";

import styled from "styled-components";

const StyledTimer = styled.div`
  display: flex;
  background-color: gray;
  justify-content: center;
  align-self: center;
  grid-column: 2 /4;
  font-size: 1.5em;
  color: white;
  margin-top: 23px;
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
      <p>{seconds}</p>
    </StyledTimer>
  );
};

export default Timer;
