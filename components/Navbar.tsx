"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

type NavChild = { href: string; label: string };
type NavItem = { href: string; label: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
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
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-5">
        <Link
          href="/"
          className="shrink-0 self-start text-2xl font-bold tracking-tight text-[#0c0f14] sm:self-center sm:text-[1.65rem]"
          aria-label="SynkraAI Home"
        >
          Synkra<span className="text-[#d4af37]">AI</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-sm font-medium text-slate-600 motion-safe:transition-colors motion-safe:duration-200 hover:text-[#0c0f14]",
                      active &&
                        "text-[#0c0f14] font-semibold underline decoration-[#d4af37] underline-offset-8"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/book-call"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#d4af37] px-4 text-sm font-semibold text-[#0c0f14] hover:bg-[#e5c76b]"
          >
            Book a Free Strategy Call
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-800 hover:bg-slate-100 md:hidden"
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

      <AnimatePresence>
      {mobileOpen && (
        <motion.div
          className="border-t border-white/10 bg-[#0c0f14] px-4 py-4 md:hidden"
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
                    <span className="block px-3 py-2 text-sm font-medium text-gray-400">
                      {item.label}
                    </span>
                    <ul className="ml-4 space-y-1 border-l border-white/10 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block py-2 text-sm text-gray-300",
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
                      "block px-3 py-2 text-sm font-medium text-gray-300",
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
              className="block w-full rounded-md bg-[#d4af37] py-3 text-center text-sm font-semibold text-[#0c0f14] hover:bg-[#e5c76b]"
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
