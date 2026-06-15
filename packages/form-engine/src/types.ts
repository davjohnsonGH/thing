export type Option = {
  label: string;
  value: string;
};

export type ShowWhen = {
  fieldId: string;
  equals: string | number | boolean;
};

export type ValidationRule = {
  pattern?: string;
  message: string;
};

export type BaseField = {
  id: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  helperText?: string;
  placeholder?: string;
  defaultValue?: string | number | boolean;
  showWhen?: ShowWhen;
};

export type TextField = BaseField & {
  type: "text" | "email" | "tel";
  maxLength?: number;
  inputMode?: "text" | "email" | "tel" | "numeric";
  validation?: ValidationRule;
};

export type NumberField = BaseField & {
  type: "number";
  min?: number;
  max?: number;
  step?: number;
};

export type DateField = BaseField & {
  type: "date";
  min?: string;
  max?: string;
};

export type TextareaField = BaseField & {
  type: "textarea";
  rows?: number;
  maxLength?: number;
};

export type SelectField = BaseField & {
  type: "select";
  options: Option[];
};

export type RadioField = BaseField & {
  type: "radio";
  options: Option[];
};

export type CheckboxField = BaseField & {
  type: "checkbox";
};

export type FileField = BaseField & {
  type: "file";
  accept?: string[];
  multiple?: boolean;
};

export type FieldSchema =
  | TextField
  | TextareaField
  | NumberField
  | SelectField
  | RadioField
  | CheckboxField
  | DateField
  | FileField;

export type FormSchema = {
  id: string;
  version: string;
  title: string;
  description?: string;
  fields: FieldSchema[];
};