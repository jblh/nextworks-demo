import type React from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { EnhancedThemeProvider } from "@/components/enhanced-theme-provider";

export default function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <EnhancedThemeProvider>{children}</EnhancedThemeProvider>
    </ThemeProvider>
  );
}
