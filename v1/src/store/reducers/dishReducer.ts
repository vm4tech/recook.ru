import { MeasureType } from "../../types/common/CommonTypes";
import {
  DishAction,
  DishActionTypes,
  DishReducer,
} from "../../types/types.reducers/DishReducer";

const initialState: DishReducer = {
  loading: false,
  error: null,
  dish: {
    id: 0,
    name: "",
    measureType: MeasureType.MILLIGRAM,
    amount: 0,
    description: "default",
    nickname: "mem",
    proteins: 0,
    fat: 0,
    carbohydrate: 0,
    calories: 0,
    sugar: 0,
  },
};

export const dishReducer = (
  state = initialState,
  action: DishAction
): DishReducer => {
  switch (action.type) {
    case DishActionTypes.LOADING:
      return { ...state, loading: true, error: null };
    case DishActionTypes.GET_DISH:
    case DishActionTypes.CREATE_DISH:
    case DishActionTypes.UPDATE_DISH:
      return {
        ...state,
        dish: action.dish,
        loading: false,
      };
    case DishActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return { ...state, loading: false, error: null };
  }
};
