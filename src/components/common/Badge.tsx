// src/components/common/Badge.tsx

import React from "react";

type BadgeVariant = "default" | "primary" | "outline" | "dark";
type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700 border border-neutral-200",
  primary: "bg-primary-500 text-white border border-transparent",
  outline: "bg-transparent text-primary-500 border border-primary-500",
  dark: "bg-dark-navy-2 text-neutral-300 border border-dark-navy-1",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2.5 py-0.5 text-xs font-medium",
  md: "px-3.5 py-1 text-sm font-medium",
};

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "sm",
  className = "",
  children,
  ...rest
}) => (
  <span
    className={[
      "inline-flex items-center rounded-full transition-colors duration-200",
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    {...rest}
  >
    {children}
  </span>
);

export default Badge;
export { Badge };
export type { BadgeVariant, BadgeSize };