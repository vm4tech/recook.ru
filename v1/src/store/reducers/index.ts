import { combineReducers } from "redux";
import { ingredientsContainerReducer } from "./ingredientsContainerReducer";
import { ingredientReducer } from "./ingredientReducer";
import { dishContainerReducer } from "./dishContainerReducer";
import { dishReducer } from "./dishReducer";
import { restReducer } from "./restReducer";
import { profileReducer } from "./profileReducer";
export const rootReducer = combineReducers({
  ingredientsContainerReducer: ingredientsContainerReducer,
  ingredientReducer: ingredientReducer,
  dishContainerReducer: dishContainerReducer,
  dishReducer: dishReducer,
  restReducer: restReducer,
  profileReducer: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
