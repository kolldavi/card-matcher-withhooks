import React from "react";
import Card from "./Card";
import styled from "styled-components";
const StyledCardGrid = styled.div`
  display: grid;
  max-height: 80vh;
  max-width: 80vw;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
  margin-left: 10%;
  margin-top: 10%;
`;
const MainCardArea = ({ cardImages }) => {
  return (
    <StyledCardGrid>
      {cardImages.map(card => (
        <Card key={card} cardSrc={card} />
      ))}
    </StyledCardGrid>
  );
};

export default MainCardArea;
