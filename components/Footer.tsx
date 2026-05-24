import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/#services", label: "AI Product Videos" },
    { href: "/#services", label: "AI Reels" },
    { href: "/#services", label: "AI Ads" },
    { href: "/#services", label: "AI Mascots" },
    { href: "/#services", label: "AI UGC Videos" },
  ],
  QuickLinks: [
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/book-call", label: "Book Consultation" },
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
    <footer className="border-t border-white/10 bg-[#0B0B0F] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Synkra
              <span className="bg-gradient-to-r from-violet-300 to-cyan-200 bg-clip-text text-transparent">
                AI
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              AI-powered video marketing for modern brands. Cinematic ads,
              reels, product videos, mascots, and promotional creatives built
              for fast online growth.
            </p>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:contact@synkraai.in"
                  className="mt-1 inline-block text-sm text-cyan-200 hover:underline"
                >
                  contact@synkraai.in
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Office
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Madhura Nagar, Hyderabad - 500038
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.QuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Stay in the Loop
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Get AI video ideas, campaign angles, and launch inspiration for
              modern brands.
            </p>
            <form className="mt-5 flex overflow-hidden rounded-full border border-white/10 bg-white/[0.06]">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
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
                  className="text-sm text-slate-400 hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">SynkraAI</span>. All
            Rights Reserved.
          </p>
          <p className="text-sm text-slate-500">
            Premium AI video agency in Hyderabad.
          </p>
        </div>
      </div>
    </footer>
  );
}
