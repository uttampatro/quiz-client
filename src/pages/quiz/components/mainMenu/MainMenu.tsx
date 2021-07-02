import React, { useContext, useState } from 'react';
import { QuizContext } from '../../../../helper/Contexts';
import QuizService from '../../../../services/quizServices';
import './MainMenu.css';

export interface IQuiz {
    id: number;
    question: string;
    answer: string;
    options: Array<string>;
    // currentQuestion: Array<number>;
}

function MainMenu() {
    const { gameState, setGameState, userName, setUserName } =
        useContext(QuizContext);

    return (
        <div className="Menu">
            <h3>Welcome to Quiz test User</h3>
            <button
                onClick={() => {
                    setGameState('quiz');
                }}
            >
                Start Quiz
            </button>
        </div>
    );
}

export default MainMenu;
