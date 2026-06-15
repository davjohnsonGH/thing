import "./Button.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`ds-button ds-button--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
