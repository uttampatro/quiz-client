import React, { useContext } from "react";
import { QuizContext } from "../../../../helper/Contexts";
import "./MainMenu.css";

function MainMenu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(QuizContext);
  return (
    <div className="Menu">
      <h3>Welcome to Quiz test User</h3>
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
