import { MeasureType } from "../../types/common/CommonTypes";
import { IngredientEnum } from "../../types/Ingredient";
import {
  IngredientAction,
  IngredientActionTypes,
  IngredientReducer,
} from "../../types/types.reducers/IngredientReducer";

const initialState: IngredientReducer = {
  ingredient: {
    id: 0,
    name: "",
    type: IngredientEnum.DAIRY,
    measureType: MeasureType.MILLIGRAM,
    amount: 0,
    proteins: 0,
    fat: 0,
    carbohydrate: 0,
    calories: 0,
    sugar: 0,
  },
  loading: false,
  error: null,
};

export const ingredientReducer = (
  state = initialState,
  action: IngredientAction
): IngredientReducer => {
  switch (action.type) {
    case IngredientActionTypes.LOADING:
      return { ...state, loading: true, error: null };
    case IngredientActionTypes.GET_INGREDIENT:
    case IngredientActionTypes.CREATE_INGREDIENT:
    case IngredientActionTypes.UPDATE_INGREDIENT:
      return {
        ...state,
        ingredient: action.ingredient,
        loading: false,
      };
    case IngredientActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return { ...state, loading: false, error: null };
  }
};
