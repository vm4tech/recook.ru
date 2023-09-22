import { Dispatch } from "redux";
import {
  RestAction,
  RestActionTypes,
} from "../../types/types.reducers/RestReducer";
import { setCookie } from "typescript-cookie";
import { SignType } from "../../types/common/SignFormType";
import { AXIOS, SECURITY_URL, SERVER_URL } from "./config";
import {
  ProfileAction,
  ProfileActionTypes,
} from "../../types/types.reducers/ProfileReducer";
import Profile from "../../types/Profile";

const PROFILE_URL = SECURITY_URL + "/profile";

export const getProfile = () => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch({ type: ProfileActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${PROFILE_URL}/`);
      // setCookie("token", res.data.token);
      // setCookie("isLoggined", true);
      dispatch({
        type: ProfileActionTypes.GET_PROFILE,
        profile: res.data,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: ProfileActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};

export const updateProfile = (profile: Profile) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      console.log("PROFILE:", profile);
      dispatch({ type: ProfileActionTypes.LOADING });
      const res = await AXIOS.post(`${SERVER_URL}/${PROFILE_URL}/update`, {
        ...profile,
      });
      // setCookie("token", res.data.token);
      // setCookie("isLoggined", true);
      dispatch({
        type: ProfileActionTypes.GET_PROFILE,
        profile: res.data,
        success: true,
      });
    } catch (e: any) {
      dispatch({
        type: ProfileActionTypes.ERROR,
        error: e.response.data,
        success: false,
      });
      return e.response.data;
    }
  };
};
