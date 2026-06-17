import { useMemo, useState } from "react";

import { Button } from "@repo/design-system";

import { FieldRenderer } from "./FieldRenderer";

import type { FormSchema, FieldSchema } from "./types";

export type FormValue = string | number | boolean | FileList | null;

export type FormValues = Record<string, FormValue>;

type SchemaFormProps = {
  schema: FormSchema;
  onSubmit?: (values: FormValues) => void;
};

export function SchemaForm({ schema, onSubmit }: SchemaFormProps) {
  const [values, setValues] = useState<FormValues>({});

  function handleChange(fieldId: string, value: FormValue) {
    setValues((previous) => ({
      ...previous,
      [fieldId]: value,
    }));
  }

  const visibleFields = useMemo(() => {
    return schema.fields.filter((field) => {
      if (!field.showWhen) {
        return true;
      }

      const controllingValue = values[field.showWhen.fieldId];

      return controllingValue === field.showWhen.equals;
    });
  }, [schema.fields, values]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit?.(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{schema.title}</h2>

      {schema.description && <p>{schema.description}</p>}

      {visibleFields.map((field) => (
        <FieldRenderer
          key={field.id}
          field={field}
          value={values[field.id]}
          onChange={handleChange}
        />
      ))}

      <Button type="submit">Submit</Button>
    </form>
  );
}
