/**
 * SynkraAI – Core services (Content Copy document)
 * One-Stop AI & Digital Transformation Partner for SMBs.
 */

export const SERVICE_CATEGORIES = [
  {
    id: "branding",
    title: "Branding & Identity",
    slug: "branding",
    shortDescription: "We create complete brand foundations that build trust and authority.",
    services: [
      "Brand naming & tagline creation",
      "Logo & brand identity kit",
      "LinkedIn headshots & social media banners",
      "QR codes & digital visiting cards",
      "Google My Business setup & optimization",
      "360° Street View integration",
      "Corporate profiles & presentation decks",
    ],
  },
  {
    id: "web-mobile",
    title: "Web & Mobile Development",
    slug: "web-mobile",
    shortDescription: "We build scalable, performance‑driven digital platforms.",
    services: [
      "Landing pages & portfolio websites",
      "Dynamic business websites",
      "E‑commerce platforms",
      "Custom web applications & dashboards",
      "iOS & Android mobile app development",
    ],
  },
  {
    id: "ai-marketing",
    title: "AI‑Powered Digital Marketing",
    slug: "ai-marketing",
    shortDescription: "Marketing systems designed for discoverability and conversion.",
    services: [
      "SEO automation",
      "AEO (Answer Engine Optimization)",
      "GVO (Generative Visibility Optimization)",
      "AI‑powered content creation",
      "Social media automation",
      "Performance & funnel marketing",
    ],
  },
  {
    id: "content-studio",
    title: "AI Content Studio",
    slug: "content-studio",
    shortDescription: "High‑impact visual content powered by AI.",
    services: [
      "Explainer videos",
      "Promotional & ad creatives",
      "Brand films",
      "Animation & 3D videos",
      "Pixar‑style visuals",
      "AI mascots & avatars",
      "Product demo videos",
    ],
  },
  {
    id: "business-automation",
    title: "AI Business Automation",
    slug: "business-automation",
    shortDescription: "End‑to‑end automation for daily business operations.",
    services: [
      "WhatsApp automation",
      "Lead qualification & routing",
      "Client onboarding workflows",
      "Appointment scheduling systems",
      "Invoice & billing automation",
      "Proposal & quotation automation",
      "Feedback & review automation",
      "Internal team workflow automation",
    ],
  },
] as const;

export type ServiceCategoryId = (typeof SERVICE_CATEGORIES)[number]["id"];

export const PROCESS_STEPS = [
  "Audit",
  "Strategy",
  "Design",
  "Build",
  "Automate",
  "Optimize",
];

export const OUTCOME_POINTS = [
  "Faster operations",
  "Higher conversion rates",
  "Reduced manual workload",
  "Scalable infrastructure",
];
