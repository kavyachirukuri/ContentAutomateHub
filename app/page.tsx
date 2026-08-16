"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import {
  SERVICE_CATEGORIES,
  PROCESS_STEPS,
  INDUSTRIES,
} from "@/lib/services-data";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919010432070";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi SynkraAI, I'd like to book a free strategy call for my brand."
);
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const trustBadges = [
  "Full-Stack Under One Roof",
  "AI-Accelerated Delivery",
  "Built for SMB Budgets",
];

const metrics = [
  { value: "120+", label: "Brands launched" },
  { value: "4.9/5", label: "Client rating" },
  { value: "40+", label: "Industries served" },
  { value: "AI-Accelerated", label: "Delivery speed" },
];

const serviceCtaLabels: Record<string, string> = {
  branding: "Explore Branding",
  "web-mobile": "Explore Development",
  "ai-marketing": "Explore Marketing",
  "content-studio": "Explore AI Content",
  "business-automation": "Explore Automation",
};

const whyAiFirst = [
  {
    title: "3x Faster",
    description:
      "AI-accelerated production means campaigns, content, and builds ship in days, not months.",
  },
  {
    title: "Lower Cost, Same Craft",
    description:
      "AI handles the heavy lifting; our strategists and designers handle the judgment calls.",
  },
  {
    title: "Always-On Growth",
    description:
      "Automations and AI agents keep working — generating leads, replying to customers, nurturing prospects — 24/7.",
  },
];

const caseStudies = [
  {
    industry: "Retail & E-commerce",
    challenge: "Struggling to convert paid traffic into sales.",
    whatWeDid:
      "Rebuilt their landing page, launched AEO/SEO content, and automated WhatsApp follow-ups.",
    result: "+180% leads in 60 days",
  },
  {
    industry: "Healthcare & Clinics",
    challenge: "Low local visibility and manual appointment booking.",
    whatWeDid:
      "Built a Google Business + AEO presence and an AI voice agent for bookings.",
    result: "3x more inbound calls in 90 days",
  },
  {
    industry: "Real Estate",
    challenge: "Generic branding and no digital lead engine.",
    whatWeDid:
      "New brand identity, a high-converting website, and automated lead routing to the sales team.",
    result: "2.4x qualified leads per month",
  },
];

const testimonials = [
  {
    quote:
      "SynkraAI became our entire marketing department — brand, website, ads, and automation — without the overhead of five vendors.",
    name: "Cafe Founder",
    industry: "Food & Restaurants",
  },
  {
    quote:
      "The AI voice agent alone saves our front desk hours every day, and our new website finally looks like the practice we actually are.",
    name: "Clinic Owner",
    industry: "Healthcare & Clinics",
  },
  {
    quote:
      "From logo to lead-gen funnel, everything felt like one coherent plan instead of five disconnected projects.",
    name: "Founder",
    industry: "Real Estate",
  },
];

