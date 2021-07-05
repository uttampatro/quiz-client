import React, { useContext } from "react";
import { QuizContext } from "../../../../helper/Contexts";
import "./EndMenu.css";

function EndMenu() {
  const { score, setScore, setGameState, allQuizList, setAllQuizList } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const goToQuestionSets = () => {
    setScore(0);
    setGameState("questionSets");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h1>
        {" "}
        {score} / {allQuizList.length}{" "}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <h3>OR</h3>
      <button onClick={goToQuestionSets}>Back to question Sets</button>
    </div>
  );
}

export default EndMenu;
