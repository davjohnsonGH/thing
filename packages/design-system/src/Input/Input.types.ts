import type {
  InputHTMLAttributes,
} from "react";

export type InputType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "date"
  | "file";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type"
  > {
  type?: InputType;
  error?: boolean;
}