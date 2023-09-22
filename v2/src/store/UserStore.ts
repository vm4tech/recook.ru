import { SignType } from "../types/common/SignFormType";
import {
  AXIOS,
  AXIOS_AUTH,
  CLIENT_ID,
  KEYCLOAK_LOGIN, KEYCLOAK_LOGOUT,
  SERVER_URL,
} from "../actions/config";
import {getCookie, setCookie} from "typescript-cookie";
import { CommonStore } from "./CommonStore";
import autoObservable from "./autoObservable";
import {dropCookies} from "../main/utils/CookieUtils";

export class UserStore extends CommonStore {
  login?: string;
  password?: string;
  isLoading: boolean = false;

  constructor() {
    super();
    autoObservable(this);
  }

  loginAction = async (sign: SignType) => {
    this.setLoading(true);
    return await AXIOS_AUTH.post(
      KEYCLOAK_LOGIN,
      new URLSearchParams(this.getSignObject(sign)),
    )
      .then((res) => {
        setCookie("access_token", res.data.access_token);
        setCookie("refresh_token", res.data.refresh_token);
        setCookie("isLoggined", true);
        setCookie("expires_in", res.data.expires_in);
        setCookie("refresh_expires_in", res.data.refresh_expires_in);
        this.setLoading(false);
      })
      .catch((err) => {
        this.setError(err);
        this.setLoading(false);
        throw err;
      });
  };

  logout = async () => {
    this.setLoading(true);
    return await AXIOS_AUTH.post(
        KEYCLOAK_LOGOUT, new URLSearchParams(this.getLogoutObject())
    ).then(async res => {
      await dropCookies().then(() => {
        this.setLoading(false);
      })
    })
    .catch(err => {
      this.setError(err);
      this.setLoading(false)
      throw err;
    })
  }

  setLogin = (val: string) => {
    this.login = val;
  };
  getSignObject = (sign: SignType) => {
    return {
      ...sign,
      client_id: CLIENT_ID,
      grant_type: "password",
    };
  };

  getLogoutObject = () => {
    return {
      refresh_token: getCookie("refresh_token")!,
      client_id: CLIENT_ID
    }
  }
}
