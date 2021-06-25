import React, { useContext } from "react";
import { useHistory } from "react-router";
import { QuizContext } from "../../../../helper/Contexts";
import { Questions } from "../../../../helper/QuestionBank";
import "./EndMenu.css";

function EndMenu() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const history = useHistory();

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const logout = () => {
    try {
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      {/* <h3>{userName}</h3> */}
      <h1>
        {" "}
        {score} / {Questions.length}{" "}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <h3>OR</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default EndMenu;
