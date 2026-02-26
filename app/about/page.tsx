"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0c0f14] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building Intelligent Digital Infrastructure for Modern Businesses
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-8 text-gray-600">
              SynkraAI is a full‑stack AI and digital transformation company
              focused on helping small and medium businesses scale through
              intelligent systems.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We don&apos;t just deliver services — we build long‑term growth
              infrastructure by combining branding, technology, marketing,
              content, and automation into one unified ecosystem.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <motion.div
              className="rounded-xl border border-[#0c0f14]/10 bg-gray-50 p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-[#0c0f14]">Mission</h2>
              <p className="mt-4 text-gray-600">
                To eliminate manual bottlenecks and help businesses operate
                faster, smarter, and more profitably using AI‑driven systems.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-[#0c0f14]/10 bg-gray-50 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-[#0c0f14]">Vision</h2>
              <p className="mt-4 text-gray-600">
                To become the most trusted AI infrastructure partner for SMBs
                globally.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>

      <section className="bg-[#0c0f14] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-gray-400">
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
