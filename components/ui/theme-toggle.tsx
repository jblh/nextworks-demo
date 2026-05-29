"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type ButtonProps = React.ComponentProps<typeof Button>;

export type ThemeToggleProps = {
  /** Forwarded to internal Button. You can set unstyled, className, variant, size, etc. */
  buttonProps?: Partial<ButtonProps>;
  /** Optional aria-label override */
  ariaLabel?: string;
  /** Optional class overrides for icons */
  moonClassName?: string;
  sunClassName?: string;
};

export function ThemeToggle({
  buttonProps,
  ariaLabel = "Toggle theme",
  moonClassName,
  sunClassName,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const mergedButtonProps: ButtonProps = {
    variant: "outline",
    size: "icon",
    ...(buttonProps as ButtonProps),
    className: cn(
      "relative",
      // Prefer preset navbar variables, but fall back to theme tokens when they are not provided
      "bg-[var(--navbar-toggle-bg,var(--background))] text-[var(--navbar-accent,var(--foreground))] hover:bg-[var(--navbar-hover-bg,var(--accent))] focus-visible:ring-[var(--navbar-ring,var(--ring))]",
      // Ensure border uses preset variable; provide width for unstyled cases
      "border border-[var(--navbar-border,var(--border))]",
      buttonProps?.className,
    ),

    // Inline style ensures our accent wins over token classes even under dark: variants
    style: {
      ...(buttonProps?.style as React.CSSProperties),
      color: "var(--navbar-accent, var(--foreground))",
      backgroundColor: "var(--navbar-toggle-bg, var(--background))",
      borderColor: "var(--navbar-border, var(--border))",
      // Tell Tailwind ring utilities which ring color to use
      "--tw-ring-color": "var(--navbar-ring, var(--ring))",
    },
  } as ButtonProps;

  return (
    <Button
      {...mergedButtonProps}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={ariaLabel}
    >
      <Moon
        className={cn(
          "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90",
          moonClassName,
        )}
      />
      <Sun
        className={cn(
          "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0",
          sunClassName,
        )}
      />
      <span className="sr-only">{ariaLabel}</span>
    </Button>
  );
}
