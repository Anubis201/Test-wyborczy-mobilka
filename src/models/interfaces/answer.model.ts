import { PointsModel } from './points.model';

export interface AnswerModel {
  text: string;
  isChoosed: boolean;
  partiesPoints: PointsModel[];
}
