import config from "../config";
import { FormData } from "../types";

export default function (data: FormData) {
  if (process.env.NODE_ENV === "test") {
    return Promise.resolve(new Response());
  }

  return fetch(config.zelenkaApi.baseUrl + "/form", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
