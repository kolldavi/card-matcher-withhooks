import React, { useState } from "react";
import Card from "./Card";
import Timer from "./Timer";
import styled from "styled-components";

const StyledCardGrid = styled.div`
  display: grid;
  max-width: 80vw;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr) 100px;
  padding-top: 2%;
  margin-left: 10%;
  margin-top: 2%;
  border: 10px solid black;
  border-radius: 5px;
  background-color: #317589;
  grid-gap: 15px;
  padding-left: 5%;

  @media (max-width: 700px) {
    margin-left: 0;
    margin-top: 2%;
    max-width: 100vw;

    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr) 100px;
  }
`;
const MainCardArea = ({
  cards,
  updateCards,
  setHighScores,
  setAppState,
  setDifficulty
}) => {
  const [currentCard, setCurrentCard] = useState(undefined);
  const [prevCard, setPrevCard] = useState(undefined);
  const [numberOfMatches, setNumberOfMatches] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const setCardDataTurn = (id, key, value) => {
    let newCard = cards
      .filter((card, i) => i === key)
      .map(c => {
        return { id: id, data: { ...c["data"], isTurned: value } };
      });
    let newCardList = cards;

    newCardList[key] = newCard[0];
    updateCards(newCardList);
  };

  const setCardDataMatch = (id, key) => {
    let newCard = cards
      .filter((card, i) => i === key)
      .map(c => {
        return { id: id, data: { ...c["data"], isMatch: true } };
      });

    let newCardList = cards;
    newCardList[key] = newCard[0];
    updateCards(newCardList);
  };

  function setCard(id, key) {
    if (!currentCard && !prevCard) {
      setCardDataTurn(id, key, true);
      setCurrentCard([id, key]);
      return;
    }
    if (currentCard && !prevCard) {
      setCardDataTurn(id, key, true);
      setPrevCard([id, key]);
      setTimeout(() => {
        if (currentCard[0] === id) {
          //match
          setNumberOfMatches(numberOfMatches + 1);
          if (1 + numberOfMatches === cards.length / 2) {
            setDifficulty();
            setIsDone(true);
            setAppState();
          }
          setCardDataMatch(id, key);
          setCardDataMatch(currentCard[0], currentCard[1]);
        } else {
          setCardDataTurn(id, key, false);
          setCardDataTurn(currentCard[0], currentCard[1], false);
        }
        //reset selected cards
        setCurrentCard(undefined);
        setPrevCard(undefined);
      }, 800);
    }
  }

  return (
    <StyledCardGrid>
      {cards.map((cardData, i) => (
        <Card
          key={i}
          cardSrc={cardData["data"]["imageSrc"]}
          setCard={(cardId, key) => setCard(cardId, key)}
          id={cardData["id"]}
          cardId={i}
          isMatched={cardData["data"]["isMatched"]}
          isTurned={cardData["data"]["isTurned"]}
        />
      ))}
      <Timer isDone={isDone} setHighScores={setHighScores} />
    </StyledCardGrid>
  );
};

export default MainCardArea;
