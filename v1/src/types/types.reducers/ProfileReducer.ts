import Profile from "../Profile";
import ReducerExtender from "./ReducerExtender";
import { ErrorType } from "../common/ErrorType";

export interface ProfileReducer extends ReducerExtender {
  profile: Profile;
}
export enum ProfileActionTypes {
  GET_PROFILE,
  UPDATE_PROFILE,
  CHANGE_PASSWORD,
  ERROR,
  LOADING,
}

interface GetProfile {
  type: ProfileActionTypes.GET_PROFILE;
  profile: Profile;
  success: Boolean;
}

interface Error {
  type: ProfileActionTypes.ERROR;
  error: ErrorType;
}

interface Loading {
  type: ProfileActionTypes.LOADING;
}
export type ProfileAction = GetProfile | Error | Loading;
