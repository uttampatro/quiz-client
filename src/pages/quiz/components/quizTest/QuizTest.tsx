import React, { useContext, useState } from 'react';
import { QuizContext } from '../../../../helper/Contexts';
import { Questions } from '../../../../helper/QuestionBank';
import { IQuiz } from '../mainMenu/MainMenu';
import './QuizTest.css';

function QuizTest() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');
    const { score, setScore, setGameState, allQuizList, setAllQuizList } =
        useContext(QuizContext);

    const nextQuestion = () => {
        if (allQuizList[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };
    console.log(nextQuestion)

    const finishQuiz = () => {
        if (allQuizList[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState('endScreen');
    };

    return (
        <div className="Quiz">
            {/* {allQuizList.map((allQuiz: IQuiz) => {
                return (
                    // <h1 className="header">{allQuizList[currentQuestion].question}</h1>
                    <button onClick={() => setOptionChosen('')}>
                        {allQuiz.options[0]}
                    </button>
                );
            })} */}
            <h1 className="header">{allQuizList[currentQuestion].question}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen('optionA')}>
                    {allQuizList[currentQuestion].options[0]}
                </button>
                <button onClick={() => setOptionChosen('optionB')}>
                    {allQuizList[currentQuestion].options[1]}
                </button>
                <button onClick={() => setOptionChosen('optionC')}>
                    {allQuizList[currentQuestion].options[2]}
                </button>
                <button onClick={() => setOptionChosen('optionD')}>
                    {allQuizList[currentQuestion].options[3]}
                </button>
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
