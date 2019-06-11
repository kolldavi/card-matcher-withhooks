import React, { useState, useEffect } from "react";
import Card from "./Card";
import Timer from "./Timer";
import styled from "styled-components";

const StyledCardGrid = styled.div`
  display: grid;
  max-height: 100vh;
  max-width: 100vw;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  padding-top: 1%;
  border: 10px solid black;
  border-radius: 5px;
  background-color: #317589;
  grid-gap: 10px;
  padding-left: 5%;

  @media (max-width: 750px) {
    max-height: 100vh;
    max-width: 100vw;
    padding-top: 2%;
    border-radius: 0;
    margin-top: 0;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const StyledButton = styled.button`
  grid-column: 4 / span 1;
  font-size: 1.5em;
  border: 2px solid #bada55;
  background-color: gray;
  border-radius: 5px;
  display: flex;
  height: 80%;
  width: 95%;
  align-self: center;
  justify-self: center;
  align-content: center;
  justify-content: center;
  color: white;

  transition: all 0.2s ease;
  font-weight: 600;
  &:hover {
    background-color: pink;
    font-size: 1.6em;
  }
  &:active {
    background-color: rgb(241, 143, 159);
    font-size: 1.6em;
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
            setIsDone(true);
            return;
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
  useEffect(() => {
    if (isDone) {
      setAppState("HighScores");
      setDifficulty();
    }
  }, [isDone, setAppState, setDifficulty]);
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
      <StyledButton onClick={() => setAppState("ChoiceScreen")}>
        New Game
      </StyledButton>
    </StyledCardGrid>
  );
};

export default MainCardArea;
