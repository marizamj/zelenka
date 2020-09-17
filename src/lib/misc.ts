import { v5 as uuidv5 } from "uuid";

export const reactKey = (obj: Record<string, any>): string =>
  uuidv5(JSON.stringify(obj), "00000000-0000-0000-0000-000000000000");

export const breakpoints = {
  maxWidth1023: "@media only screen and (max-width: 1023px)",
  maxWidth700: "@media only screen and (max-width: 700px)",
  maxWidth560: "@media only screen and (max-width: 560px)"
};
