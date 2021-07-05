import axios from './axios';
import * as config from './../config/api';
import { IQuiz } from '../pages/quiz/components/mainMenu/MainMenu';

export interface IQuizService {
    getQuestionSet(): Promise<any[]>;
    getAllQuiz(questionSetId: string): Promise<IQuiz[]>;
    addQuestionSet(name: string, userId: number): Promise<any>;
    addQuestions(
        question: string,
        answerIndex: number,
        options: string[],
        questionSetId: number
    ): Promise<any[]>;
}

export class QuizService implements IQuizService {
    async getQuestionSet(): Promise<any> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/questionSet`
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async getAllQuiz(questionSetId: string): Promise<IQuiz[]> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/allQuiz/${questionSetId}`
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    async addQuestionSet(name: string, userId: number): Promise<any> {
        try {
            const response = await axios.post(
                `${config.apiConfig.baseUrl}/v1/addQuestionSet`,
                {
                    name,
                    userId,
                }
            );
            if (response.data) {
                localStorage.setItem(
                    'questionSet',
                    JSON.stringify(response.data)
                );
            }

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    async addQuestions(
        question: string,
        answerIndex: number | undefined,
        options: string[],
        questionSetId: number
    ): Promise<any[]> {
        try {
            const response = await axios.post(
                `${config.apiConfig.baseUrl}/v1/addQuestions`,
                {
                    question,
                    answerIndex,
                    options,
                    questionSetId,
                }
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export default new QuizService();
