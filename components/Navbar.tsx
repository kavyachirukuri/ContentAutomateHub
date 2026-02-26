"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
=======
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> 012d777 (updated to v1)
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/", label: "Home" },
<<<<<<< HEAD
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
=======
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/branding", label: "Branding" },
      { href: "/services/web-mobile", label: "Web & Mobile" },
      { href: "/services/ai-marketing", label: "AI Marketing" },
      { href: "/services/content-studio", label: "Content Studio" },
      { href: "/services/business-automation", label: "Business Automation" },
    ],
  },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/automation-solutions", label: "AI Automation" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/book-call", label: "Book a Call" },
>>>>>>> 012d777 (updated to v1)
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() || "/";
<<<<<<< HEAD

  return (
    <header className="border-b border-stone-200 bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-950"
        >
          SynkraAI
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navItems.map((item) => {
=======
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0f14]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white"
            onClick={() => setMobileOpen(false)}
          >
            Synkra<span className="text-[#d4af37]">AI</span>
          </Link>
        </motion.div>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              if ("children" in item && item.children) {
                const active = item.children.some((c) =>
                  isActivePath(pathname, c.href)
                );
                return (
                  <li key={item.href} className="relative group">
                    <span
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white cursor-default",
                        active && "text-[#d4af37]"
                      )}
                    >
                      {item.label}
                    </span>
                    <ul className="absolute left-0 top-full hidden min-w-[200px] rounded-lg border border-white/10 bg-[#141922] py-2 shadow-xl group-hover:block">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#d4af37]",
                              isActivePath(pathname, child.href) &&
                                "text-[#d4af37]"
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
>>>>>>> 012d777 (updated to v1)
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
<<<<<<< HEAD
                      "text-sm font-medium text-slate-600 motion-safe:transition-colors motion-safe:duration-200 hover:text-emerald-900",
                      active &&
                        "text-emerald-900 underline decoration-emerald-300 underline-offset-8"
=======
                      "px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white",
                      active && "text-[#d4af37]"
>>>>>>> 012d777 (updated to v1)
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
<<<<<<< HEAD
      </div>
    </header>
=======

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
          className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
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
    </motion.header>
>>>>>>> 012d777 (updated to v1)
  );
}
