"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesPage() {
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
              Services
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Core Services
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="space-y-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <motion.div
                key={cat.id}
                id={cat.slug}
                variants={itemVariants}
                className="scroll-mt-24 rounded-2xl border border-[#0c0f14]/10 bg-gray-50/50 p-8 sm:p-10"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0c0f14]">
                      {cat.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{cat.shortDescription}</p>
                    <p className="mt-4 text-sm font-semibold text-[#0c0f14]">
                      Includes:
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-gray-600">
                      {cat.services.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href={`/services/${cat.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#d4af37] hover:underline"
                      >
                        View full service details
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <Button href={`/services/${cat.slug}`} variant="secondary">
                    Learn more
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">Ready to get started?</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="/book-call">Book a Free Strategy Call</Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
