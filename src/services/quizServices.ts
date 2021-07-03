import axios from './axios';
import * as config from './../config/api';
import { IQuiz } from '../pages/quiz/components/mainMenu/MainMenu';

export interface IQuizService {
    getQuestionSet(): Promise<any[]>;
    getAllQuiz(questionSetId: string): Promise<IQuiz[]>;
    addQuestionSet(name: string): Promise<any>;
}

export class QuizService implements IQuizService {
    async getQuestionSet(): Promise<any> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/questionSet`
            );
            // console.log(response.data);
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
            // console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    async addQuestionSet(name: string): Promise<any> {
        try {
            const response = await axios.post(
                `${config.apiConfig.baseUrl}/v1/addQuestionSet`,
                {
                    name,
                }
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new QuizService();
