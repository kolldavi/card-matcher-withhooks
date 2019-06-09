import React, { useState } from "react";
import useInterval from "./useInterval";
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
  const [currentTime, setCurrentTime] = useState(0);

  useInterval(
    () => {
      setHighScores(currentTime);

      // Your custom logic here
      setCurrentTime(currentTime + 1);
    },
    isDone ? null : 1000
  );

  return (
    <StyledTimer>
      <p>{currentTime}</p>
    </StyledTimer>
  );
};

export default Timer;
