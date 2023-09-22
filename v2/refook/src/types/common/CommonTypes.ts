import { ErrorType } from "./ErrorType";

export interface LongId {
  id?: number;
}

export interface EatValue {
  proteins: number;
  fat: number;
  carbohydrate: number;
  calories: number;
  sugar: number;
}

export enum MeasureType {
  MILLIGRAM = 1,
  GRAM = 2,
  KILOGRAM = 3,

  MILLILITER = 4,
  LITER = 5,
}

export type SetOpenType = React.Dispatch<React.SetStateAction<boolean>>;
export type SendFunctionType = (
  requestObj: any,
  ...otherNeedsParams: any
) => Promise<void>;
