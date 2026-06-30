// src/components/common/Input.tsx

import React, { forwardRef, useId } from "react";

type InputType = "text" | "email" | "password" | "tel" | "url" | "number";

interface BaseFieldProps {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

export interface InputProps
  extends BaseFieldProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  type?: InputType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface TextareaProps
  extends BaseFieldProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
}

const labelClass = "block text-sm font-medium text-neutral-700 mb-1.5";

const fieldClass = (hasError: boolean, extra = "") =>
  [
    "w-full px-4 py-3 text-base bg-white text-neutral-900 placeholder:text-neutral-400",
    "rounded-md border outline-none transition-all duration-200",
    hasError
      ? "border-error focus:border-error focus:shadow-[0_0_0_3px_rgba(239,68,68,0.25)]"
      : "border-neutral-200 hover:border-primary-400 focus:border-primary-500 focus:shadow-[var(--shadow-input-focus)]",
    "disabled:bg-neutral-50 disabled:text-neutral-400 disabled:cursor-not-allowed",
    extra,
  ]
    .filter(Boolean)
    .join(" ");

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = true,
      type = "text",
      leftIcon,
      rightIcon,
      id,
      className = "",
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hasError = Boolean(error);

    return (
      <div className={fullWidth ? "w-full" : "inline-block"}>
        {label && (
          <label htmlFor={inputId} className={labelClass}>
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3 text-neutral-400 pointer-events-none">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            type={type}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            className={fieldClass(
              hasError,
              [leftIcon ? "pl-10" : "", rightIcon ? "pr-10" : "", className]
                .filter(Boolean)
                .join(" ")
            )}
            {...rest}
          />
          {rightIcon && (
            <span className="absolute right-3 text-neutral-400">
              {rightIcon}
            </span>
          )}
        </div>
        {hasError ? (
          <p id={`${inputId}-error`} role="alert" className="mt-1.5 text-xs text-error">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-neutral-400">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = true,
      rows = 5,
      id,
      className = "",
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const hasError = Boolean(error);

    return (
      <div className={fullWidth ? "w-full" : "inline-block"}>
        {label && (
          <label htmlFor={fieldId} className={labelClass}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          aria-invalid={hasError}
          aria-describedby={
            hasError
              ? `${fieldId}-error`
              : helperText
              ? `${fieldId}-helper`
              : undefined
          }
          className={fieldClass(hasError, `resize-none ${className}`)}
          {...rest}
        />
        {hasError ? (
          <p id={`${fieldId}-error`} role="alert" className="mt-1.5 text-xs text-error">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${fieldId}-helper`} className="mt-1.5 text-xs text-neutral-400">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";