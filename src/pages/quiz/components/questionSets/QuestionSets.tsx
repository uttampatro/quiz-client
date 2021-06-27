import React, { useContext } from "react";
import "./QuestionSets.css";
import { useHistory } from "react-router";
import { QuizContext } from "../../../../helper/Contexts";

function QuestionSets() {
  const { gameState, setGameState } = useContext(QuizContext);
  const history = useHistory();

  const logout = () => {
    try {
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="question">
      <div className="questionSets">
        <div className="header">
          <h1>Question Sets</h1>
        </div>
        <div className="sets">
          <h1>Quiz Paper</h1>
        </div>
        <div className="question_button">
          <button onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="bodySets">
        <div className="body">
          <h3>Basic</h3>
          <button
            onClick={() => {
              setGameState("menu");
            }}
          >
            Start Quiz
          </button>
        </div>
        <div className="body">
          <h3>Basic</h3>
          <button>Start Quiz</button>
        </div>
        <div className="body">
          <h3>Basic</h3>
          <button>Start Quiz</button>
        </div>{" "}
        <div className="body">
          <h3>Basic</h3>
          <button>Start Quiz</button>
        </div>{" "}
        <div className="body">
          <h3>Basic</h3>
          <button>Start Quiz</button>
        </div>
      </div>

      <div className="loading">
        <button>Load More</button>
      </div>
    </div>
  );
}

export default QuestionSets;
