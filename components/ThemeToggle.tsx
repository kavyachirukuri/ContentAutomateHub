"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid rendering theme-dependent UI until after hydration, since the
  // server has no way of knowing the visitor's saved/OS preference.
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0c0f14]/15 text-[#0c0f14] transition-colors hover:bg-[#0c0f14]/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10 ${className}`}
    >
      {!mounted ? (
        <span className="h-5 w-5" />
      ) : isDark ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1.5m0 15V21m8.485-8.485H19M5 12H3.515M17.657 6.343l-1.06 1.06M7.403 16.597l-1.06 1.06M17.657 17.657l-1.06-1.06M7.403 7.403l-1.06-1.06M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      )}
    </button>
  );
}
