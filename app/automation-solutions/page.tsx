"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { SERVICE_CATEGORIES } from "@/lib/services-data";

const automationCategory = SERVICE_CATEGORIES.find(
  (c) => c.id === "business-automation"
);

export default function AutomationSolutionsPage() {
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
              AI Automation Solutions
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              AI Automation Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              From WhatsApp and lead qualification to onboarding, scheduling,
              invoicing, and CRM—automate your workflows end to end.
            </p>
          </motion.div>
        </div>
      </section>

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
                What We Automate
              </h2>
              <p className="mt-4 text-gray-600">
                Our AI business automation solutions help SMBs and real estate
                businesses save time, reduce errors, and scale operations
                without scaling headcount.
              </p>
              {automationCategory && (
                <ul className="mt-6 space-y-2 text-gray-600">
                  {automationCategory.services.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#d4af37]" />
                      {s}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact">Get Started</Button>
                <Button href="/services/business-automation" variant="secondary">
                  Full service details
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl border border-[#0c0f14]/10 bg-gray-50 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-[#0c0f14]">
                Integration & CRM
              </h3>
              <p className="mt-2 text-gray-600">
                We integrate with your existing tools via API and webhooks, and
                can connect to HubSpot, Zoho, or your preferred CRM for
                lead capture and pipeline automation.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Technical stack: Node.js / Python backend, API + webhooks, with
                optional headless CMS for content and case studies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0c0f14]/10 bg-[#0c0f14] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-xl font-bold text-white">
            Ready to automate your workflows?
          </h2>
          <p className="mt-2 text-gray-400">
            Book a strategy call to discuss your automation needs.
          </p>
          <div className="mt-6">
            <Button href="/book-call" size="lg">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