const pricing = [
  {
    name: "Starter",
    tagline: "For new businesses needing a brand + website",
    features: [
      "Brand identity & logo",
      "Business website or landing page",
      "Google Business setup & optimization",
    ],
  },
  {
    name: "Growth",
    tagline: "For businesses ready to scale marketing + automation",
    features: [
      "Everything in Starter",
      "SEO, AEO & GEO + paid ads",
      "WhatsApp & CRM automation",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    tagline: "Full-stack partner: brand, dev, marketing, AI content & automation",
    features: [
      "Everything in Growth",
      "AI content & video production",
      "Custom AI agents & voice bots",
      "Dedicated growth roadmap",
    ],
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8962e] dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0c0f14] dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-gray-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`rounded-3xl border border-[#0c0f14]/10 bg-white p-6 shadow-2xl shadow-[#0c0f14]/5 backdrop-blur-xl transition-colors hover:border-[#b8962e]/40 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-violet-950/20 dark:hover:border-cyan-300/40 ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function GrowthShowcase() {
  return (
    <motion.div
      className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_28%),linear-gradient(to_top,rgba(11,11,15,0.92),transparent_58%)]" />
      <motion.div
        className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/30 bg-white/10 blur-sm"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        One Roadmap
      </div>
      <div className="absolute inset-x-5 bottom-5">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
          Your Growth Stack
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white">
          Brand. Web. Marketing. Content. Automation.
        </h3>
        <ul className="mt-4 space-y-2">
          {SERVICE_CATEGORIES.map((cat, index) => (
            <motion.li
              key={cat.id}
              className="flex items-center gap-3 text-sm text-white/85"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
                {index + 1}
              </span>
              {cat.title}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white text-[#0c0f14] dark:bg-[#0B0B0F] dark:text-white">
        <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 dark:block" />
        <motion.div
          className="absolute -right-32 top-10 hidden h-[420px] w-[420px] rounded-full bg-violet-600/30 blur-[110px] dark:block"
          animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-32 bottom-10 hidden h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[100px] dark:block"
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-28">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.p
              variants={itemVariants}
              className="inline-flex rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#b8962e] dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-200"
            >
              AI-Powered Branding, Marketing &amp; Automation Agency
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl"
            >
              Your Brand. Built, Marketed, and{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent dark:from-fuchsia-300 dark:via-violet-300 dark:to-cyan-200">
                Automated — with AI.
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-slate-300 sm:text-xl"
            >
              We help small and medium businesses launch stronger brands,
              build high-converting websites and apps, run marketing that
              actually works, and automate the busywork — all powered by AI,
              all under one roof.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="/book-call" size="lg">
                Book a Free Strategy Call
              </Button>
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-md border border-[#0c0f14]/25 px-8 text-base font-semibold text-[#0c0f14] transition hover:border-[#b8962e]/60 hover:bg-[#0c0f14]/5 dark:border-white/25 dark:text-white dark:hover:border-cyan-300/60 dark:hover:bg-white/10"
              >
                See Our Work
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#0c0f14]/10 bg-[#0c0f14]/[0.03] px-4 py-2 text-sm text-gray-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute -inset-4 hidden rounded-[2.5rem] bg-gradient-to-r from-violet-600/40 to-cyan-400/30 blur-2xl dark:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#0c0f14]/10 bg-[#0c0f14]/[0.02] p-4 shadow-2xl shadow-[#0c0f14]/5 backdrop-blur dark:border-white/15 dark:bg-white/[0.06] dark:shadow-cyan-950/30">
              <GrowthShowcase />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#0c0f14]/10 bg-white py-10 text-[#0c0f14] dark:border-white/10 dark:bg-[#0B0B0F] dark:text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-slate-400">
            Trusted by growing brands across 40+ industries
          </p>
          <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <GlowCard key={metric.label} className="text-center">
                <p className="text-2xl font-black text-[#0c0f14] dark:text-white sm:text-3xl">{metric.value}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">{metric.label}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16 text-[#0c0f14] dark:bg-[#0B0B0F] dark:text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Services"
            title="Everything Your Business Needs to Grow"
          />
          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {SERVICE_CATEGORIES.map((cat, index) => (
              <motion.div key={cat.id} variants={itemVariants}>
                <a href={`/services#${cat.slug}`} className="block h-full">
                  <GlowCard className="h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-300 text-lg font-black text-white">
                      {index + 1}
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-[#0c0f14] dark:text-white">{cat.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600 dark:text-slate-400">{cat.shortDescription}</p>
                    <p className="mt-4 text-sm font-semibold text-[#b8962e] dark:text-cyan-200">
                      {serviceCtaLabels[cat.id]} →
                    </p>
                  </GlowCard>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-[#0c0f14] dark:bg-[#101018] dark:text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Why AI-First"
            title="Why Businesses Are Switching to AI-Powered Agencies"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {whyAiFirst.map((item) => (
              <GlowCard key={item.title} className="h-full">
                <p className="text-2xl font-black text-[#b8962e] dark:text-cyan-200">{item.title}</p>
                <p className="mt-4 leading-7 text-gray-600 dark:text-slate-300">{item.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-[#0c0f14] dark:bg-[#0B0B0F] dark:text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Process"
            title="How We Work"
          />
          <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-violet-500 via-cyan-300 to-fuchsia-500 lg:block" />
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative rounded-3xl border border-[#0c0f14]/10 bg-white p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37]/40 bg-white text-xl font-black text-[#b8962e] dark:border-cyan-300/40 dark:bg-[#0B0B0F] dark:text-cyan-200">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-gray-50 py-16 text-[#0c0f14] dark:bg-[#101018] dark:text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Social Proof"
            title="Client Wins Across Every Growth Lever"
            description="A few representative examples of how the full-stack approach plays out for SMBs. (Illustrative — swap in real client wins as they land.)"
          />
          <motion.div
            className="mt-12 grid gap-5 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {caseStudies.map((study) => (
              <motion.div key={study.industry} variants={itemVariants}>
                <GlowCard className="h-full border-[#d4af37]/30 dark:border-cyan-300/20">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8962e] dark:text-cyan-200">
                    {study.industry}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#0c0f14] dark:text-white">Challenge</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-400">{study.challenge}</p>
                  <p className="mt-4 text-sm font-semibold text-[#0c0f14] dark:text-white">What We Did</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-400">{study.whatWeDid}</p>
                  <p className="mt-6 inline-block rounded-full bg-gradient-to-r from-violet-500 to-cyan-300 px-4 py-1.5 text-sm font-black text-white">
                    {study.result}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <GlowCard key={testimonial.name + testimonial.industry} className="h-full">
                <div className="mb-6 h-12 w-12 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
                <p className="leading-8 text-gray-700 dark:text-slate-200">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-6 font-bold text-[#0c0f14] dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-[#b8962e] dark:text-cyan-200">{testimonial.industry}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-[#0c0f14] dark:bg-[#0B0B0F] dark:text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro eyebrow="Industries" title="Built for Businesses Like Yours" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#0c0f14]/10 bg-[#0c0f14]/[0.03] px-4 py-2 text-sm text-gray-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-gray-50 py-16 text-[#0c0f14] dark:bg-[#101018] dark:text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Pricing"
            title="Simple Plans, No Surprises"
            description="Illustrative plans — every engagement is scoped to your goals. Get a custom quote based on what your business actually needs."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricing.map((plan) => (
              <GlowCard
                key={plan.name}
                className={
                  plan.highlighted
                    ? "relative border-[#d4af37]/60 bg-[#d4af37]/[0.06] lg:-mt-6 dark:border-cyan-300/50 dark:bg-cyan-300/[0.08]"
                    : ""
                }
              >
                {plan.highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#d4af37] px-3 py-1 text-xs font-black uppercase tracking-wider text-white dark:bg-cyan-300 dark:text-[#0B0B0F]">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 leading-7 text-gray-600 dark:text-slate-400">{plan.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-700 dark:text-slate-300">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="mt-8 w-full">
                  Get a Custom Quote
                </Button>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-4 py-16 text-[#0c0f14] dark:bg-[#0B0B0F] dark:text-white sm:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#0c0f14]/10 bg-gradient-to-br from-[#d4af37]/10 via-white to-cyan-100/50 p-8 text-center shadow-2xl shadow-[#0c0f14]/5 sm:p-14 dark:border-white/10 dark:from-violet-600/30 dark:via-[#11111d] dark:to-cyan-400/20 dark:shadow-violet-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8962e] dark:text-cyan-200">
            Let&apos;s build something that actually grows your business
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Let&apos;s Build Something That Actually Grows Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-slate-300">
            Free 30-minute strategy call. No pitch decks, no pressure — just a
            clear plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/book-call" size="lg">
              Book Your Free Call
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#0c0f14]/25 px-8 text-base font-semibold text-[#0c0f14] transition hover:border-[#b8962e]/60 hover:bg-[#0c0f14]/5 dark:border-white/25 dark:text-white dark:hover:border-cyan-300/60 dark:hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-30 md:hidden">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-300 text-sm font-black text-white shadow-2xl shadow-cyan-950/40"
        >
          Need Help Growing? WhatsApp Us
        </a>
      </div>
    </>
  );
}
