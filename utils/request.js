import { to } from "await-to-js";
import { getToken } from "./user";
import CONFIG from "../config";

export default async function request(
  method,
  url,
  body = {},
  params = {},
  authtoken
) {
  let headers = {
    "Content-Type": "application/json;charset=utf-8",
    platformName: "User_Web_Platform",
  };

  let token = authtoken ? authtoken : getToken();
  if (token !== null) headers.Authorization = `Bearer ${token}`;

  // switch (true) {
  //   case token:
  //     // return [Error('Not authenticated'), null];
  //     break;
  // }

  let err, response;

  url = `${CONFIG.API_DOMAIN}${url}`;
  // url = `http://localhost:3231/api${url}`;
  console.log("calling api", url);

  switch (method.toLowerCase()) {
    case "get":
      [err, response] = await to(
        fetch(url, {
          headers,
          method: "get",
          ...params,
        })
      );
      break;
    case "post":
    case "put":
    case "patch":
    case "delete":
      [err, response] = await to(
        fetch(url, {
          headers,
          method: method.toLowerCase(),
          body: JSON.stringify(body),
          ...params,
        })
      );
      break;
    default:
      err = new Error("Invalid method");
      break;
  }
  response = response && (await response.json());
  return [err, response];
}
