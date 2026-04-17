import Link from "next/link";

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
    { href: "/industries", label: "Industries" },
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
          <div className="max-w-sm">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Synkra<span className="text-[#d4af37]">AI</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              One‑Stop AI & Digital Growth Partner
            </p>

            <div className="mt-4 space-y-5 border-t border-white/10 pt-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Email
                </p>
                <a
                  href="mailto:contact@synkraai.in"
                  className="mt-1 inline-block text-sm text-[#d4af37] hover:underline"
                >
                  contact@synkraai.in
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Website
                </p>
                <a
                  href="https://www.synkraai.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-[#d4af37] hover:underline"
                >
                  www.synkraai.in
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  Office
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  #B-1, 3rd Floor, Padma Manohar Arcade,
                  <br />
                  Madhura Nagar, Hyderabad — 500038
                </p>
              </div>
            </div>
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
        </div>
      </div>
    </footer>
  );
}
