import {
  Checkbox,
  Field,
  Input,
  RadioGroup,
  Select,
  Textarea,
} from "@repo/design-system";

import type { FieldSchema } from "./types";

export type FormValue = string | number | boolean | FileList | null;

export type FormValues = Record<string, FormValue>;

type FieldRendererProps = {
  field: FieldSchema;
  value?: FormValue;
  onChange: (fieldId: string, value: FormValue) => void;
};

export function FieldRenderer({ field, value, onChange }: FieldRendererProps) {
  switch (field.type) {
    case "text":
    case "email":
    case "tel":
      return (
        <Field
          label={field.label}
          required={field.required}
          helperText={field.helperText}
        >
          <Input
            type={field.type}
            name={field.id}
            placeholder={field.placeholder}
            required={field.required}
            disabled={field.disabled}
            readOnly={field.readOnly}
            maxLength={field.maxLength}
            value={typeof value === "string" ? value : ""}
            onChange={(event) => {
              onChange(field.id, event.target.value);
            }}
          />
        </Field>
      );

    case "number":
      return (
        <Field
          label={field.label}
          required={field.required}
          helperText={field.helperText}
        >
          <Input
            type="number"
            name={field.id}
            placeholder={field.placeholder}
            required={field.required}
            disabled={field.disabled}
            readOnly={field.readOnly}
            min={field.min}
            max={field.max}
            step={field.step}
            value={
              typeof value === "number" || typeof value === "string"
                ? value
                : ""
            }
            onChange={(event) => {
              const nextValue = event.target.value;

              onChange(field.id, nextValue === "" ? "" : Number(nextValue));
            }}
          />
        </Field>
      );

    case "date":
      return (
        <Field
          label={field.label}
          required={field.required}
          helperText={field.helperText}
        >
          <Input
            type="date"
            name={field.id}
            required={field.required}
            disabled={field.disabled}
            readOnly={field.readOnly}
            min={field.min}
            max={field.max}
            value={typeof value === "string" ? value : ""}
            onChange={(event) => {
              onChange(field.id, event.target.value);
            }}
          />
        </Field>
      );

    case "textarea":
      return (
        <Field
          label={field.label}
          required={field.required}
          helperText={field.helperText}
        >
          <Textarea
            name={field.id}
            placeholder={field.placeholder}
            required={field.required}
            disabled={field.disabled}
            readOnly={field.readOnly}
            rows={field.rows}
            maxLength={field.maxLength}
            value={typeof value === "string" ? value : ""}
            onChange={(event) => {
              onChange(field.id, event.target.value);
            }}
          />
        </Field>
      );

    case "select":
      return (
        <Field
          label={field.label}
          required={field.required}
          helperText={field.helperText}
        >
          <Select
            name={field.id}
            required={field.required}
            disabled={field.disabled}
            value={typeof value === "string" ? value : ""}
            options={field.options}
            onChange={(event) => {
              onChange(field.id, event.target.value);
            }}
          />
        </Field>
      );

    case "radio":
      return (
        <Field
          label={field.label}
          required={field.required}
          helperText={field.helperText}
        >
          <RadioGroup
            name={field.id}
            value={typeof value === "string" ? value : ""}
            options={field.options}
            disabled={field.disabled}
            onChange={(event) => {
              onChange(field.id, event.target.value);
            }}
          />
        </Field>
      );

    case "checkbox":
      return (
        <Field
          label={field.label}
          required={field.required}
          helperText={field.helperText}
        >
          <Checkbox
            label={field.label}
            name={field.id}
            required={field.required}
            disabled={field.disabled}
            checked={typeof value === "boolean" ? value : false}
            onChange={(event) => {
              onChange(field.id, event.target.checked);
            }}
          />
        </Field>
      );

    case "file":
      return (
        <Field
          label={field.label}
          required={field.required}
          helperText={field.helperText}
        >
          <Input
            type="file"
            name={field.id}
            required={field.required}
            disabled={field.disabled}
            multiple={field.multiple}
            accept={field.accept?.join(",")}
            onChange={(event) => {
              onChange(field.id, event.target.files);
            }}
          />
        </Field>
      );
  }
}
