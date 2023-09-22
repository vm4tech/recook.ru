import {
  IngredientsContainerAction,
  IngredientsContainerActionTypes,
  IngredientsContainerReducer,
} from "../../types/types.reducers/IngredientsContainerReducer";

const initialState: IngredientsContainerReducer = {
  ingredients: [],
  loading: false,
  error: null,
};

export const ingredientsContainerReducer = (
  state = initialState,
  action: IngredientsContainerAction
): IngredientsContainerReducer => {
  switch (action.type) {
    case IngredientsContainerActionTypes.LOADING:
      return { ...state, loading: true, error: null };
    case IngredientsContainerActionTypes.GET_ALL_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        loading: false,
      };
    case IngredientsContainerActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return { ...state, loading: false, error: null };
  }
};
