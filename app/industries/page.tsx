"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const industries = [
  {
    title: "Small & Medium Businesses",
    description:
      "SMBs across sectors use Synchro AI for branding, web presence, AI marketing, and automation—without enterprise budgets.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Real Estate (Primary Niche)",
    description:
      "Agents, brokers, and property firms get brand identity, listings sites, AI content, and lead automation tailored to real estate.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m10-11l2 2m-2-2V8a1 1 0 00-1-1h-2",
  },
  {
    title: "Founders & Startups",
    description:
      "From naming and logo to web, content, and automation—we help startups launch and scale their digital presence.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Marketing Teams",
    description:
      "Marketing heads get AEO, GVO, SEO automation, AI content, and funnel automation to hit targets with less manual work.",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.12-6.813a1.76 1.76 0 00-3.417.593v.008c0 1.053.816 1.918 1.864 1.99.958.074 1.846-.5 1.846-1.4V5.882a1.76 1.76 0 013.417-.592l2.12 6.813a1.76 1.76 0 003.417-.593v-.008A1.76 1.76 0 0013 5.882z",
  },
  {
    title: "Operations Managers",
    description:
      "Streamline workflows with WhatsApp automation, onboarding, invoicing, proposals, and CRM pipeline automation.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
];

export default function IndustriesPage() {
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
              Industries We Serve
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              We focus on SMBs and real estate, and work with founders,
              marketing teams, and operations leaders across sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-[#0c0f14]/10 bg-gray-50/50 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#d4af37]/40 bg-[#d4af37]/10">
                  <svg
                    className="h-6 w-6 text-[#d4af37]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={ind.icon}
                    />
                  </svg>
                </div>
                <h2 className="mt-4 text-lg font-bold text-[#0c0f14]">
                  {ind.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{ind.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/book-call">Book a Strategy Call</Button>
          </div>
        </div>
      </section>
    </>
  );
}
