import {AXIOS, AXIOS_AUTH, CLIENT_ID, KEYCLOAK_LOGIN, KEYCLOAK_LOGOUT} from "./config";
import {AxiosResponse} from "axios";
import {LoginRequest, LogoutRequest} from "../types";
import {getCookie} from "typescript-cookie";

export const testRequest = () => AXIOS.get<string>("ASDASDSAd")

export const loginRequest = (request: LoginRequest) => {
    return AXIOS_AUTH.post(KEYCLOAK_LOGIN, new URLSearchParams({
        client_id: CLIENT_ID,
        username: request.username,
        password: request.password,
        "grant_type": "password"
    }))
}
export const logoutRequest = () => {
    return AXIOS_AUTH.post(KEYCLOAK_LOGOUT, new URLSearchParams({
        refresh_token: getCookie("refresh_token")!,
        client_id: CLIENT_ID
    }))
}