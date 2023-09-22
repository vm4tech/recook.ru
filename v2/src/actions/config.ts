import axios, { AxiosRequestConfig } from "axios";
import {getAuthorization, getToken} from "../main/utils/CookieUtils";
import {getCookie, setCookie} from "typescript-cookie";
export const CONFIG_AXIOS: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

export const AXIOS = axios.create(CONFIG_AXIOS);

AXIOS.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + getCookie("access_token");
  return config;
}, function (error) {
  return Promise.reject(error);
});
AXIOS.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if ((error.response.status === 403 || error.response.status === 401 )&& !originalRequest._retry) {
    originalRequest._retry = true;
    await AXIOS_AUTH.post(
      KEYCLOAK_LOGIN,
      new URLSearchParams(getRefreshObj()),
    ).then(res => {
      setCookie("access_token", res.data.access_token);
      setCookie("refresh_token", res.data.refresh_token);
      setCookie("isLoggined", true);
      setCookie("expires_in", res.data.expires_in);
      setCookie("refresh_expires_in", res.data.refresh_expires_in);
    });
    originalRequest.headers.Authorization = 'Bearer ' + getCookie("access_token");
    return AXIOS(originalRequest);
  }
  return Promise.reject(error);
});

const getRefreshObj = ()  => {
  return {
    refresh_token: getCookie("refresh_token")!,
    client_id: CLIENT_ID,
    grant_type: "refresh_token"
  }
}
export const EMPTY_AXIOS: AxiosRequestConfig = {};
export const AXIOS_AUTH = axios.create(EMPTY_AXIOS);

const URL = "https://refook.ru";
export const CLIENT_ID = "login";
export const SERVER_URL = `${URL}/api/v1`;
export const CORE_URL = "/core";
export const SERVER_CORE_URL = SERVER_URL + CORE_URL
export const KEYCLOAK_LOGIN = "https://refook.ru/keycloak/login";
export const KEYCLOAK_LOGOUT = "https://refook.ru/keycloak/logout";
