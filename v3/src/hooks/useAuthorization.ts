import {useMutation, useQuery, useQueryClient} from "react-query";
import {loginRequest, logoutRequest, testRequest} from "../actions/request";
import {DEFAULT_QUERY_OPTIONS} from "../reactQuery/queryOptions";
import {useCallback} from "react";
import {setCookie} from "typescript-cookie";
import {dropCookies} from "../main/utils/CookieUtils";

export const useAuthorization = () =>
    useQuery('test', testRequest, DEFAULT_QUERY_OPTIONS);

export const useLogin = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: loginRequest,
        onSuccess: useCallback(
            (res: any) => {
                queryClient.removeQueries("keycloak_login")
                queryClient.setQueryData("keycloak_login", res)
                setCookie("access_token", res.data.access_token);
                setCookie("refresh_token", res.data.refresh_token);
                setCookie("isLoggined", true);
                setCookie("expires_in", res.data.expires_in);
                setCookie("refresh_expires_in", res.data.refresh_expires_in);
            },
            [queryClient]
        ),
        onError: (err) => {console.warn(err)}
    })
}

export const useLogout = () => {
    return useMutation({
        mutationFn: logoutRequest,
        onSuccess: useCallback(
            () => {
                dropCookies()
            },
            []
        ),
        onError: (err) => {console.warn(err)}
    })
}
