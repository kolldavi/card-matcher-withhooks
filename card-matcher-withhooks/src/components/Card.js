import React from "react";

import backCard from "../images/back-card.svg";
import "../styles/card.css";

const Card = ({ cardSrc, setCard, id, isTurned, isMatched, cardId }) => {

  return (
    <div
      onClick={() => {
        if (isTurned) return;
        setCard(id, cardId);
      }}
      className={
        isMatched ? "card matched isDone" : !isTurned ? "card flipped" : "card"
      }
    >
      <img
        className="card-img"
        src={ cardSrc}
        alt={!isTurned ? "back of card" : cardSrc}
      />
    </div>
  );
};

export default Card;
