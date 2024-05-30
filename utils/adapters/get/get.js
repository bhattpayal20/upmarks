import cacheData from "memory-cache";
import request from "../../request";

export default async function getClasses() {
  let value = cacheData.get("/game/curriculum");
  if (value) {
    console.log('cached data ', value);
    return value;
  } else {
    let [err, response] = await request("GET", "/game/curriculum");
    console.log('first time cache ', response);
    cacheData.put("/game/curriculum", response, 500000);
    return response;
  }
}
