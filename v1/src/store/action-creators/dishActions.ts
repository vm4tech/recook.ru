import { Dispatch } from "redux";
// import { updater } from "../../main/utils/utils";
import { Dish } from "../../types/Dish";
import {
  DishContainerAction,
  DishContainerActionTypes,
} from "../../types/types.reducers/DishContainerReducer";
import {
  DishAction,
  DishActionTypes,
} from "../../types/types.reducers/DishReducer";
import { AXIOS, CORE_URL, SERVER_URL } from "./config";

const DISH_PATH = CORE_URL + "/dish";

export const getAllDishes = () => {
  return async (dispatch: Dispatch<DishContainerAction>) => {
    try {
      dispatch({ type: DishContainerActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${DISH_PATH}/`);
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
    }
  };
};

export const createDish = (dish: Dish) => {
  return async (dispatch: Dispatch<DishAction>) => {
    try {
      dispatch({ type: DishActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${DISH_PATH}/create`, {
        ...dish,
      });
      dispatch({
        type: DishActionTypes.CREATE_DISH,
        dish: res.data,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: DishActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};

export const getAllDishesWithoutRedux = async () => {
  const ingredients = await AXIOS.post(`${SERVER_URL}/${DISH_PATH}/`);
  return ingredients.data;
};

export const updateDish = (dish: Dish) => {
  return async (dispatch: Dispatch<DishAction>) => {
    try {
      dispatch({ type: DishActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${DISH_PATH}/update`, {
        ...dish,
      });
      dispatch({
        type: DishActionTypes.UPDATE_DISH,
        dish: res.data,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: DishActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};
