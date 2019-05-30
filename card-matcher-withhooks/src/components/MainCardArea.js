import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { formatCards } from "../utils/getImages";
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
  const formatedCards = formatCards(cardImages);

  return (
    <StyledCardGrid>
      {formatedCards.map((cardData, i) => (
        <Card key={i} cardSrc={cardData["data"]["imageSrc"]} />
      ))}
    </StyledCardGrid>
  );
};

export default MainCardArea;
