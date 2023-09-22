import { getCookie, removeCookie } from "typescript-cookie";

export const isLoggined = (): boolean => getCookie("isLoggined") === "true";
export const getToken = () => getCookie("access_token");
export const getAuthorization = () =>
  getToken() !== undefined ? `Bearer ${getToken()}` : "";
export const dropCookies = async () => {
  await removeCookie("access_token");
  await removeCookie("refresh_token");
  await removeCookie("isLoggined");
  await removeCookie("expires_in");
  await removeCookie("refresh_expires_in");
};

// export const setCookie = () => {
//   //             // setCookie("token", res.data.token);
//   //             // setCookie("isLoggined", true);
// };
