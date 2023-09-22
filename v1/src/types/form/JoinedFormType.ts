import { JoinedDI } from "../JoinedDI";

export type JoinedFormType = Omit<JoinedDI, "ingredient" | "dish"> & {
  ingredientId?: number;
  dishId?: number;
};
