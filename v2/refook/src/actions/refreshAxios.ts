import {getCookie, setCookie} from "typescript-cookie";
import axios from "axios";
import {AXIOS, AXIOS_AUTH, CLIENT_ID, KEYCLOAK_LOGIN} from "./config";

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
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie("access_token");
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