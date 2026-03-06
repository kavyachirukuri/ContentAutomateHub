"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#0c0f14] py-16 sm:py-24">
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
              className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              Contact
            </motion.p>
            <motion.h1
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s Build Your AI Growth Engine
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-400"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              Book a free strategy session and discover how automation can
              unlock your next stage of growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl">
            <motion.div
              className="rounded-2xl border border-[#0c0f14]/10 bg-gray-50/50 p-8 shadow-sm sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0c0f14]/10 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-[#0c0f14]">
              Other Ways to Reach Us
            </h2>
            <p className="mt-4 text-gray-600">
              Use the WhatsApp button on this site for quick chat, or email{" "}
              <a
                href="mailto:contact@synkraai.in"
                className="text-[#d4af37] hover:underline"
              >
                contact@synkraai.in
              </a>{" "}
              for detailed inquiries.
            </p>
            <p className="mt-4 text-gray-600">
              <strong className="text-[#0c0f14]">Office:</strong> #B-1, 3rd
              Floor, Padma Manohar Arcade, Madhura Nagar, Hyderabad - 500038
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
