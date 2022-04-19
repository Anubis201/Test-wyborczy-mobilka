import { PointsModel } from './points.model';

export interface QuestionModel {
  text: string;
  answers: {
    text: string;
    isChoosed: boolean;
    partiesPoints: PointsModel[];
  }[];
}
