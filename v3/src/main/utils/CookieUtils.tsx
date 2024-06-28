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
export const dropCookies = async () => {
  await removeCookie("access_token");
  await removeCookie("refresh_token");
  await removeCookie("isLoggined");
  await removeCookie("expires_in");
  await removeCookie("refresh_expires_in");
};

