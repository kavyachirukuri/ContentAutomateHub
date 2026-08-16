"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * Thin client wrapper around next-themes so the server-rendered RootLayout
 * can stay a server component. Adds/removes the `dark` class on <html>
 * based on the user's saved preference (localStorage) or their OS setting,
 * and Tailwind's `dark:` variants take it from there.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
