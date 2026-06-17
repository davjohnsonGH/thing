import "./Input.css";

import type { InputProps } from "./Input.types";

export function Input({
  type = "text",
  error = false,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={["ds-input", error && "ds-input--error", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
