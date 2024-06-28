import {AXIOS, AXIOS_AUTH, KEYCLOAK_LOGIN} from "./config";
import {AxiosResponse} from "axios";

export const testRequest = () => AXIOS.get<string>("ASDASDSAd")

export const loginRequest = (username: string, password: string) => {
    return AXIOS_AUTH.post(KEYCLOAK_LOGIN, new URLSearchParams({
        client_id: "recook-client",
        username,
        password,
        "grant_type": "password"
    }))
}