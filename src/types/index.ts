export type FormType = "partners" | "all";

export interface FormCommon {
  name: string;
  email: string;
  phone: string;
}

export type FormPartners = FormCommon & {
  workplace: string;
  message: string;
  money?: string;
  startDate?: string;
};

export type FormAll = FormCommon & {
  messageall: string;
  compliments?: string;
  recommendations?: string;
};

export type FormFull = FormPartners & FormAll;

export type FormData = FormPartners | FormAll;

export interface FieldData {
  label: string;
  name: keyof FormPartners | keyof FormAll;
  required?: boolean;
  type?: HTMLInputElement["type"];
}

export interface VideoData {
  src: string;
  title: string;
}

export interface PartnerData {
  id: string;
  title: string;
  url: string;
  img: string;
}
