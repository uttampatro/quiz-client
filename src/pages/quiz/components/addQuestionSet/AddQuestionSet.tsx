import React, { useState } from 'react';
import { useHistory } from 'react-router';
import QuizService from '../../../../services/quizServices';
import './AddQuestionSet.css';

function AddQuestionSet() {
    const [name, setName] = useState('');
    const history = useHistory();

    const questions = async (e: any) => {
        e.preventDefault();
        try {
            const addQuestion = await QuizService.addQuestionSet(name);
            if (addQuestion) {
                history.push('/questions');
            } else {
                alert('Name must not be empty!!');
            }
            console.log(addQuestion);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="addQuestionSet">
            <form className="form">
                <div className="form_group">
                    <label>Name</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button onClick={questions}>Next</button>
            </form>
        </div>
    );
}

export default AddQuestionSet;
