"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const SERVICES_SNAPSHOT = [
  "Branding",
  "Web & Mobile Development",
  "AI Digital Marketing",
  "AI Content Studio",
  "AI Business Automation",
];

const VALUE_POINTS = [
  "One-stop AI & digital partner",
  "Automation-first approach",
  "Scalable systems for SMBs",
  "Measurable ROI",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c0f14] text-white">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#d4af37]/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[80px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-36">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Invisible Intelligence.{" "}
              <motion.span
                className="inline-block text-[#d4af37]"
                variants={itemVariants}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Visible Business Growth.
              </motion.span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl"
            >
              SynkraAI helps businesses build strong brands, powerful digital
              platforms, and AI‑driven automation systems that scale growth
              without increasing manual effort.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button href="/book-call" size="lg">
                Book a Free Strategy Call
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#0c0f14] sm:text-3xl">
              The Problem
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Most businesses struggle with scattered branding, low‑quality
              leads, manual follow‑ups, and disconnected systems. Growth slows
              down when operations depend on human effort instead of intelligent
              automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative overflow-hidden bg-[#0c0f14] py-16 sm:py-20">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.08)_0%,transparent_50%)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              The Solution
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              At SynkraAI, we design complete digital ecosystems — from brand
              identity and websites to AI‑powered marketing and business process
              automation — all built to work together seamlessly.
            </p>
            <ul className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-medium text-[#d4af37]">
              {VALUE_POINTS.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-[#d4af37]"
                    whileHover={{ scale: 1.4 }}
                    transition={{ duration: 0.2 }}
                  />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#0c0f14] sm:text-4xl">
              Services Snapshot
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg text-gray-600">
              {SERVICES_SNAPSHOT.map((s, i) => (
                <motion.span key={s}>
                  {i > 0 && <span className="text-[#d4af37]"> | </span>}
                  <Link
                    href={`/services/${SERVICE_CATEGORIES[i]?.slug ?? "#"}`}
                    className="hover:text-[#d4af37] hover:underline"
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      whileHover={{ y: -2 }}
                    >
                      {s}
                    </motion.span>
                  </Link>
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <motion.div key={cat.id} variants={itemVariants}>
                <ServiceCard
                  title={cat.title}
                  description={cat.shortDescription}
                  href={`/services/${cat.slug}`}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust & Social Proof – PRD: Trust Signals & Social Proof */}
      <section className="bg-[#0c0f14] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              Trusted by SMBs & Real Estate
            </h2>
            <p className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
              End‑to‑end solutions. Real automation. Predictable growth.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.blockquote
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-6 text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="text-gray-300">
                  &ldquo;SynkraAI delivered our brand identity and web presence in one go. Lead quality improved from day one.&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-[#d4af37]">
                  — SMB Owner, Real Estate
                </footer>
              </motion.blockquote>
              <motion.blockquote
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-6 text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="text-gray-300">
                  &ldquo;Automation for onboarding and invoices cut our admin time by 60%. Worth every penny.&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-[#d4af37]">
                  — Operations Manager
                </footer>
              </motion.blockquote>
              <motion.blockquote
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-6 text-left"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-gray-300">
                  &ldquo;AEO and AI content gave us visibility we never had. Now we rank for terms that matter.&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-[#d4af37]">
                  — Marketing Head, B2B
                </footer>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl rounded-2xl border-2 border-[#d4af37]/30 bg-[#0c0f14] px-6 py-12 text-center sm:px-12 sm:py-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              boxShadow: "0 0 40px rgba(212, 175, 55, 0.15)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to scale smarter?
            </h2>
            <p className="mt-4 text-gray-400">
              Book a free strategy session and see how AI can transform your
              business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/book-call" size="lg">
                Book a Free Strategy Call
              </Button>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[#d4af37] hover:underline"
                >
                  Or send a message →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
