<<<<<<< HEAD
import Link from "next/link";
=======
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
>>>>>>> 012d777 (updated to v1)
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
  className?: string;
<<<<<<< HEAD
=======
  variant?: "dark" | "light";
>>>>>>> 012d777 (updated to v1)
};

export function ServiceCard({
  title,
  description,
  href,
  className,
<<<<<<< HEAD
}: ServiceCardProps) {
  const card = (
    <div
      className={cn(
        "rounded-xl border border-stone-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)]",
        "motion-safe:transition-[border-color,box-shadow,transform] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_10px_30px_rgba(2,44,34,0.08)]",
        className,
      )}
    >
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
=======
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
        className
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
          isDark ? "text-white" : "text-[#0c0f14]"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-6",
          isDark ? "text-gray-300" : "text-gray-600"
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
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.span>
      )}
    </motion.div>
>>>>>>> 012d777 (updated to v1)
  );

  if (!href) return card;

  return (
    <Link
      href={href}
<<<<<<< HEAD
      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
=======
      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2"
>>>>>>> 012d777 (updated to v1)
    >
      {card}
    </Link>
  );
}
