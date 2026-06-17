import ReactDOM from "react-dom/client";

import "@repo/design-system/styles.css";

import { SchemaForm } from "@repo/form-engine";
import type { FormSchema } from "@repo/form-engine";
import { callReport } from "@repo/mock-data";

const schema = callReport as FormSchema;

function App() {
  return (
    <main>
      <h1>Vault CRM Demo</h1>

      <SchemaForm
        schema={schema}
        onSubmit={(values) => {
          console.log("Submitted values:", values);
        }}
      />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
