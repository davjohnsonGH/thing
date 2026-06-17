import type { InputHTMLAttributes } from "react";

export type RadioOption = {
  label: string;
  value: string;
};

export interface RadioGroupProps {
  name: string;
  value?: string;
  options: RadioOption[];

  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  disabled?: boolean;

  error?: boolean;
}