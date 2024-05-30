import request from "./request";
import { getCookie, getCookies } from "cookies-next";
import cookieCutter from "cookie-cutter";

export {
  // clearUserData,
  // storeUserData,
  refreshUserData,
  removeDataFromCookie,
  getToken,
  getUserByToken,
  // checkUserData,
  // getSelfData,
  // loadDataFromLocalStorage,
  // removeDataFromLocalStorage
};

async function refreshUserData() {
  const authToken = storage.getItem("authToken");
  if (authToken === null) return false;
  let { user, isAuthenticated, token } = await getSelfData();

  if (isAuthenticated) await storeUserData({ ...user, isAuthenticated, token });
  else await clearUserData();

  return { ...user, isAuthenticated, token };
}

async function removeDataFromCookie() {}

async function getUserByToken(token) {
  let [err, response] = await request("GET", "/auth/profile", {}, {}, token);
  return [err, response];
}

function getToken() {
  const token = getCookie("token");
  return token;
}
