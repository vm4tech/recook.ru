import { EatValue, LongId, MeasureType } from "./common/CommonTypes";
import { JoinedDI } from "./JoinedDI";

export interface Dish extends LongId, EatValue {
  name: string;
  description: string;
  nickname: string;
  measureType: MeasureType;
  amount: number;
  joinedIngredients?: JoinedDI[];
}

export interface DishContainer {
  dishes?: Dish[];
}
