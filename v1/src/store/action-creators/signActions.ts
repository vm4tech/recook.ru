import { Dispatch } from "redux";
import {
  RestAction,
  RestActionTypes,
} from "../../types/types.reducers/RestReducer";
import { setCookie } from "typescript-cookie";
import { SignType } from "../../types/common/SignFormType";
import { AXIOS, SECURITY_URL, SERVER_URL } from "./config";

const AUTH_URL = SECURITY_URL + "/auth";

export const signUp = (sign: SignType) => {
  return async (dispatch: Dispatch<RestAction>) => {
    try {
      console.log("SIGN:", sign);
      dispatch({ type: RestActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${AUTH_URL}/signup`, {
        ...sign,
      });
      // setCookie("token", res.data.token);
      // setCookie("isLoggined", true);
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

export const signIn = (sign: SignType) => {
  return async (dispatch: Dispatch<RestAction>) => {
    try {
      dispatch({ type: RestActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${AUTH_URL}/signin`, {
        ...sign,
      });
      setCookie("token", res.data.token);
      setCookie("isLoggined", true);
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
