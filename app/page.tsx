"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "AI Content Creation",
    description:
      "Transform your content strategy with AI-powered writing, image generation, and multimedia content that engages your audience and drives results.",
    href: "/services#ai-content",
  },
  {
    title: "Automation Solutions",
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
            We deliver cutting-edge solutions in AI content creation, automation,
            SaaS development, and web applications to help your business thrive
            in the digital age.
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button href="/services" variant="secondary">
              Explore All Services
            </Button>
          </motion.div>
        </div>
      </section>

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
  );
}
