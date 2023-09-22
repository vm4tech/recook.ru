import {
  DishContainerAction,
  DishContainerActionTypes,
  DishContainerReducer,
} from "../../types/types.reducers/DishContainerReducer";

const initialState: DishContainerReducer = {
  dishes: [],
  loading: false,
  error: null,
};

export const dishContainerReducer = (
  state = initialState,
  action: DishContainerAction
): DishContainerReducer => {
  switch (action.type) {
    case DishContainerActionTypes.LOADING:
      return { ...state, loading: true, error: null };
    case DishContainerActionTypes.GET_ALL_DISHES:
      return {
        ...state,
        dishes: action.dishes,
        loading: false,
      };
    case DishContainerActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return { ...state, loading: false, error: null };
  }
};
