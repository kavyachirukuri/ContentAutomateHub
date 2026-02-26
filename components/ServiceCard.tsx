"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
  className?: string;
  variant?: "dark" | "light";
};

export function ServiceCard({
  title,
  description,
  href,
  className,
  variant = "light",
}: ServiceCardProps) {
  const isDark = variant === "dark";

  const card = (
    <motion.div
      className={cn(
        "rounded-xl border p-6",
        isDark
          ? "border-white/10 bg-white/5 hover:border-[#d4af37]/40 hover:bg-white/10"
          : "border-[#0c0f14]/10 bg-white shadow-sm hover:border-[#d4af37]/50 hover:shadow-lg",
        className,
      )}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.2 }}
    >
      <h3
        className={cn(
          "text-base font-bold tracking-tight",
          isDark ? "text-white" : "text-[#0c0f14]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-6",
          isDark ? "text-gray-300" : "text-gray-600",
        )}
      >
        {description}
      </p>
      {href && (
        <motion.span
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#d4af37]"
          initial={false}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.span>
      )}
    </motion.div>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2"
    >
      {card}
    </Link>
  );
}
