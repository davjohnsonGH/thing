import "./Select.css";
import type { SelectProps } from "./Select.types";

export function Select({
  options,
  placeholder = "Select...",
  error = false,
  className = "",
  ...props
}: SelectProps) {
  return (
    <select
      className={["ds-select", error && "ds-select--error", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <option value="">{placeholder}</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
