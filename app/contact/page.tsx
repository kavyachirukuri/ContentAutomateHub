"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

<<<<<<< HEAD
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Ready to transform your business? Let's discuss how we can help
              you achieve your goals.
            </p>
=======
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
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
            >
              Contact
            </motion.p>
            <motion.h1
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              Let&apos;s Build Your AI Growth Engine
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-gray-400"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              Book a free strategy session and discover how automation can
              unlock your next stage of growth.
            </motion.p>
>>>>>>> 012d777 (updated to v1)
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Form Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="border-t border-stone-200 bg-stone-50 py-12 sm:py-16">
=======
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
>>>>>>> 012d777 (updated to v1)
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Other Ways to Reach Us
            </h2>
            <p className="mt-4 text-slate-600">
              Prefer a different method? We're here to help.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-8 sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants}>
              <motion.div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  className="h-6 w-6 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Email
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Send us an email and we'll respond within 24 hours
              </p>
              <a
                href="mailto:padmadesireddy36@gmail.com"
                className="mt-2 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                padmadesireddy36@gmail.com
              </a>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <motion.div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  className="h-6 w-6 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Phone
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Call us during business hours for immediate assistance
              </p>
              <a
                href="tel:+918498950787"
                className="mt-2 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                +91 8498950787
              </a>
            </motion.div>
            <motion.div className="text-center" variants={itemVariants}>
              <motion.div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg
                  className="h-6 w-6 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Response Time
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We typically respond within 24 hours of your inquiry
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
=======
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold text-[#0c0f14]">
              Other Ways to Reach Us
            </h2>
            <p className="mt-4 text-gray-600">
              Use the WhatsApp button on this site for quick chat, or email{" "}
              <a href="mailto:contact@synkraai.in" className="text-[#d4af37] hover:underline">
                contact@synkraai.in
              </a>{" "}
              for detailed inquiries.
            </p>
          </motion.div>
        </div>
      </section>
    </>
>>>>>>> 012d777 (updated to v1)
  );
}
