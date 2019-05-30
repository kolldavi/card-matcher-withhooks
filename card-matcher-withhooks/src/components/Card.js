import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const flipCard = keyframes`
  from {
    transform: rotateY(0deg);
    src: url(${({ cardSrc }) => cardSrc});
  }

  to {
    transform: rotateY(180deg);
    src: local(/static/media/football.59da4ab0.svg)
 
  }
`;
const changeImage = keyframes`
  from {
    transform: rotateY(0deg);
    content: url(${({ cardSrc }) => cardSrc});
  }

  to {
    transform: rotateY(180deg);
    content: url(/static/media/football.59da4ab0.svg)
 
  }
`;
const StyledCard = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  border: 1px solid red;
  &.flipped {
    animation: ${flipCard} 1s linear;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  content: url(${({ cardSrc }) => cardSrc});
  &:has(> .flipped) {
    content: url(/static/media/football.59da4ab0.svg);
  }
`;

const Card = ({ cardSrc }) => {
  let [flipped, setflipped] = useState(false);
  const updateCard = () => {
    setflipped((flipped = !flipped));
  };
  return (
    <StyledCard
      onClick={() => {
        updateCard();
      }}
      className={flipped ? "flipped" : ""}
    >
      <StyledImage cardSrc={cardSrc} alt={cardSrc} />
    </StyledCard>
  );
};

export default Card;
