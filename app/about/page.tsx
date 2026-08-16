'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

const differentiators = [
  {
    title: 'Full-Stack Under One Roof',
    description:
      "No juggling five vendors — a designer, a dev, a marketer, a video editor, and an automation guy. One team runs it all.",
  },
  {
    title: 'AI Baked Into Delivery',
    description:
      'AI isn’t bolted on — it’s built into how we work, which means faster turnaround and lower cost without sacrificing quality.',
  },
  {
    title: 'Built for SMB Budgets & Speed',
    description:
      'Not enterprise-agency timelines or enterprise-agency pricing. We move at the pace ambitious small and medium businesses need.',
  },
  {
    title: 'One Dashboard, One Roadmap',
    description:
      'One point of contact and one growth roadmap across brand, web, marketing, content, and automation — no dropped threads.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gray-50 py-16 sm:py-24 dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-[#d4af37]">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0c0f14] sm:text-5xl dark:text-white">
              We&apos;re Not Just an Agency. We&apos;re Your Growth Team.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 dark:bg-[#101018]">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-8 text-gray-600 dark:text-slate-300">
              Most small businesses juggle five different vendors to get a
              brand built, a website live, marketing running, content made,
              and admin automated. We built SynkraAI to be all five — one
              team, one roadmap, powered by AI so we can move at startup
              speed without startup prices.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
              We combine creativity, strategy, and artificial intelligence to
              build intelligent growth systems for ambitious brands — designed
              to work 24/7, so your business grows even when you don&apos;t.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
              We don&apos;t just build tools. We build scalable digital
              ecosystems.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <motion.div
              className="rounded-xl border border-[#0c0f14]/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-white/[0.06]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-[#0c0f14] dark:text-white">Mission</h2>
              <p className="mt-4 text-gray-600 dark:text-slate-400">
                To help modern businesses grow smarter through AI-driven
                branding, web experiences, marketing, content, and automation
                that deliver measurable results.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-[#0c0f14]/10 bg-gray-50 p-8 dark:border-white/10 dark:bg-white/[0.06]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-[#0c0f14] dark:text-white">Vision</h2>
              <p className="mt-4 text-gray-600 dark:text-slate-400">
                To become the most trusted AI-powered growth partner for
                ambitious SMBs everywhere.
              </p>
            </motion.div>
          </div>

          <div className="mt-16">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-[#d4af37]">
              Our Approach
            </p>
            <h2 className="mt-2 text-center text-2xl font-bold text-[#0c0f14] sm:text-3xl dark:text-white">
              What Makes Us Different
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {differentiators.map((item) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-[#0c0f14]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <h3 className="text-base font-bold text-[#0c0f14] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-[#0c0f14] sm:text-3xl dark:text-white">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Book a free strategy call and let&apos;s discuss your goals.
          </p>
          <div className="mt-8">
            <Button href="/book-call" size="lg">
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
