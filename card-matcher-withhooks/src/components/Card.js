import React, { useState } from "react";

import backCard from "../images/back-card.svg";
import "../styles/card.css";

const Card = ({ cardSrc }) => {
  let [flipped, setflipped] = useState(false);

  return (
    <div
      onClick={() => setflipped((flipped = !flipped))}
      className={flipped ? "card flipped" : "card"}
    >
      <img
        className="card-img"
        src={flipped ? backCard : cardSrc}
        alt={flipped ? "back of card" : cardSrc}
      />
    </div>
  );
};

export default Card;
