import { QuestionModel } from './question.model';

export interface TestModel {
  id: number;
  title: string;
  desc: string;
  questions: QuestionModel[];
}
