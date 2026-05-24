"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919010432070";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi SynkraAI, I want a free demo video for my brand."
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

const trustBadges = ["Fast Delivery", "No Photoshoot Required", "Social Media Ready"];

const metrics = [
  { value: "100+", label: "AI creatives delivered" },
  { value: "10+", label: "industries served" },
  { value: "Fast", label: "turnaround for ad traffic" },
];

const portfolioCategories = [
  "AI Product Videos",
  "AI Reels",
  "AI Ads",
  "Clinics",
  "Food & Restaurants",
  "Real Estate",
  "Festival Campaigns",
  "AI Mascots",
];

const portfolioItems = [
  {
    title: "AI Talking Product",
    category: "Product Launch",
    ratio: "lg:row-span-2",
    gradient: "from-fuchsia-500 via-violet-500 to-cyan-400",
    note: "Talking product demo with cinematic lighting",
  },
  {
    title: "Cinematic Brand Promo",
    category: "Brand Film",
    ratio: "",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    note: "Premium promo for modern social campaigns",
  },
  {
    title: "Viral AI Mascot Video",
    category: "AI Mascot",
    ratio: "",
    gradient: "from-purple-500 via-pink-500 to-orange-400",
    note: "Character-led reel built for attention",
  },
  {
    title: "Clinic Awareness Reel",
    category: "Clinics",
    ratio: "",
    gradient: "from-cyan-400 via-blue-500 to-violet-500",
    note: "Trust-building healthcare promotional creative",
  },
  {
    title: "Food Brand Motion Ad",
    category: "Restaurants",
    ratio: "lg:col-span-2",
    gradient: "from-amber-400 via-pink-500 to-fuchsia-600",
    note: "High-contrast visuals for delivery and dine-in offers",
  },
  {
    title: "Real Estate Reel",
    category: "Real Estate",
    ratio: "",
    gradient: "from-sky-400 via-blue-600 to-slate-900",
    note: "Luxury property promo without a production shoot",
  },
];

const problems = [
  "Expensive shoots",
  "Long production timelines",
  "Difficult revisions",
  "Limited creative variations",
];

const solutions = [
  "Faster video delivery",
  "Budget-friendly production",
  "Unlimited creative possibilities",
  "Multiple ad variations quickly",
];

const services = [
  {
    title: "AI Product Videos",
    description: "Products brought to life with cinematic visuals and scroll-stopping motion.",
  },
  {
    title: "AI Reels",
    description: "Short-form social content designed for Instagram, Facebook, and local discovery.",
  },
  {
    title: "AI Ads",
    description: "Campaign-ready video creatives built for offers, launches, and retargeting.",
  },
  {
    title: "AI Mascots",
    description: "Talking characters and mascots that make your brand instantly memorable.",
  },
  {
    title: "AI Explainer Videos",
    description: "Simple, polished storytelling for clinics, startups, services, and launches.",
  },
  {
    title: "AI UGC Videos",
    description: "Native-looking promotional videos that feel fast, relatable, and ad-ready.",
  },
];

const benefits = [
  "Faster Delivery",
  "No Photoshoots",
  "Built for Social Media",
  "Cost Effective",
  "Unlimited Creativity",
  "Premium Visual Quality",
];

const processSteps = [
  "Strategy Call",
  "Script & Concept",
  "AI Production",
  "Delivery",
];

const outcomes = [
  "Higher engagement on Instagram and Facebook",
  "Better ad creatives for paid campaigns",
  "Premium brand perception in local markets",
  "Faster content creation for every offer",
  "More visibility with social-media-ready visuals",
];

