import { AXIOS, CORE_URL, SERVER_URL } from "../actions/config";
import { CommonStore } from "./CommonStore";
import autoObservable from "./autoObservable";

const LIVE_URL = SERVER_URL + CORE_URL + "/live/";

// @ts-ignore
export class LiveStore extends CommonStore {
  live?: string;
  getLive = async () => {
    this.setLoading(true);
    await AXIOS.get(LIVE_URL)
      .then((res) => {
        console.warn("RES!!", res.data);
        this.setLive(res.data);
      })
      .catch((err) => {
        console.warn(err);
        this.setLive(err.toString());
      });
  };

  setLive = (val: string) => {
    this.live = val;
  };

  constructor() {
    super();
    autoObservable(this);
  }
}
