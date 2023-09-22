import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "typescript-cookie";
import { getAuthorization } from "../../main/utils/CookieUtils";

export const CONFIG_AXIOS: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    // 'Access-Control-Allow-Origin': "http://localhost:3000/",
    "Access-Control-Allow-Origin": "*",
    Authorization: getAuthorization(),
  },
};
export const AXIOS = axios.create(CONFIG_AXIOS);

const PORT = 8080;
const URL = `http://localhost:${PORT}`;

export const SERVER_URL = `${URL}/api/v1`;
export const CORE_URL = "core";
export const SECURITY_URL = "security";
