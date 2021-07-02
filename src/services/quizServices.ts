import axios from './axios';
import * as config from './../config/api';
import { IQuiz } from '../pages/quiz/components/mainMenu/MainMenu';

export interface IQuizService {
    getQuestionSet(): Promise<any[]>;
    getAllQuiz(questionSetId: string): Promise<IQuiz[]>;
}

export class QuizService implements IQuizService {
    async getQuestionSet(): Promise<any> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/questionSet`
            );
            console.log(response.data)
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
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export default new QuizService();
