export type FormType = "partners" | "all";

export interface FormCommon {
  name: string;
  email: string;
  tel: string;
}

export interface FormPartners {
  workplace: string;
  message: string;
  money?: string;
  startDate?: string;
}

export interface FormAll {
  messageall: string;
  compliments?: string;
  recommendations?: string;
}

export type FormData = FormCommon & (FormPartners | FormAll);
