import React, { useState,  useEffect } from "react";
import { shuffle } from "lodash";
import "./App.css";
import MainCardArea from "./components/MainCardArea";
import ChoiceScreen from "./components/ChoiceScreen";
import HighScores from "./components/HighScores";
import { Cards, resetCard } from "./utils/getImages.js";
import { Switch, Route } from 'react-router-dom'
import useRouter from './components/useRouter'
import { useTransition, animated } from 'react-spring'
function App() {
  const { location } = useRouter()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  })
  const [cards, setCards] = useState(Cards["EASY"]);
  const [difficulty, setDifficulty] = useState("EASY");
  const [currentScore, setCurrentScore] = useState(0);
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
    setCurrentScore(time);
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


  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
      <Route path="/" exact component={(props)=><ChoiceScreen setDifficulty={diff => {
            setDifficulty(diff);
          }} {...props}/>}/>
        <Route path="/MainCardArea" component={(props)=><MainCardArea cards={cards}
          updateCards={() => setCards(cards)}
          setHighScores={time => setNewHighScore(time)}
          difficulty={difficulty}
          setDifficulty={() => {
            difficulty === "EASY"
              ? setDifficulty("HARD")
              : setDifficulty("EASY");
          }} {...props}/>}/>
          <Route path="/HighScores" component={(props)=><HighScores     highScores={highScores}
          currentScore={currentScore} {...props}/>}/>
      </Switch>
    </animated.div>
  ))
}
export default App;
