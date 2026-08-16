import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

const footerLinks = {
  Services: SERVICE_CATEGORIES.map((cat) => ({
    href: `/services#${cat.slug}`,
    label: cat.title,
  })),
  Company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/#work", label: "Work" },
  ],
  QuickLinks: [
    { href: "/book-call", label: "Book a Free Strategy Call" },
    { href: "/contact", label: "Contact" },
  ],
  Social: [
    { href: "https://www.instagram.com/", label: "Instagram" },
    { href: "https://www.facebook.com/", label: "Facebook" },
    { href: "https://www.linkedin.com/", label: "LinkedIn" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#0c0f14]/10 bg-white text-[#0c0f14] transition-colors dark:border-white/10 dark:bg-[#0B0B0F] dark:text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Synkra
              <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-300 dark:to-cyan-200">
                AI
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
              Your brand, built, marketed, and automated — with AI. Branding,
              web &amp; app development, digital marketing, AI content &amp;
              video, and automation under one roof.
            </p>

            <div className="mt-6 space-y-4 border-t border-[#0c0f14]/10 pt-5 dark:border-white/10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:contact@synkraai.in"
                  className="mt-1 inline-block text-sm text-[#b8962e] hover:underline dark:text-cyan-200"
                >
                  contact@synkraai.in
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-500">
                  Office
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                  Madhura Nagar, Hyderabad - 500038
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-cyan-200">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-[#b8962e] dark:text-slate-400 dark:hover:text-cyan-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-cyan-200">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-[#b8962e] dark:text-slate-400 dark:hover:text-cyan-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-cyan-200">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.QuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-[#b8962e] dark:text-slate-400 dark:hover:text-cyan-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-cyan-200">
              Get AI Marketing Tips Monthly
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-slate-400">
              Growth ideas, campaign angles, and automation playbooks for
              ambitious SMBs — straight to your inbox.
            </p>
            <form className="mt-5 flex overflow-hidden rounded-full border border-[#0c0f14]/15 bg-[#0c0f14]/[0.03] dark:border-white/10 dark:bg-white/[0.06]">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#0c0f14] placeholder:text-gray-500 focus:outline-none dark:text-white dark:placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-violet-500 to-cyan-300 px-4 text-sm font-bold text-white"
              >
                Join
              </button>
            </form>
            <div className="mt-5 flex flex-wrap gap-4">
              {footerLinks.Social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#b8962e] dark:text-slate-400 dark:hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#0c0f14]/10 pt-8 sm:flex-row dark:border-white/10">
          <p className="text-sm text-gray-500 dark:text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#0c0f14] dark:text-white">SynkraAI</span>. All
            Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-slate-500">
            The AI-first growth partner for ambitious SMBs.
          </p>
        </div>
      </div>
    </footer>
  );
}
