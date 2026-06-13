import ReactDOM from "react-dom/client";
import { Button } from "@repo/design-system";
import type { User } from "@repo/types";

function App() {
  const user: User = {
    id: "2",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  };

  return (
    <div>
      <h1>Admin Portal</h1>
      <p>{user.name}</p>

      <Button>Delete User</Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
