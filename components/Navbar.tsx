"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavChild = { href: string; label: string };
type NavItem = { href: string; label: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0c0f14]/10 bg-white/80 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#0B0B0F]/80 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-[#0c0f14] sm:text-[1.65rem] dark:text-white"
          aria-label="SynkraAI Home"
        >
          Synkra<span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-300 dark:to-cyan-200">AI</span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-sm font-medium text-[#0c0f14]/70 motion-safe:transition-colors motion-safe:duration-200 hover:text-[#0c0f14] dark:text-slate-300 dark:hover:text-cyan-200",
                      active &&
                        "text-[#0c0f14] font-semibold underline decoration-[#d4af37] underline-offset-8 dark:text-cyan-200 dark:decoration-cyan-300"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/book-call"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-cyan-300 px-4 text-sm font-semibold text-white shadow-lg shadow-cyan-950/10 hover:from-violet-400 hover:to-cyan-200 dark:shadow-cyan-950/30"
          >
            Book a Free Strategy Call
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-[#0c0f14] hover:bg-[#0c0f14]/5 dark:text-white dark:hover:bg-white/10"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
      {mobileOpen && (
        <motion.div
          className="border-t border-[#0c0f14]/10 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-[#0c0f14]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
        >
          <ul className="space-y-1">
            {navItems.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <li key={item.href}>
                    <span className="block px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {item.label}
                    </span>
                    <ul className="ml-4 space-y-1 border-l border-[#0c0f14]/10 pl-4 dark:border-white/10">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block py-2 text-sm text-gray-600 dark:text-gray-300",
                              isActivePath(pathname, child.href) &&
                                "text-[#d4af37]"
                            )}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300",
                      isActivePath(pathname, item.href) && "text-[#d4af37]"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4">
            <Link
              href="/book-call"
              className="block w-full rounded-md bg-gradient-to-r from-violet-500 to-cyan-300 py-3 text-center text-sm font-semibold text-white hover:from-violet-400 hover:to-cyan-200"
              onClick={() => setMobileOpen(false)}
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
