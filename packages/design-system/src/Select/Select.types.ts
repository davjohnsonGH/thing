import type { SelectHTMLAttributes } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
}