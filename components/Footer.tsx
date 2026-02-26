import Link from "next/link";

<<<<<<< HEAD
export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-900">SynkraAI</span>. All
          rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/services"
            className="text-sm text-slate-600 motion-safe:transition-colors motion-safe:duration-200 hover:text-emerald-900"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm text-slate-600 motion-safe:transition-colors motion-safe:duration-200 hover:text-emerald-900"
          >
            Contact
          </Link>
=======
const footerLinks = {
  Services: [
    { href: "/services/branding", label: "Branding" },
    { href: "/services/web-mobile", label: "Web & Mobile Development" },
    { href: "/services/ai-marketing", label: "AI Marketing" },
    { href: "/services/content-studio", label: "AI Content" },
    { href: "/services/business-automation", label: "Automation" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/industries", label: "Industries" },
    { href: "/blog", label: "Blog" },
  ],
  Connect: [
    { href: "/contact", label: "Contact" },
    { href: "/book-call", label: "Book a Strategy Call" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0f14] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              Synkra<span className="text-[#d4af37]">AI</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              One‑Stop AI & Digital Growth Partner
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Branding | Web & Mobile Development | AI Marketing | AI Content |
              Automation
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Email:{" "}
              <a
                href="mailto:contact@synkraai.in"
                className="text-[#d4af37] hover:underline"
              >
                contact@synkraai.in
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Website:{" "}
              <a
                href="https://www.synkraai.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline"
              >
                www.synkraai.in
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.Connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">SynkraAI</span>. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-[#d4af37]"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-[#d4af37]"
            >
              Terms
            </Link>
          </div>
>>>>>>> 012d777 (updated to v1)
        </div>
      </div>
    </footer>
  );
}
