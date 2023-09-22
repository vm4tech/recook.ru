import { ErrorType } from "../types/common/ErrorType";

/**
 * This is inheritance class, use {@link autoObservable} for parent class
 */
export class CommonStore {
  error?: null | ErrorType;
  isLoading?: boolean = false;

  setError = (err: ErrorType) => {
    this.error = err;
  };
  clearError = () => {
    this.error = null;
  };

  setLoading = (val: boolean) => {
    this.isLoading = val;
  };

  delay = async (ms?: number) => {
    ms = ms ? ms : 2000;
    console.warn("_delay:start:ms:", ms, Date.now());
    const prom = await new Promise((r) => setTimeout(r, ms));
    console.warn("_delay:finish:ms:", ms, Date.now());
    return prom;
  };
}
