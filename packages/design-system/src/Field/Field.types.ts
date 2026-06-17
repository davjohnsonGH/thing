import type { ReactNode } from "react";

export interface FieldProps {
  label: string;

  required?: boolean;

  helperText?: string;

  error?: string;

  children: ReactNode;
}