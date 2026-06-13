import ReactDOM from "react-dom/client";
import { Button } from "@repo/design-system";

function App() {
  return (
    <div>
      <h1>Turbo Repo</h1>
      <Button>Design System Button</Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
