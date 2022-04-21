import { PartiesEnum } from '../enums/parties.enum';

export type ResultType = {
  [key in PartiesEnum]: number
};
