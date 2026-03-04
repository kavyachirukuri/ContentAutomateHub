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
    detailTitle: "Branding That Builds Trust & Authority",
    detailDescription: `Your brand is more than a logo — it’s your reputation, voice, and positioning in the market.

We create complete brand identities that communicate clarity, confidence, and credibility. From logo design and visual identity systems to messaging strategy and brand positioning, we ensure your business stands out and stays memorable.

A strong brand increases trust.
Trust increases conversions.`,
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
    detailTitle: "Web & Mobile Experiences That Convert",
    detailDescription: `We design and develop high-performance websites and applications that are built to convert visitors into customers.

Our digital platforms are fast, responsive, SEO-optimized, and strategically structured to guide users toward action. Whether it’s a landing page, business website, or mobile interface — every element is crafted with growth in mind.

Beautiful design meets powerful functionality.`,
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
    detailTitle: "AI-Driven Marketing That Delivers Measurable Results",
    detailDescription: `Traditional marketing relies on guesswork. AI marketing relies on data.

We implement intelligent marketing systems that analyze behavior, optimize campaigns in real-time, and improve ROI automatically. From targeted ads and funnel optimization to predictive analytics, we help you reach the right audience at the right time with the right message.

Smarter campaigns. Higher returns.`,
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
    detailTitle: "Content Powered by Artificial Intelligence",
    detailDescription: `Content is the engine of digital growth — but creating it consistently can be overwhelming.

We use AI-powered systems to generate high-quality blogs, social media posts, ad creatives, scripts, and videos tailored to your audience. Our approach blends automation with creativity to produce engaging, scalable, and performance-driven content.

Consistent content. Consistent growth.`,
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
    detailTitle: "Intelligent Automation That Saves Time & Scales Revenue",
    detailDescription: `Manual processes slow businesses down. Automation accelerates them.

We build customized automation workflows that connect your CRM, email marketing, SMS campaigns, lead capture systems, and internal operations into one seamless ecosystem.

From automated follow-ups to smart lead nurturing — your business runs efficiently without constant supervision.

Work less on tasks. Focus more on growth.`,
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
