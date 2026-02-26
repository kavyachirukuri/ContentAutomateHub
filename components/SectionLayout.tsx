"use client";

import { cn } from "@/lib/cn";

type SectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
  container?: boolean;
};

export function SectionLayout({
  children,
  className,
  variant = "light",
  container = true,
}: SectionLayoutProps) {
  return (
    <section
      className={cn(
        variant === "dark"
          ? "bg-[#0c0f14] text-white"
          : "bg-white text-[#0c0f14]",
        className
      )}
    >
      {container ? (
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
