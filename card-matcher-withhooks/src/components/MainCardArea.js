import React, { useState } from "react";
import Card from "./Card";
import Timer from "./Timer";
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
const MainCardArea = ({ cards, updateCards }) => {
  let [currentCard, setCurrentCard] = useState(null);
  let [prevCard, setPrevCard] = useState(null);
  let [isDone, setIsDone] = useState(false);
  let [numberOfMatches, setNumberOfMatches] = useState(0);
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

  const setCard = (id, key) => {
    if (!currentCard && !prevCard) {
      setCardDataTurn(id, key, true);
      setCurrentCard((currentCard = [id, key]));
      return;
    }
    if (currentCard && !prevCard) {
      setCardDataTurn(id, key, true);
      setPrevCard((prevCard = [id, key]));
      setTimeout(function() {
        if (currentCard[0] === prevCard[0]) {
          //match
          console.log("------MATCH-------");
          setNumberOfMatches((numberOfMatches = numberOfMatches + 1));
          if (numberOfMatches === cards.length / 2) {
            setIsDone((isDone = true));
          }
          setCardDataMatch(prevCard[0], prevCard[1]);
          setCardDataMatch(currentCard[0], currentCard[1]);
        } else {
          setCardDataTurn(prevCard[0], prevCard[1], false);
          setCardDataTurn(currentCard[0], currentCard[1], false);
        }
        //reset
        setCurrentCard((currentCard = undefined));
        setPrevCard((prevCard = undefined));
      }, 800);
    }
  };

  // console.log("currentCard", currentCard);
  // console.log("prevCard", prevCard);
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
      <Timer isDone={isDone} />
    </StyledCardGrid>
  );
};

export default MainCardArea;
