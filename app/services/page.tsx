'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { SERVICE_CATEGORIES } from '@/lib/services-data';

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
      <section className="bg-gray-50 py-16 sm:py-24 dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-[#d4af37]">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0c0f14] sm:text-5xl dark:text-white">
              Everything Your Business Needs to Grow
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              One team, five growth levers — branding, web &amp; app
              development, digital marketing, AI content, and automation —
              all powered by AI, all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 dark:bg-[#101018]">
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
                className="scroll-mt-24 rounded-2xl border border-[#0c0f14]/10 bg-gray-50/50 p-8 sm:p-10 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <h2 className="text-3xl font-bold tracking-tight text-[#0c0f14] dark:text-white">
                  {cat.detailTitle}
                </h2>
                <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
                  {cat.detailSubhead}
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#0c0f14] dark:text-white">
                      What&apos;s Included
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {cat.services.map((s, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-[#0c0f14]/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.06]">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-[#d4af37]">
                      Why It Matters
                    </p>
                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-slate-400">
                      {cat.whyItMatters}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#0c0f14] dark:text-white">
                    FAQ
                  </p>
                  <div className="mt-4 space-y-3">
                    {cat.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group rounded-xl border border-[#0c0f14]/10 bg-white p-4 open:border-[#d4af37]/50 dark:border-white/10 dark:bg-white/[0.06]"
                      >
                        <summary className="cursor-pointer list-none text-sm font-bold text-[#0c0f14] dark:text-white">
                          {faq.question}
                        </summary>
                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/book-call">Book a Free Strategy Call</Button>
                  <Button href="/contact" variant="secondary">
                    Ask About {cat.title}
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
            <p className="text-gray-600 dark:text-slate-400">Ready to get started?</p>
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
