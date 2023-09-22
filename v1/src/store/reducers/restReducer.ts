import {
  RestAction,
  RestActionTypes,
  RestReducer,
} from "../../types/types.reducers/RestReducer";

const initialState: RestReducer = {
  error: null,
  loading: false,
};

export const restReducer = (
  state = initialState,
  action: RestAction
): RestReducer => {
  switch (action.type) {
    case RestActionTypes.LOADING:
      return { ...state, loading: true, error: null };
    case RestActionTypes.GET_RESPONSE:
      return {
        ...state,
        loading: false,
      };
    case RestActionTypes.ERROR:
      console.log("recucer", action);
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return { ...state, loading: false, error: null };
  }
};
