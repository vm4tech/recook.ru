import { ErrorType } from "../common/ErrorType";
import ReducerExtender from "./ReducerExtender";

export interface RestReducer extends ReducerExtender {}
export enum RestActionTypes {
  GET_RESPONSE,
  ERROR,
  LOADING,
}

interface GetResponse {
  type: RestActionTypes.GET_RESPONSE;
  success: Boolean;
}

interface Error {
  type: RestActionTypes.ERROR;
  error: ErrorType;
}

interface Loading {
  type: RestActionTypes.LOADING;
}
export type RestAction = GetResponse | Error | Loading;
