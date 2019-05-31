import React, { useState } from "react";

import "./App.css";
import MainCardArea from "./components/MainCardArea";
import { Cards } from "./utils/getImages.js";

function App() {
  let [cards, setCards] = useState(Cards);
  const updateCards = newCards => {
    setCards((cards = newCards));
  };
  return (
    <MainCardArea cards={cards} updateCards={cards => updateCards(cards)} />
  );
}

export default App;
