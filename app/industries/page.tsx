'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

const smbSectors = [
  'Retail & E-commerce',
  'Fashion & Apparel',
  'Food & Restaurants',
  'Healthcare & Clinics',
  'Real Estate & Construction',
  'Education & Training',
  'Finance & Insurance',
  'Travel & Hospitality',
  'Beauty & Wellness',
  'Automobile & Dealerships',
  'Manufacturing & Wholesale',
  'Professional Services',
  'Media & Entertainment',
  'Logistics & Transportation',
  'Home Services',
  'Technology & Startups',
  'Events & Weddings',
  'Fitness & Sports',
  'NGOs & Nonprofits',
  'Local Businesses & SMEs',
];

const buildingIconPath =
  'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4';

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
              Empowering SMBs Across Industries to Scale Smarter
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl border border-[#0c0f14]/10 bg-gray-50/80 shadow-sm"
          >
            <div className="border-b border-[#0c0f14]/10 bg-white/60 px-6 py-8 sm:px-8 sm:py-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#d4af37]/40 bg-[#d4af37]/10">
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
                      d={buildingIconPath}
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold tracking-tight text-[#0c0f14]">
                    Small & Medium Businesses
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
                    SMBs across sectors use SynkraAI for branding, web presence,
                    AI marketing, and automation—without enterprise budgets.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                Sectors we serve
              </p>
              <ul
                className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                aria-label="Small and medium business sectors"
              >
                {smbSectors.map((sector) => (
                  <li
                    key={sector}
                    className="flex items-center gap-3 rounded-lg border border-[#0c0f14]/8 bg-white px-4 py-3 text-sm text-[#0c0f14] shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]"
                      aria-hidden
                    />
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <div className="mt-16 text-center">
            <Button href="/book-call">Book a Strategy Call</Button>
          </div>
        </div>
      </section>
    </>
  );
}
