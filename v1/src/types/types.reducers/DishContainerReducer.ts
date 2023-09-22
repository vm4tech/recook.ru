// Для каждого элемента (интерфейса) надо писать свой редюсер и типы

import { ErrorType } from "../common/ErrorType";
import { Dish, DishContainer } from "../Dish";
import ReducerExtender from "./ReducerExtender";

export interface DishContainerReducer extends DishContainer, ReducerExtender {}

export enum DishContainerActionTypes {
  GET_ALL_DISHES,
  ERROR,
  LOADING,
}

interface GetIngredientsContainer {
  type: DishContainerActionTypes.GET_ALL_DISHES;
  dishes: Dish[];
  success: Boolean;
}

interface Error {
  type: DishContainerActionTypes.ERROR;
  error: ErrorType;
}

interface Loading {
  type: DishContainerActionTypes.LOADING;
}
export type DishContainerAction = GetIngredientsContainer | Error | Loading;
