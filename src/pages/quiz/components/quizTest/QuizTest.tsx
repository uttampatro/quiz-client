import React, { useContext, useState } from 'react';
import { QuizContext } from '../../../../helper/Contexts';
import { IQuiz } from '../mainMenu/MainMenu';
import './QuizTest.css';

function QuizTest() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionIndex, setOptionIndex] = useState<number>();
    const { score, setScore, setGameState, allQuizList, setAllQuizList } =
        useContext(QuizContext);

    const nextQuestion = () => {
        if (allQuizList[currentQuestion].answerIndex === optionIndex) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };
    console.log(nextQuestion);

    const finishQuiz = () => {
        if (allQuizList[currentQuestion].answerIndex === optionIndex) {
            setScore(score + 1);
        }
        setGameState('endScreen');
    };

    return (
        <div className="Quiz">
            <h1 className="header">{allQuizList[currentQuestion].question}</h1>
            <div className="options">
                {allQuizList[currentQuestion].options.map(
                    (option: any, i: number) => {
                        return (
                            <button onClick={() => setOptionIndex(i)}>
                                {option}
                            </button>
                        );
                    }
                )}
            </div>

            {currentQuestion === allQuizList.length - 1 ? (
                <button className="button" onClick={finishQuiz}>
                    Finish Quiz
                </button>
            ) : (
                <button className="button" onClick={nextQuestion}>
                    Next Question
                </button>
            )}
        </div>
    );
}

export default QuizTest;
