import { strict } from 'assert';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import QuizService from '../../../../services/quizServices';
import './Questions.css';

function Questions() {
    const QuestionSet = localStorage.getItem('questionSet');
    const questionSet = QuestionSet ? JSON.parse(QuestionSet) : undefined;
    const [question, setQuestion] = useState('');
    const [answerIndex, setAnswerIndex] = useState<number>();
    const [options, setOptions] = useState<string[]>(Array(4).fill(null));
    const history = useHistory();

    const submit = async (e: any) => {
        e.preventDefault();
        try {
            const addQuestion = await QuizService.addQuestions(
                question,
                answerIndex,
                options,
                questionSet.id
            );
            if (addQuestion) {
                history.push('/quiz');
            } else {
                alert('Name must not be empty!!');
            }
            console.log(addQuestion);
        } catch (error) {
            console.log(error);
        }
    };

    const enterOption = (index: number, option: string) => {
        // debugger;
        options[index] = option;
        setOptions([...options]);
    };

    const nextQuestion = () => {};

    return (
        <div className="questions">
            <form className="form">
                <div className="form_group">
                    <h3>Question</h3>
                    <input
                        className="input"
                        placeholder="Question"
                        type="text"
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                    />
                    <h3>Answer</h3>
                    <input
                        className="input"
                        placeholder="Answer"
                        type="text"
                        value={answerIndex}
                        onChange={e => setAnswerIndex(parseInt(e.target.value))}
                    />
                    <h3>Options</h3>
                    {options.map((option, i) => {
                        return (
                            <input
                                className="input"
                                placeholder="Option"
                                type="text"
                                value={option}
                                onChange={(e) => enterOption(i, e.target.value)}
                            />
                        );
                    })}
                </div>

                <button onClick={nextQuestion}>Next</button>
                <h3 className="h3">OR</h3>
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    );
}

export default Questions;
