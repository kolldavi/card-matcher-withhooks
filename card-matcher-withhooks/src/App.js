import React, { useState } from "react";

import "./App.css";
import MainCardArea from "./components/MainCardArea";
import ChoiceScreen from "./components/ChoiceScreen";
import { Cards } from "./utils/getImages.js";

function App() {
  const [cards, setCards] = useState(Cards);
  const updateCards = newCards => {
    setCards(newCards);
  };
  return (
    <div>
      <ChoiceScreen />
      <MainCardArea cards={cards} updateCards={cards => updateCards(cards)} />
    </div>
  );
}

export default App;
