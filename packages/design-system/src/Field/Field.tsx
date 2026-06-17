import "./Field.css";

import type { FieldProps } from "./Field.types";

export function Field({
  label,
  required = false,
  helperText,
  error,
  children,
}: FieldProps) {
  return (
    <div className="ds-field">
      <label className="ds-field-label">
        {label}

        {required && <span className="ds-field-required">*</span>}
      </label>

      <div className="ds-field-control">{children}</div>

      {helperText && !error && (
        <div className="ds-field-helper-text">{helperText}</div>
      )}

      {error && <div className="ds-field-error">{error}</div>}
    </div>
  );
}
