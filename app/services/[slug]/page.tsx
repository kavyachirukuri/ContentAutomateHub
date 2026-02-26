"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import {
  SERVICE_CATEGORIES,
  PROCESS_STEPS,
  OUTCOME_POINTS,
} from "@/lib/services-data";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const category = SERVICE_CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return (
      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-2xl font-bold text-[#0c0f14]">Service not found</h1>
          <p className="mt-2 text-gray-600">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services" className="mt-6 inline-block font-medium text-[#d4af37] hover:underline">
            ← Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-[#0c0f14] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="text-sm font-medium text-[#d4af37] hover:underline"
            >
              ← All Services
            </Link>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              {category.title}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {category.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-400">
              {category.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#0c0f14]">
              The Problem
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Manual workflows, disconnected tools, and outdated systems lead to
              missed opportunities and slow growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Solution */}
      <section className="border-t border-[#0c0f14]/10 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#0c0f14]">
              Our Solution
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We design AI‑powered systems tailored to your business goals,
              ensuring every process works together seamlessly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer (Includes) */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#0c0f14]">
                What We Offer
              </h2>
              <ul className="mt-6 space-y-3">
                {category.services.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="rounded-xl border border-[#0c0f14]/10 bg-gray-50 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-[#0c0f14]">
                Our Process
              </h3>
              <p className="mt-4 flex flex-wrap gap-2 text-sm font-medium text-gray-600">
                {PROCESS_STEPS.map((step, i) => (
                  <span key={step}>
                    {i > 0 && <span className="text-[#d4af37]"> → </span>}
                    {step}
                  </span>
                ))}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: The Outcome */}
      <section className="border-t border-[#0c0f14]/10 bg-[#0c0f14] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white">
              The Outcome
            </h2>
            <ul className="mt-6 space-y-3 text-gray-300">
              {OUTCOME_POINTS.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/contact" size="lg">
                Get Your Custom Strategy Plan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
