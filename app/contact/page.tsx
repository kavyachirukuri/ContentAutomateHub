"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[#0c0f14]/10 bg-gray-50 py-16 sm:py-24 dark:border-white/10 dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-wider text-[#b8962e] dark:text-[#d4af37]"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              Contact
            </motion.p>
            <motion.h1
              className="mt-4 text-4xl font-bold tracking-tight text-[#0c0f14] sm:text-5xl dark:text-white"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s Talk About Your Growth
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-600 dark:text-gray-400"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              Fill out the form or book a call directly — we typically
              respond within one business day.
            </motion.p>
            <motion.div
              className="mt-8"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Button href="/book-call" size="lg">
                Book a Call Directly
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 dark:bg-[#101018]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl">
            <motion.div
              className="rounded-2xl border border-[#0c0f14]/10 bg-gray-50/50 p-8 shadow-sm sm:p-10 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0c0f14]/10 bg-gray-50 py-16 dark:border-white/10 dark:bg-[#0B0B0F]">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-[#0c0f14] dark:text-white">
              Other Ways to Reach Us
            </h2>
            <p className="mt-4 text-gray-600 dark:text-slate-400">
              Use the WhatsApp button on this site for quick chat, or email{" "}
              <a
                href="mailto:contact@synkraai.in"
                className="text-[#b8962e] hover:underline dark:text-[#d4af37]"
              >
                contact@synkraai.in
              </a>{" "}
              for detailed inquiries.
            </p>
            <p className="mt-4 text-gray-600 dark:text-slate-400">
              <strong className="text-[#0c0f14] dark:text-white">Office:</strong> #B-1, 3rd
              Floor, Padma Manohar Arcade, Madhura Nagar, Hyderabad - 500038
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
