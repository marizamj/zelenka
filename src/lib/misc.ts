import { v5 as uuidv5 } from "uuid";

export const reactKey = (obj: Record<string, any>): string =>
  uuidv5(JSON.stringify(obj), "00000000-0000-0000-0000-000000000000");