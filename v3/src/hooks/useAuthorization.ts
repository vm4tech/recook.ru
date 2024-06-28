import {useMutation, useQuery, useQueryClient} from "react-query";
import {loginRequest, testRequest} from "../actions/request";
import {DEFAULT_QUERY_OPTIONS} from "../reactQuery/queryOptions";
import {useCallback} from "react";
import {setCookie} from "typescript-cookie";

export const useAuthorization = () =>
    useQuery('test', testRequest, DEFAULT_QUERY_OPTIONS);

export const useLogin = (username: string, password: string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: () => loginRequest(username, password),
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
    }
    )
}
