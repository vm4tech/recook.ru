// Для каждого элемента (интерфейса) надо писать свой редюсер и типы

import { ErrorType } from "../common/ErrorType";
import { Dish } from "../Dish";
import ReducerExtender from "./ReducerExtender";

export interface DishReducer extends ReducerExtender {
  dish: Dish;
}

export enum DishActionTypes {
  GET_DISH,
  CREATE_DISH,
  UPDATE_DISH,
  ERROR,
  LOADING,
}

interface GetDish {
  type: DishActionTypes.GET_DISH;
  dish: Dish;
  success: Boolean;
}

interface UpdateDish {
  type: DishActionTypes.UPDATE_DISH;
  dish: Dish;
  success: Boolean;
}

interface CreateDish {
  type: DishActionTypes.CREATE_DISH;
  dish: Dish;
  success: Boolean;
}

interface Error {
  type: DishActionTypes.ERROR;
  error: ErrorType;
}

interface Loading {
  type: DishActionTypes.LOADING;
}
export type DishAction = GetDish | CreateDish | UpdateDish | Error | Loading;
