import "./RadioGroup.css";

import type { RadioGroupProps } from "./RadioGroup.types";

export function RadioGroup({
  name,
  value,
  options,
  onChange,
  disabled = false,
  error = false,
}: RadioGroupProps) {
  return (
    <div
      className={["ds-radio-group", error && "ds-radio-group--error"]
        .filter(Boolean)
        .join(" ")}
    >
      {options.map((option) => (
        <label key={option.value} className="ds-radio-option">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            disabled={disabled}
          />

          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
