import "./Textarea.css";
import type { TextareaProps } from "./Textarea.types";

export function Textarea({
  error = false,
  className = "",
  rows = 4,
  ...props
}: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={["ds-textarea", error && "ds-textarea--error", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
