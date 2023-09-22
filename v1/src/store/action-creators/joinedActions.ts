
import { Dispatch } from "redux";
import { JoinedFormType } from "../../types/form/JoinedFormType";
import {
  RestAction,
  RestActionTypes,
} from "../../types/types.reducers/RestReducer";
import { AXIOS, CORE_URL, SERVER_URL } from "./config";

const joined_url = CORE_URL + "/joined";

export const addDishIngredient = (joined: JoinedFormType) => {
  return async (dispatch: Dispatch<RestAction>) => {
    try {
      dispatch({ type: RestActionTypes.LOADING });
      await AXIOS.post(`${SERVER_URL}/${joined_url}/addDishIngredient`, {
        ...joined,
      });
      dispatch({
        type: RestActionTypes.GET_RESPONSE,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: RestActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};
