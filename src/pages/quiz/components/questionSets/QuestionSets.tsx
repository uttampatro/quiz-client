import React, { useContext, useEffect, useState } from 'react';
import './QuestionSets.css';
import { useHistory } from 'react-router';
import { QuizContext } from '../../../../helper/Contexts';
import userServices from '../../../../services/userServices';
import QuizService from '../../../../services/quizServices';
import { IQuiz } from '../mainMenu/MainMenu';

function QuestionSets() {
    const { gameState, setGameState, allQuizList, setAllQuizList } =
        useContext(QuizContext);
    const [questionSet, setQuestionSet] = useState([]);
 
    const history = useHistory();

    const fetchQuestionSet = async () => {
        try {
            const data = await QuizService.getQuestionSet();
            setQuestionSet(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchQuestionSet();
    }, []);

    const fetchAllQuiz = async (questionSetId: string) => {
        try {
            const allQuiz = await QuizService.getAllQuiz(questionSetId);
            setAllQuizList(allQuiz);
            setGameState('menu');
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            await userServices.logout();
            history.push('/login');
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
                {questionSet.map((question: any) => {
                    return (
                        <div className="body">
                            <h3>{question.name}</h3>
                            <button onClick={() => fetchAllQuiz(question.id)}>
                                Start Quiz
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="loading">
                <button>Load More</button>
            </div>
        </div>
    );
}

export default QuestionSets;
