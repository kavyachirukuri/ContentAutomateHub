"use client";

<<<<<<< HEAD
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    id: "ai-content",
    title: "AI Content Creation.",
    description:
      "Harness the power of artificial intelligence to create compelling, high-quality content that resonates with your audience and drives engagement.",
    features: [
      "AI-powered blog posts, articles, and web copy",
      "Social media content generation and scheduling",
      "Image and multimedia content creation",
      "SEO-optimized content that ranks",
      "Content strategy and planning",
      "Multi-language content generation",
      "Brand voice consistency across all content",
      "Content analytics and performance tracking",
    ],
    useCases: [
      "Marketing teams needing scalable content production",
      "E-commerce businesses requiring product descriptions",
      "Blogs and publications seeking consistent output",
      "Social media managers needing engaging posts",
    ],
  },
  {
    id: "automation",
    title: "Automation Solutions",
    description:
      "Eliminate repetitive tasks and streamline your business processes with intelligent automation that works 24/7 to improve efficiency and reduce costs.",
    features: [
      "Workflow automation and process optimization",
      "Data integration and synchronization",
      "Email and notification automation",
      "Task scheduling and reminders",
      "API integrations and webhooks",
      "Custom automation scripts and bots",
      "Business process automation (BPA)",
      "Robotic Process Automation (RPA) solutions",
    ],
    useCases: [
      "Businesses looking to reduce manual work",
      "Teams needing better workflow efficiency",
      "Companies requiring data synchronization",
      "Organizations wanting to scale operations",
    ],
  },
  {
    id: "saas",
    title: "SaaS & Web Applications",
    description:
      "Build powerful, scalable software-as-a-service platforms and web applications that grow with your business and delight your users.",
    features: [
      "Full-stack web application development",
      "Cloud-native SaaS platform architecture",
      "User authentication and authorization",
      "Payment processing and subscription management",
      "Real-time features and WebSocket integration",
      "API development and third-party integrations",
      "Database design and optimization",
      "DevOps and deployment automation",
    ],
    useCases: [
      "Startups building their first SaaS product",
      "Businesses needing custom web applications",
      "Companies looking to digitize processes",
      "Organizations requiring scalable platforms",
    ],
  },
  {
    id: "websites",
    title: "Website Development",
    description:
      "Create stunning, high-performance websites that not only look great but also convert visitors into customers with optimized UX and SEO.",
    features: [
      "Responsive design for all devices",
      "Modern, fast-loading web experiences",
      "SEO optimization and search visibility",
      "E-commerce and online store development",
      "Content management systems (CMS)",
      "Performance optimization and Core Web Vitals",
      "Accessibility compliance (WCAG)",
      "Analytics and conversion tracking",
    ],
    useCases: [
      "Businesses launching their online presence",
      "Companies needing website redesigns",
      "E-commerce stores requiring online platforms",
      "Organizations wanting better online visibility",
    ],
  },
];
=======
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
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
    transition: { staggerChildren: 0.06 },
>>>>>>> 012d777 (updated to v1)
  },
};

const itemVariants = {
<<<<<<< HEAD
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
=======
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
>>>>>>> 012d777 (updated to v1)
  },
};

export default function ServicesPage() {
  return (
<<<<<<< HEAD
    <main>
      {/* Header */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
=======
    <>
      <section className="bg-[#0c0f14] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
>>>>>>> 012d777 (updated to v1)
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
<<<<<<< HEAD
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive digital solutions tailored to your business needs
            </p>
=======
            <p className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Core Services
            </h1>
>>>>>>> 012d777 (updated to v1)
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Details */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          className="space-y-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="scroll-mt-20"
              variants={itemVariants}
            >
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <Button href="/contact" size="md">
                      Get Started
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-xl border border-stone-200 bg-stone-50 p-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    What We Offer
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-slate-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                      >
                        <motion.svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: index * 0.1 + featureIndex * 0.05 + 0.1,
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </motion.svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="mt-12 rounded-xl border border-stone-200 bg-white p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  Perfect For
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {service.useCases.map((useCase, useCaseIndex) => (
                    <motion.div
                      key={useCaseIndex}
                      className="flex items-start gap-3 text-sm text-slate-600"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + useCaseIndex * 0.1,
                      }}
                    >
                      <motion.svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        whileHover={{ rotate: 90 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                        />
                      </motion.svg>
                      <span>{useCase}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
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
              Have Questions?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Let's discuss which services are right for your business
            </p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button href="/contact" size="md">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
=======
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="space-y-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <motion.div
                key={cat.id}
                id={cat.slug}
                variants={itemVariants}
                className="scroll-mt-24 rounded-2xl border border-[#0c0f14]/10 bg-gray-50/50 p-8 sm:p-10"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0c0f14]">
                      {cat.title}
                    </h2>
                    <p className="mt-2 text-gray-600">
                      {cat.shortDescription}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#0c0f14]">
                      Includes:
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-gray-600">
                      {cat.services.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Link
                        href={`/services/${cat.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#d4af37] hover:underline"
                      >
                        View full service details
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <Button href={`/services/${cat.slug}`} variant="secondary">
                    Learn more
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">Ready to get started?</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="/book-call">Book a Free Strategy Call</Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
>>>>>>> 012d777 (updated to v1)
  );
}
