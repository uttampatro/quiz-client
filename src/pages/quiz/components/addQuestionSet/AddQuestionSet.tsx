import React, { useState } from 'react';
import { useHistory } from 'react-router';
import QuizService from '../../../../services/quizServices';
import './AddQuestionSet.css';

function AddQuestionSet() {
    const User = localStorage.getItem('user');
    const user = User ? JSON.parse(User) : undefined;
    const [name, setName] = useState('');
    const history = useHistory();

    const addQuestions = async (e: any) => {
        e.preventDefault();
        try {
            const response = await QuizService.addQuestionSet(name, user.id);
            if (response) {
                history.push('/questions');
            } else {
                alert('Name must not be empty!!');
            }
            console.log(response);
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
                <button onClick={addQuestions}>Next</button>
            </form>
        </div>
    );
}

export default AddQuestionSet;
