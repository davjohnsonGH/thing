import type { FormSchema } from "./types";

type SchemaFormProps = {
  schema: FormSchema;
};

export function SchemaForm({ schema }: SchemaFormProps) {
  return (
    <form>
      <h2>{schema.title}</h2>
    </form>
  );
}
