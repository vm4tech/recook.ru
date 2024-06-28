import { getCookie, removeCookie } from "typescript-cookie";
import { jwtDecode } from "jwt-decode";

export const isLoggined = (): boolean => getCookie("isLoggined") === "true";
export const isAdmin = (): boolean => {
  const token = getToken();
  if (!token) {
    return false;
  }
  const decodedToken: any = jwtDecode(token!);
  const roles: String[] = decodedToken.realm_access.roles;
  return roles.includes('admin');
}
export const getToken = () => getCookie("access_token");
export const getAuthorization = () => {
  console.log("getToken:", getToken());
  return getToken() !== undefined ? `Bearer ${getToken()}` : "";
}
export const dropCookies = () => {
  removeCookie("access_token");
  removeCookie("refresh_token");
  removeCookie("isLoggined");
  removeCookie("expires_in");
  removeCookie("refresh_expires_in");
};

