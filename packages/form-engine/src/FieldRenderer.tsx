import type { FormSchema } from "./types";
import { Button } from "@repo/design-system";

type FieldRendererProps = {
  schema: FormSchema;
};

export function FieldRenderer({ schema }: FieldRendererProps) {
  return (
    <form>
      <h2>{schema.title}</h2>
      <p>{schema.description}</p>
      <p>{schema.id}</p>
      <p>{schema.version}</p>
      <Button>Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="danger">Delete</Button>
    </form>
  );
}
