import ReactDOM from "react-dom/client";
import { callReport } from "@repo/mock-data";
import { FieldRenderer } from "@repo/form-engine";
import type { FormSchema } from "@repo/form-engine";
import { Button } from "@repo/design-system";
import "@repo/design-system/styles.css";

const callReportSchema = callReport as FormSchema;

function App() {
  return (
    <div>
      <h1>Web App</h1>
      <FieldRenderer schema={callReportSchema} />
      <Button>Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="danger">Delete</Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
