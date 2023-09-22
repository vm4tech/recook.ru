// Для каждого элемента (интерфейса) надо писать свой редюсер и типы

import { ErrorType } from "../common/ErrorType";
import { Ingredient } from "../Ingredient";
import ReducerExtender from "./ReducerExtender";

export interface IngredientReducer extends ReducerExtender {
  ingredient: Ingredient;
}

export enum IngredientActionTypes {
  GET_INGREDIENT,
  CREATE_INGREDIENT,
  UPDATE_INGREDIENT,
  ERROR,
  LOADING,
}

interface GetIngredient {
  type: IngredientActionTypes.GET_INGREDIENT;
  ingredient: Ingredient;
  success: Boolean;
}

interface UpdateIngredient {
  type: IngredientActionTypes.UPDATE_INGREDIENT;
  ingredient: Ingredient;
  success: Boolean;
}

interface CreateIngredient {
  type: IngredientActionTypes.CREATE_INGREDIENT;
  ingredient: Ingredient;
  success: Boolean;
}

interface Error {
  type: IngredientActionTypes.ERROR;
  error: ErrorType;
}

interface Loading {
  type: IngredientActionTypes.LOADING;
}
export type IngredientAction =
  | GetIngredient
  | CreateIngredient
  | UpdateIngredient
  | Error
  | Loading;