const testimonials = [
  {
    quote:
      "SynkraAI made our cafe look like a premium brand online. The reels were fast, cinematic, and perfect for ads.",
    name: "Cafe Founder",
    industry: "Food & Restaurants",
  },
  {
    quote:
      "We needed clinic awareness videos without a shoot. The concepts, scripts, and visuals were handled smoothly.",
    name: "Clinic Owner",
    industry: "Healthcare",
  },
  {
    quote:
      "The AI mascot video got our audience talking immediately. It felt modern and different from regular agency content.",
    name: "Brand Manager",
    industry: "Retail",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "Free demo",
    description: "Best for testing one campaign idea or product concept.",
    features: ["1 AI video concept", "Social-ready format", "Basic script direction"],
  },
  {
    name: "Growth",
    price: "Most Popular",
    description: "For brands that need consistent reels and ad creatives.",
    features: ["Multiple video variations", "Campaign-ready creatives", "Revisions included"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "For full launch campaigns, mascots, explainers, and monthly content.",
    features: ["Creative strategy", "AI mascot or brand world", "Priority delivery"],
  },
];

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most demo concepts and short promotional videos can move quickly after the strategy call, depending on scope and revisions.",
  },
  {
    question: "Do we need a photoshoot?",
    answer:
      "No. SynkraAI can create cinematic promotional videos using AI visuals, product references, brand inputs, and creative direction.",
  },
  {
    question: "Can videos be created in Telugu?",
    answer:
      "Yes. Videos can be planned for Telugu, Hindi, English, or mixed-language local campaigns.",
  },
  {
    question: "Are revisions included?",
    answer:
      "Yes. Revision scope depends on the package, and we align the concept before production to keep changes focused.",
  },
  {
    question: "Can videos be used for ads?",
    answer:
      "Yes. The creatives are designed for Instagram, Facebook, and paid campaign formats.",
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
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
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
      className={`rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-violet-950/20 backdrop-blur-xl transition-colors hover:border-cyan-300/40 ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function VideoMockup({
  title,
  category,
  gradient,
  note,
  className = "",
}: {
  title: string;
  category: string;
  gradient: string;
  note: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`group relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 ${className}`}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_28%),linear-gradient(to_top,rgba(11,11,15,0.92),transparent_58%)]" />
      <motion.div
        className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/30 bg-white/10 blur-sm"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        5-12s loop
      </div>
      <div className="absolute inset-x-5 bottom-5">
        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/20">
          <motion.div
            className="h-full rounded-full bg-white"
            animate={{ x: ["-100%", "120%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
          {category}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/75">{note}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B0B0F] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        <motion.div
          className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-violet-600/30 blur-[110px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-32 bottom-10 h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[100px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-28">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.p
              variants={itemVariants}
              className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200"
            >
              AI-Powered Video Marketing for Modern Brands
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl"
            >
              AI Videos That Make Your Brand{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-200 bg-clip-text text-transparent">
                Impossible to Ignore
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              We create AI-powered promotional videos, reels, and ad creatives
              that help businesses attract attention, increase engagement, and
              grow faster online without expensive production shoots.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="/book-call" size="lg">
                Get Free Demo Video
              </Button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 px-8 text-base font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200"
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
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-violet-600/40 to-cyan-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <VideoMockup
                title="AI Reel Montage"
                category="Autoplay Showcase"
                gradient="from-violet-600 via-fuchsia-500 to-cyan-400"
                note="Food promos, clinic explainers, mascots, real estate reels, and festival campaigns in one cinematic preview."
                className="min-h-[460px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B0B0F] py-10 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
            Trusted by growing brands across local Indian markets
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <GlowCard key={metric.label} className="text-center">
                <p className="text-3xl font-black text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#0B0B0F] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Featured Portfolio"
            title="A Video-First Showcase Built to Sell the Scroll"
            description="Your first impression should feel premium within seconds. These portfolio styles are designed for autoplay previews, muted loops, and reel-ready mobile viewing."
          />
          <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
            {portfolioCategories.map((category) => (
              <span
                key={category}
                className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200"
              >
                {category}
              </span>
            ))}
          </div>
          <motion.div
            className="mt-8 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={item.ratio}
              >
                <VideoMockup {...item} className="h-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#101018] py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
          <GlowCard>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300">
              Traditional Video Production
            </p>
            <h2 className="mt-4 text-3xl font-bold">Slow, expensive, and hard to repeat.</h2>
            <ul className="mt-8 space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  {problem}
                </li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard className="border-cyan-300/30 bg-cyan-300/[0.07]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              SynkraAI Solution
            </p>
            <h2 className="mt-4 text-3xl font-bold">Cinematic marketing visuals, created faster.</h2>
            <ul className="mt-8 space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-center gap-3 text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  {solution}
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>
      </section>

      <section id="services" className="bg-[#0B0B0F] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Services"
            title="AI Creative Videos for Every Growth Moment"
            description="From product launches to seasonal offers, SynkraAI creates promotional video assets for restaurants, clinics, jewelry brands, cafes, real estate, fashion brands, startups, and local businesses."
          />
          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <GlowCard className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-300 text-lg font-black text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{service.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#101018] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Why Choose Us"
            title="Premium AI Videos Without Production Drag"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <GlowCard key={benefit} className="p-5">
                <p className="text-lg font-bold text-white">{benefit}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0F] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Process"
            title="From Idea to Campaign-Ready Creative"
            description="A clear production flow keeps every video focused on brand growth, attention, and lead conversion."
          />
          <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-violet-500 via-cyan-300 to-fuchsia-500 lg:block" />
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/40 bg-[#0B0B0F] text-xl font-black text-cyan-200">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101018] py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Results
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Built for business outcomes, not AI buzzwords.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The goal is simple: make your brand look premium, grab attention
              faster, and turn ad traffic into WhatsApp inquiries.
            </p>
          </div>
          <div className="grid gap-4">
            {outcomes.map((outcome) => (
              <GlowCard key={outcome} className="p-5">
                <p className="text-slate-200">{outcome}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0F] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Testimonials"
            title="Creative Momentum for Modern Local Brands"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <GlowCard key={testimonial.name} className="h-full">
                <div className="mb-6 h-12 w-12 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
                <p className="leading-8 text-slate-200">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-6 font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-cyan-200">{testimonial.industry}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#101018] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionIntro
            eyebrow="Pricing"
            title="Start With a Free Demo Video"
            description="Choose a starting point based on your campaign needs. Every package is focused on fast lead conversion and premium brand perception."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricing.map((plan) => (
              <GlowCard
                key={plan.name}
                className={
                  plan.highlighted
                    ? "relative border-cyan-300/50 bg-cyan-300/[0.08] lg:-mt-6"
                    : ""
                }
              >
                {plan.highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-cyan-300 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#0B0B0F]">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-3xl font-black text-cyan-200">{plan.price}</p>
                <p className="mt-4 leading-7 text-slate-400">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-slate-300">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="/book-call" className="mt-8 w-full">
                  Get Started
                </Button>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0F] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions Before Your First AI Video?"
          />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 open:border-cyan-300/40"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-slate-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0B0B0F] px-4 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/30 via-[#11111d] to-cyan-400/20 p-8 text-center shadow-2xl shadow-violet-950/30 sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Ready to grow?
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Ready to Grow Your Brand with AI Videos?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Get a cinematic demo direction for your business and see how
            SynkraAI can turn your next offer into a premium video campaign.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/book-call" size="lg">
              Get Free Demo Video
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 px-8 text-base font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
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
          Need AI Videos? WhatsApp Us
        </a>
      </div>
    </>
  );
}
