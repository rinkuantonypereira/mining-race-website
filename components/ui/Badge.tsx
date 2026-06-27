import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "dark" | "outline";
  className?: string;
}

export function Badge({ children, variant = "teal", className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full",
      {
        "bg-brand-tealDim border border-brand-tealBorder text-brand-teal": variant === "teal",
        "bg-mr-card border border-mr-border text-mr-gray": variant === "dark",
        "border border-mr-borderStrong text-mr-gray": variant === "outline",
      },
      className
    )}>
      {children}
    </span>
  );
}
