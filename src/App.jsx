import React, { useState } from "react";
import "./App.css";

const App = () => {
  const initialCardNames = [
    "Matt",
    "Pat",
    "Nat",
    "Kat",
    "Brad",
    "Chad",
    "Dad",
    "Rad",
    "Sadie",
    "Tad",
    "Glad",
    "Mad",
    "Zach",
    "Jack",
    "Pak",
    "Quack",
  ];

  const [cardNames, setCardNames] = useState(initialCardNames);
  const [selectedCard, setSelectedCard] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);

  const handleScore = () => {
    setScore((prev) => prev + 1);
  };

  const handleHighScore = () => {
    if (score > highScore) {
      setHighscore(score);
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleCardClick = (e) => {
    const clickedCard = e.target.innerText;

    if (selectedCard.includes(clickedCard)) {
      if (score > highScore) {
        setHighscore(score);
      }

      alert("You've already selected this card! Game Over!");
      setScore(0);
      setSelectedCard([]);
    } else {
      // New card selected
      setSelectedCard([...selectedCard, clickedCard]);
      handleScore();
    }

    // Shuffle the card names after each click
    setCardNames(shuffleArray([...cardNames]));
  };

  return (
    <>
      <div className="header">
        <h1>Game</h1>
        <p>Don't click the same name twice!!</p>
      </div>
      <div className="scoreBoard">
        <p>Current Score = {score}</p>
        <p>High Score = {highScore}</p>
      </div>
      <div className="gameBoard">
        <ul>
          {cardNames.map((title, index) => (
            <button
              onClick={(e) => {
                handleCardClick(e);
              }}
              className="card"
              key={index}
            >
              {title}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
