import { QuestionModel } from './question.model';

export interface TestModel {
  id: number;
  title: string;
  icon: string;
  questions: QuestionModel[];
}
