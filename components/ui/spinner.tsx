import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
};

const variantClasses = {
  default: "text-foreground",
  primary: "text-primary",
  success: "text-green-500",
  warning: "text-amber-500",
  danger: "text-rose-500",
};

export function Spinner({ 
  className, 
  size = "md", 
  variant = "default" 
}: SpinnerProps) {
  return (
    <Loader2Icon 
      className={cn(
        "animate-spin",
        sizeClasses[size],
        variantClasses[variant],
        className
      )} 
    />
  );
}

export function SpinnerDemo() {
  return (
    <div className="flex gap-4 flex-wrap items-center">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}

export function SpinnerColorsDemo() {
  return (
    <div className="flex gap-4 flex-wrap items-center">
      <Spinner variant="default" />
      <Spinner variant="primary" />
      <Spinner variant="success" />
      <Spinner variant="warning" />
      <Spinner variant="danger" />
    </div>
  );
}
