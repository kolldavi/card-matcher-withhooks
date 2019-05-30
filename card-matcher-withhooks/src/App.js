import React from "react";

import "./App.css";
import MainCardArea from "./components/MainCardArea";
import cardData from "./utils/getImages.js";

function App() {
  return <MainCardArea cardImages={cardData} />;
}

export default App;
