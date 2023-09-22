import { getCookie, removeCookie } from "typescript-cookie";

export const isLoggined = (): boolean => getCookie("isLoggined") === "true";
export const getToken = () => getCookie("token");
export const getAuthorization = () =>
  getToken() !== undefined ? `Bearer ${getToken()}` : "";
export const dropCookies = async () => {
  await removeCookie("token");
  await removeCookie("isLoggined");
};
