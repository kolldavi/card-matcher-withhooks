import React, { useState } from "react";
import useInterval from "./useInterval";
const Timer = ({ isDone }) => {
  let [currentTime, setCurrentTime] = useState(0);

  useInterval(
    () => {
      // Your custom logic here
      setCurrentTime(currentTime + 1);
    },
    isDone ? null : 1000
  );

  return (
    <>
      <p>{currentTime}</p>
    </>
  );
};

export default Timer;
