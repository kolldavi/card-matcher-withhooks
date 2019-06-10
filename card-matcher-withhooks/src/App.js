import React, { useState, useEffect } from "react";
import { shuffle } from "lodash";
import "./App.css";
import MainCardArea from "./components/MainCardArea";
import ChoiceScreen from "./components/ChoiceScreen";
import HighScores from "./components/HighScores";
import { Cards, resetCard } from "./utils/getImages.js";

function App() {
  const [appState, setAppState] = useState("ChoiceScreen");
  const [cards, setCards] = useState(Cards["EASY"]);
  const [difficulty, setDifficulty] = useState("EASY");
  const highScoresData = JSON.parse(
    localStorage.getItem("card-match-scores")
  ) || {
    EASY: [],
    MEDIUM: [],
    HARD: []
  };
  const [highScores, setHighScores] = useState(highScoresData);
  function filterAndSortScores(arr) {
    return arr.sort((a, b) => a["time"] - b["time"]).slice(0, 5);
  }
  function setNewHighScore(time) {
    console.log("time set:", time);

    const temp = {
      ...highScores,
      [difficulty]: filterAndSortScores([
        ...highScores[difficulty],
        { time: time, date: new Date().toLocaleString() }
      ])
    };

    localStorage.setItem("card-match-scores", JSON.stringify(temp));
    setHighScores(temp);
  }

  useEffect(() => {
    const newCards = shuffle(resetCard(Cards[difficulty]));
    setCards(newCards);
  }, [difficulty]);

  return (
    <div>
      {appState === "ChoiceScreen" ? (
        <ChoiceScreen
          setDifficulty={diff => {
            setDifficulty(diff);
          }}
          setAppState={() => setAppState("MainGame")}
        />
      ) : appState === "MainGame" ? (
        <MainCardArea
          cards={cards}
          updateCards={() => setCards(cards)}
          setAppState={() => setAppState("HighScores")}
          setHighScores={time => setNewHighScore(time)}
          setDifficulty={() => {
            difficulty === "EASY"
              ? setDifficulty("HARD")
              : setDifficulty("EASY");
          }}
        />
      ) : (
        <HighScores
          highScores={highScores}
          setAppState={() => setAppState("ChoiceScreen")}
        />
      )}
    </div>
  );
}

export default App;
