import React, { useContext, useState } from "react";
import { QuizContext } from "../../helper/Contexts";
import MainMenu from "./components/mainMenu/MainMenu";
import QuizTest from "./components/quizTest/QuizTest";
import EndMenu from "./components/endMenu/EndMenu";
import "./Quiz.css";

function Quiz() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <QuizTest />}
        {gameState === "endScreen" && <EndMenu />}
      </QuizContext.Provider>
    </div>
  );
}

export default Quiz;
