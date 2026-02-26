"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
<<<<<<< HEAD

const services = [
  {
    title: "AI Content Creation",
    description:
      "Transform your content strategy with AI-powered writing, image generation, and multimedia content that engages your audience and drives results.",
    href: "/services#ai-content",
  },
  {
    title: "Automation Solutions...",
    description:
      "Streamline your workflows with intelligent automation that reduces manual tasks, increases efficiency, and scales with your business needs.",
    href: "/services#automation",
  },
  {
    title: "SaaS & Web Applications",
    description:
      "Build powerful, scalable SaaS platforms and web applications tailored to your business requirements with modern tech stacks and best practices.",
    href: "/services#saas",
  },
  {
    title: "Website Development",
    description:
      "Create stunning, responsive websites that convert visitors into customers with optimized performance, SEO, and user experience.",
    href: "/services#websites",
  },
];
=======
import { SERVICE_CATEGORIES } from "@/lib/services-data";
>>>>>>> 012d777 (updated to v1)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
<<<<<<< HEAD
    transition: {
      staggerChildren: 0.1,
    },
=======
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
>>>>>>> 012d777 (updated to v1)
  },
};

const itemVariants = {
<<<<<<< HEAD
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-32">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Transform Your Business with
            <span className="text-emerald-700"> AI & Technology</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl"
            variants={itemVariants}
          >
            We deliver cutting-edge solutions in AI content creation,
            automation, SaaS development, and web applications to help your
            business thrive in the digital age.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Button href="/contact" size="md">
              Get Started
            </Button>
            <Button href="/services" variant="secondary" size="md">
              View Services
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="border-y border-stone-200 bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
=======
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
              down when operations depend on human effort instead of
              intelligent automation.
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
              identity and websites to AI‑powered marketing and business
              process automation — all built to work together seamlessly.
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
>>>>>>> 012d777 (updated to v1)
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
<<<<<<< HEAD
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive solutions to elevate your digital presence and
              streamline your operations
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
=======
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
>>>>>>> 012d777 (updated to v1)
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
<<<<<<< HEAD
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
=======
            {SERVICE_CATEGORIES.map((cat) => (
              <motion.div key={cat.id} variants={itemVariants}>
                <ServiceCard
                  title={cat.title}
                  description={cat.shortDescription}
                  href={`/services/${cat.slug}`}
>>>>>>> 012d777 (updated to v1)
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 text-center"
<<<<<<< HEAD
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button href="/services" variant="secondary">
              Explore All Services
=======
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button href="/services" variant="secondary">
              Explore Our Services
>>>>>>> 012d777 (updated to v1)
            </Button>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We combine expertise, innovation, and dedication to deliver results
            that exceed expectations
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
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              Expert Team
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Skilled professionals with years of experience in AI, automation,
              and web development
            </p>
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
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              Fast Delivery
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Agile development process ensuring quick turnaround times without
              compromising quality
            </p>
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
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              Quality Assured
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Rigorous testing and quality assurance processes to deliver
              reliable, scalable solutions
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-stone-200 bg-emerald-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Let's discuss how we can help transform your business with our
              innovative solutions
            </p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button href="/contact" size="md">
                Contact Us Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
=======
      {/* Trust Section */}
      <section className="bg-[#0c0f14] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <motion.p
            className="text-xl font-bold tracking-tight text-white sm:text-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            End‑to‑end solutions. Real automation. Predictable growth.
          </motion.p>
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
>>>>>>> 012d777 (updated to v1)
  );
}
