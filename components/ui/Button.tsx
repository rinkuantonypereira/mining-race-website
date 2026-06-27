"use client";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-mr-black disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-brand-teal text-mr-black hover:opacity-90 active:scale-[0.98]": variant === "primary",
            "bg-mr-card border border-mr-border text-mr-white hover:border-brand-teal hover:text-brand-teal": variant === "secondary",
            "text-mr-gray hover:text-mr-white": variant === "ghost",
            "border border-brand-teal text-brand-teal hover:bg-brand-tealDim": variant === "outline",
            "text-xs px-3 py-1.5 rounded-lg": size === "sm",
            "text-sm px-5 py-2.5 rounded-xl": size === "md",
            "text-base px-7 py-3.5 rounded-xl": size === "lg",
            "w-full": fullWidth,
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
