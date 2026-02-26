"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const caseStudies = [
  {
    id: "1",
    title: "Real Estate Brand & Web Overhaul",
    excerpt:
      "How we helped a regional real estate firm unify their brand and launch a high-converting website with lead capture.",
    category: "Branding + Web",
    href: "/case-studies/1",
  },
  {
    id: "2",
    title: "AI-Powered Content & SEO for SMB",
    excerpt:
      "Scaling content production and search visibility with AI content and SEO automation for a B2B services company.",
    category: "AI Marketing",
    href: "/case-studies/2",
  },
  {
    id: "3",
    title: "Business Automation & CRM Pipeline",
    excerpt:
      "End-to-end automation for lead qualification, onboarding, and sales pipeline for a growing startup.",
    category: "Business Automation",
    href: "/case-studies/3",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-[#0c0f14] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              Case Studies
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Real Results. Real Business Impact.
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Client overview • Business challenges • Solution implemented •
              Automation deployed • Results achieved (leads, revenue, time
              saved) • Client testimonial
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <motion.article
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-[#0c0f14]/10 bg-gray-50/50 p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  {cs.category}
                </p>
                <h2 className="mt-2 text-lg font-bold text-[#0c0f14]">
                  {cs.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{cs.excerpt}</p>
                <Link
                  href={cs.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#d4af37] hover:underline"
                >
                  Read case study
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-gray-500">
            More case studies coming soon. CMS-ready structure for future
            content.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/book-call">Start Your Growth Journey</Button>
          </div>
        </div>
      </section>
    </>
  );
}
