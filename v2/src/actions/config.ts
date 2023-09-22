import axios, { AxiosRequestConfig } from "axios";
import { getAuthorization } from "../main/utils/CookieUtils";
export const CONFIG_AXIOS: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    Authorization: getAuthorization(),
  },
};

export const AXIOS = axios.create(CONFIG_AXIOS);
export const EMPTY_AXIOS: AxiosRequestConfig = {};
export const AXIOS_AUTH = axios.create(EMPTY_AXIOS);

const URL = "https://refook.ru";
export const CLIENT_ID = "login";
export const SERVER_URL = `${URL}/api/v1`;
export const CORE_URL = "/core";
export const KEYCLOAK_LOGIN = "https://refook.ru/keycloak/login";
export const KEYCLOAK_LOGOUT = "https://refook.ru/keycloak/logout";
