import React, { useContext, useState } from 'react';
import { QuizContext } from '../../helper/Contexts';
import MainMenu, { IQuiz } from './components/mainMenu/MainMenu';
import QuizTest from './components/quizTest/QuizTest';
import EndMenu from './components/endMenu/EndMenu';
import './Quiz.css';
import QuestionSets from './components/questionSets/QuestionSets';

function Quiz() {
    const [gameState, setGameState] = useState('questionSets');
    const [score, setScore] = useState(0);
    const [allQuizList, setAllQuizList] = useState<IQuiz[]>([]);
    const User = localStorage.getItem('user');
    const userExist = User ? JSON.parse(User) : undefined;

    if (!userExist) {
        return <>Loading...</>;
    }

    return (
        <div className="quiz">
            {gameState === 'questionSets' ? <></> : <h1>Quiz App</h1>}

            <QuizContext.Provider
                value={{
                    gameState,
                    setGameState,
                    score,
                    setScore,
                    allQuizList,
                    setAllQuizList,
                }}
            >
                {gameState === 'menu' && <MainMenu />}
                {gameState === 'quiz' && <QuizTest />}
                {gameState === 'endScreen' && <EndMenu />}
                {gameState === 'questionSets' && <QuestionSets />}
            </QuizContext.Provider>
        </div>
    );
}

export default Quiz;
