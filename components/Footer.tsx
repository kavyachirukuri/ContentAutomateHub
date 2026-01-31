import Link from "next/link";

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
        </div>
      </div>
    </footer>
  );
}
