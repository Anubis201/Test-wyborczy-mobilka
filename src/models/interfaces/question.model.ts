import { AnswerModel } from './answer.model';

export interface QuestionModel {
  text: string;
  answers: AnswerModel[];
}
