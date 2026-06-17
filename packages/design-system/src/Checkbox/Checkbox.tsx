import "./Checkbox.css";
import type { CheckboxProps } from "./Checkbox.types";

export function Checkbox({
  label,
  error = false,
  className = "",
  ...props
}: CheckboxProps) {
  return (
    <label
      className={["ds-checkbox", error && "ds-checkbox--error", className]
        .filter(Boolean)
        .join(" ")}
    >
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
}
