import { FormData } from "../types";

export default function(data: FormData) {
  if (process.env.NODE_ENV === "development") {
    return Promise.resolve(new Response());
  }

  return fetch("https://zelenka-back.now.sh/form", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
