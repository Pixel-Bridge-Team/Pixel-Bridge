// src/components/common/Button.tsx

import React from "react";

type ButtonVariant = "primary" | "secondary" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-linear-to-r from-[#42A5F5] to-[#018BD8] text-white hover:opacity-90 hover:shadow-[0_4px_20px_rgba(1,139,216,0.4)] focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
  secondary: "bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-500 hover:text-white focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
  dark: "bg-[#001954] text-white border border-[#0A0F2C] hover:border-primary-500 hover:bg-[#0A0F2C] focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm font-medium rounded-full",
  md: "px-6 py-3 text-base font-semibold rounded-full",
  lg: "px-8 py-4 text-lg font-semibold rounded-full",
};

const Spinner = () => (
  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  children,
  ...rest
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      className={[
        "inline-flex items-center justify-center gap-2 transition-all duration-200 outline-none select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className,
      ].filter(Boolean).join(" ")}
      {...rest}
    >
      {isLoading ? <Spinner /> : leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };