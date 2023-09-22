import { Dispatch } from "redux";
import {
  DishContainerAction,
  DishContainerActionTypes,
} from "../../types/types.reducers/DishContainerReducer";
import {
  IngredientsContainerAction,
  IngredientsContainerActionTypes,
} from "../../types/types.reducers/IngredientsContainerReducer";
import { AXIOS, SERVER_URL } from "./config";

const FILTER_PATH = "filter";
export const filterIngredients = (filters: any) => {
  return async (dispatch: Dispatch<IngredientsContainerAction>) => {
    try {
      dispatch({ type: IngredientsContainerActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${FILTER_PATH}/ingredients`, {
        ...filters,
      });
      dispatch({
        type: IngredientsContainerActionTypes.GET_ALL_INGREDIENTS,
        ingredients: res.data,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: IngredientsContainerActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};

export const filterDishes = (filters: any) => {
  return async (dispatch: Dispatch<DishContainerAction>) => {
    try {
      dispatch({ type: DishContainerActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${FILTER_PATH}/dishes`, {
        ...filters,
      });
      dispatch({
        type: DishContainerActionTypes.GET_ALL_DISHES,
        dishes: res.data,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: DishContainerActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};
