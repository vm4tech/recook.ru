// Для каждого элемента (интерфейса) надо писать свой редюсер и типы

import { ErrorType } from "../common/ErrorType";
import { IngredientsContainer, Ingredient } from "../Ingredient";
import ReducerExtender from "./ReducerExtender";

export interface IngredientsContainerReducer
  extends IngredientsContainer,
    ReducerExtender {}

export enum IngredientsContainerActionTypes {
  GET_ALL_INGREDIENTS,
  ERROR,
  LOADING,
}

interface GetIngredientsContainer {
  type: IngredientsContainerActionTypes.GET_ALL_INGREDIENTS;
  ingredients: Ingredient[];
  success: Boolean;
}

interface Error {
  type: IngredientsContainerActionTypes.ERROR;
  error: ErrorType;
}

interface Loading {
  type: IngredientsContainerActionTypes.LOADING;
}
export type IngredientsContainerAction =
  | GetIngredientsContainer
  | Error
  | Loading;
