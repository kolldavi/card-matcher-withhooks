import React from "react";

import "./App.css";
import MainCardArea from "./components/MainCardArea";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);
function App() {
  console.log(images);
  return <MainCardArea cardImages={images} />;
}

export default App;
