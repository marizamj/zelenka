import { FormData } from "../types";

export default function(data: FormData) {
  return fetch("https://zelenka-back.now.sh/form", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
