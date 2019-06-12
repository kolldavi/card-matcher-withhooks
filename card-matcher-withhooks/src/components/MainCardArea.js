import React, { useState, useEffect,useCallback } from "react";
import Card from "./Card";
import Timer from "./Timer";
import styled from "styled-components";

const StyledCardGrid = styled.div`
  background-color: #317589;
  padding-top: 10px;
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(4,minmax(calc(100vw / 5), 1fr));
  grid-template-rows: repeat(4, minmax(calc(100vh / 7), 1fr));
  grid-template-rows: ${({ difficulty }) =>
      difficulty === "EASY" || difficulty === "MEDIUM"
        ? "repeat(4, minmax(calc(100vh / 7), 1fr));"
        : "repeat(5, minmax(calc(100vh / 7), 1fr));"};
  border: 10px solid black;
  border-radius: 5px;
  grid-gap: 10px;

  @media (max-height: 668px) and (orientation: landscape) {
    height: 100vh;
    grid-template-columns: ${({ difficulty }) =>
      difficulty === "EASY" || difficulty === "MEDIUM"
        ? "repeat(4,1fr)"
        : "repeat(5, minmax(calc(100vh / 7),1fr))"};
        grid-template-rows: repeat(4, minmax(calc(100vh / 7), 1fr));
  }
`;

const StyledButton = styled.button`
  grid-column: 4 / span 1;
  grid-row: -1 / span 1;
  font-size: 1.5em;
  @media (max-height: 668px) {
    font-size: 1.08em;
  }
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
const MainCardArea = (props) => {
  const {  cards,
    updateCards,
    setHighScores,
    setDifficulty,
    difficulty} = props;
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
      }, 600);
    }
  }
    const makeRedirect = useCallback((location)=>{
    return  props.history.push(location)
  })
  
  useEffect(() => {
    if (isDone) {
      setDifficulty();
      makeRedirect('/HighScores');
    }
  }, [isDone, makeRedirect, setDifficulty]);


  
  return (
    <StyledCardGrid difficulty={difficulty}>
      {cards.map((cardData, i) => (
        <Card
          key={i}
          cardSrc={cardData["data"]["imageSrc"]}
          setCard={(cardId, key) => setCard(cardId, key)}
          id={cardData["id"]}
          cardId={i}
          isMatched={cardData["data"]["isMatch"]}
          isTurned={cardData["data"]["isTurned"]}
        />
      ))}

      <Timer isDone={isDone} setHighScores={setHighScores} />
      <StyledButton
        onClick={() => {
          setDifficulty();
          makeRedirect('/');
        }}
      >
        New Game
      </StyledButton>
    </StyledCardGrid>
  );
};

export default MainCardArea;
