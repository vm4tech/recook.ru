import { MeasureType } from "./common/CommonTypes";
import { Dish } from "./Dish";
import { Ingredient } from "./Ingredient";

export interface JoinedDI {
  id: number;
  name: string;
  amount: number;
  measureType: MeasureType;
  dish: Dish;
  ingredient: Ingredient;
}
