import { ErrorType } from "../common/ErrorType";

export default interface ReducerExtender {
  loading: boolean;
  error: ErrorType | null;
}
