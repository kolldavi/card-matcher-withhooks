import React, { useState, useEffect } from "react";
import { shuffle } from "lodash";
import "./App.css";
import MainCardArea from "./components/MainCardArea";
import ChoiceScreen from "./components/ChoiceScreen";
import { Cards, resetCard } from "./utils/getImages.js";

function App() {
  const [cards, setCards] = useState(Cards["EASY"]);
  const [difficulty, setDifficulty] = useState("EASY");

  useEffect(() => {
    const newCards = shuffle(resetCard(Cards[difficulty]));
    setCards(newCards);
  }, [difficulty]);

  return (
    <div>
      <ChoiceScreen
        setDifficulty={diff => {
          setDifficulty(diff);
        }}
      />
      <MainCardArea cards={cards} updateCards={() => setCards(cards)} />
    </div>
  );
}

export default App;
