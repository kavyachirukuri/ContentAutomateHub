"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export default function BookCallPage() {
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
              Strategy Call
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Book a Free Strategy Call
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Schedule a free consultation to discuss your goals. We&apos;ll
              explore how SynkraAI can help with branding, web, AI marketing,
              content, and automation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl">
            <motion.div
              className="rounded-2xl border border-[#0c0f14]/10 bg-gray-50 p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-[#0c0f14]">
                Appointment Booking
              </h2>
              <p className="mt-2 text-gray-600">
                Choose a time that works for you. Our team will send a
                confirmation and calendar invite.
              </p>
              <div className="mt-8 rounded-lg border-2 border-dashed border-[#0c0f14]/20 bg-white p-12 text-center">
                <p className="text-sm font-medium text-gray-500">
                  Calendar integration placeholder
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Connect your preferred booking tool (Calendly, Cal.com, etc.)
                  or use the contact form to request a call.
                </p>
                <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Button href="/contact">Book My Strategy Call via Contact</Button>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#d4af37] hover:underline"
                  >
                    Open Calendly →
                  </a>
                </div>
              </div>
            </motion.div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Prefer to chat first? Use the WhatsApp button or{" "}
              <a href="/contact" className="font-medium text-[#d4af37] hover:underline">
                send us a message
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
