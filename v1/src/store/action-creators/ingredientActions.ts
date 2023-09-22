import { Dispatch } from "redux";
import { Ingredient } from "../../types/Ingredient";
import {
  IngredientAction,
  IngredientActionTypes,
} from "../../types/types.reducers/IngredientReducer";
import {
  IngredientsContainerAction,
  IngredientsContainerActionTypes,
} from "../../types/types.reducers/IngredientsContainerReducer";
import { AXIOS, CORE_URL, SERVER_URL } from "./config";

const ingredients_url = CORE_URL + "/ingredient";

export const getAllIngredients = () => {
  return async (dispatch: Dispatch<IngredientsContainerAction>) => {
    try {
      dispatch({ type: IngredientsContainerActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${ingredients_url}/`);
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
    }
  };
};
export const getAllIngredientsWithoutRedux = async () => {
  const ingredients = await AXIOS.post(`${SERVER_URL}/${ingredients_url}/`);
  return ingredients.data;
};

export const createIngredient = (ingredient: Ingredient) => {
  return async (dispatch: Dispatch<IngredientAction>) => {
    try {
      dispatch({ type: IngredientActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${ingredients_url}/create`, {
        ...ingredient,
      });
      dispatch({
        type: IngredientActionTypes.CREATE_INGREDIENT,
        ingredient: res.data,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: IngredientActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};

export const updateIngredient = (ingredient: Ingredient) => {
  console.log("updateIngredient!: ", ingredient);
  return async (dispatch: Dispatch<IngredientAction>) => {
    try {
      dispatch({ type: IngredientActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${ingredients_url}/update`, {
        ...ingredient,
      });
      dispatch({
        type: IngredientActionTypes.UPDATE_INGREDIENT,
        ingredient: res.data,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: IngredientActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};
