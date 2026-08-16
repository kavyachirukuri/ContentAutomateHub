/**
 * SynkraAI – Core services (Content Copy document)
 * The AI-Powered Growth Partner for Ambitious SMBs.
 * Content sourced from the agency website content brief (5 service pillars).
 */

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  detailTitle: string;
  detailSubhead: string;
  detailDescription: string;
  whyItMatters: string;
  services: readonly string[];
  faqs: readonly ServiceFaq[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "branding",
    title: "Branding & Identity",
    slug: "branding",
    shortDescription:
      "Logos, brand guidelines, pitch decks, business cards & digital cards with QR — a brand that looks like it means business.",
    detailTitle: "Brand Identity That Makes People Trust You Instantly",
    detailSubhead:
      "From logo to pitch deck, we build the visual and verbal identity that makes small businesses look — and perform — like market leaders.",
    detailDescription:
      "Your brand is more than a logo — it's your reputation, voice, and positioning in the market. We create complete brand identities that communicate clarity, confidence, and credibility. From logo design and visual identity systems to messaging strategy and brand positioning, we ensure your business stands out and stays memorable.",
    whyItMatters:
      "A strong brand isn't decoration — it's the reason customers choose you over a cheaper competitor. Consistent branding across every touchpoint builds recognition, trust, and pricing power.",
    services: [
      "Logo Design & Brand Marks",
      "Complete Brand Guidelines (colors, typography, tone of voice)",
      "Brand Positioning & Messaging Strategy",
      "Pitch Decks & Investor Decks",
      "Company Profile Design",
      "Letterheads & Stationery",
      "Business Cards (print)",
      "Digital Business Cards with QR Code",
      "Marketing Collateral (brochures, flyers, packaging)",
    ],
    faqs: [
      {
        question: "How long does a full brand identity take?",
        answer:
          "Typically 2–3 weeks from discovery to final files, depending on scope.",
      },
      {
        question: "Do I get the source files?",
        answer: "Yes — you own all final logo and brand files outright.",
      },
      {
        question: "What's a digital business card?",
        answer:
          "A QR-code-based card that shares your contact details, socials, and portfolio instantly — no app needed, always up to date.",
      },
    ],
  },
  {
    id: "web-mobile",
    title: "Web & App Development",
    slug: "web-mobile",
    shortDescription:
      "Landing pages, websites, e-commerce, Android/iOS apps, and custom CRMs built to convert.",
    detailTitle: "Websites and Apps Built to Convert, Not Just Impress",
    detailSubhead:
      "From landing pages to full e-commerce platforms and custom CRMs — fast, mobile-first, and built to turn visitors into customers.",
    detailDescription:
      "We design and develop high-performance websites and applications that are built to convert visitors into customers. Our digital platforms are fast, responsive, SEO-optimized, and strategically structured to guide users toward action. Whether it's a landing page, business website, or mobile interface — every element is crafted with growth in mind.",
    whyItMatters:
      "Your website is often the first — and most judged — interaction a customer has with your business. Speed, clarity, and mobile experience directly affect how many visitors become leads.",
    services: [
      "High-Converting Landing Pages",
      "Business & Portfolio Websites",
      "E-commerce Stores (Shopify/WooCommerce/custom)",
      "Web Applications",
      "Android & iOS Apps",
      "Custom CRM Development",
      "Website & App Maintenance",
    ],
    faqs: [
      {
        question: "How long does a website take to build?",
        answer:
          "A landing page can launch in 1 week; full websites typically take 3–4 weeks; apps and custom CRMs are scoped individually.",
      },
      {
        question: "Will my site be mobile-friendly?",
        answer:
          "Every build is mobile-first and tested across devices before launch.",
      },
      {
        question: "Do you handle hosting and maintenance?",
        answer: "Yes, optional ongoing plans are available.",
      },
    ],
  },
  {
    id: "ai-marketing",
    title: "Digital Marketing",
    slug: "ai-marketing",
    shortDescription:
      "SEO, AEO, GEO, paid ads, social, WhatsApp & email marketing, and AI-powered lead generation.",
    detailTitle: "Marketing That's Built to Get Found — by People and AI",
    detailSubhead:
      "SEO, AEO, and GEO to win search and AI answer engines, plus paid ads, social, and lead generation that's tracked to every rupee spent.",
    detailDescription:
      "Traditional marketing relies on guesswork. AI marketing relies on data. We implement intelligent marketing systems that analyze behavior, optimize campaigns in real-time, and improve ROI automatically. From targeted ads and funnel optimization to predictive analytics, we help you reach the right audience at the right time with the right message.",
    whyItMatters:
      "Customers now discover businesses through Google, Instagram, and increasingly AI tools like ChatGPT and Gemini. Winning all three — not just traditional SEO — is what keeps your pipeline full.",
    services: [
      "Social Media Management & Content Marketing",
      "Influencer Marketing",
      "E-commerce Listing Optimization & Marketplace Marketing",
      "Quick Commerce Marketing",
      "AI-Powered Content Marketing",
      "SEO (Search Engine Optimization)",
      "AEO (Answer Engine Optimization)",
      "GEO (Generative Engine Optimization)",
      "Google Ads, Meta Ads, LinkedIn Ads",
      "WhatsApp Marketing",
      "Email Marketing",
      "Personal Brand Building",
      "Social Media Profile Optimization",
      "AI-Powered Lead Generation",
    ],
    faqs: [
      {
        question: "What's the difference between SEO, AEO, and GEO?",
        answer:
          "SEO gets you found in search results; AEO gets your business surfaced in direct \"answer\" boxes and voice search; GEO gets you cited and recommended by AI chatbots and generative engines.",
      },
      {
        question: "How soon will I see results from ads?",
        answer:
          "Paid campaigns typically show measurable data within 1–2 weeks; SEO/AEO/GEO builds over 2–4 months.",
      },
      {
        question: "Do you manage my ad budget?",
        answer:
          "Yes, we plan, run, and optimize campaigns within a budget you approve.",
      },
    ],
  },
  {
    id: "content-studio",
    title: "AI Content & Video",
    slug: "content-studio",
    shortDescription:
      "AI avatars, UGC-style ads, 3D walkthroughs, and corporate videos — studio quality, a fraction of the cost and time.",
    detailTitle: "Studio-Quality Video, Without the Studio Cost or Timeline",
    detailSubhead:
      "AI avatars, UGC-style ads, 3D walkthroughs, and corporate videos produced in days — for a fraction of traditional production costs.",
    detailDescription:
      "Content is the engine of digital growth — but creating it consistently can be overwhelming. We use AI-powered systems to generate high-quality blogs, social media posts, ad creatives, scripts, and videos tailored to your audience. Our approach blends automation with creativity to produce engaging, scalable, and performance-driven content.",
    whyItMatters:
      "Video drives more engagement than any other content format, but traditional production is slow and expensive. AI content lets small businesses publish consistently — without a camera crew.",
    services: [
      "AI Avatar Videos",
      "AI Character Videos",
      "3D Walkthroughs (real estate, products, spaces)",
      "AI UGC (User-Generated-Content-style) Videos",
      "AI Filmmaking & Short Films",
      "AI Corporate Videos",
      "AI Educational/Training Videos",
      "AI Personal Branding Videos",
      "AI Ad Videos",
      "AI Reels & Shorts",
    ],
    faqs: [
      {
        question: "Do AI avatars look realistic?",
        answer:
          "Yes — modern AI avatars are near-indistinguishable from real presenters for most use cases; we choose the right style (avatar, UGC, animated) for your audience.",
      },
      {
        question: "Can I use my own footage with AI enhancements?",
        answer: "Yes, we can blend real footage with AI-generated elements.",
      },
      {
        question: "How fast is turnaround?",
        answer:
          "Most AI videos are delivered in 3–7 days depending on complexity.",
      },
    ],
  },
  {
    id: "business-automation",
    title: "AI Automation",
    slug: "business-automation",
    shortDescription:
      "CRM, WhatsApp, and social automation, AI voice agents, chatbots — save hours every single week.",
    detailTitle: "Put Your Busywork on Autopilot",
    detailSubhead:
      "From CRM workflows to WhatsApp replies and voice agents, we build AI systems that work while you sleep — so your team can focus on growth.",
    detailDescription:
      "Manual processes slow businesses down. Automation accelerates them. We build customized automation workflows that connect your CRM, email marketing, SMS campaigns, lead capture systems, and internal operations into one seamless ecosystem. From automated follow-ups to smart lead nurturing — your business runs efficiently without constant supervision.",
    whyItMatters:
      "Every manual follow-up, missed lead reply, or repetitive task is money left on the table. Automation ensures no lead waits, no task is forgotten, and your team spends time on what actually needs a human.",
    services: [
      "Business Workflow Automation",
      "CRM Automation",
      "WhatsApp Automation",
      "Social Media Automation (scheduling, replies, reporting)",
      "AI Voice Agents (calls, bookings, support)",
      "Custom AI Agents",
      "Chatbots (website, WhatsApp, Instagram)",
    ],
    faqs: [
      {
        question: "Will automation feel robotic to my customers?",
        answer:
          "No — we design flows and voice/chat scripts to sound natural and on-brand, with a clear human handoff when needed.",
      },
      {
        question: "What tools do you integrate with?",
        answer:
          "We work with most major CRMs, WhatsApp Business API, Meta platforms, and can build custom integrations.",
      },
      {
        question: "How much time does automation actually save?",
        answer:
          "Most clients report 10–20+ hours/week saved on lead follow-up and repetitive admin alone.",
      },
    ],
  },
];

export type ServiceCategoryId = ServiceCategory["id"];

export const PROCESS_STEPS = [
  {
    title: "Discover",
    description:
      "We learn your business, audience, and goals on a free strategy call.",
  },
  {
    title: "Design a Roadmap",
    description:
      "A clear plan across brand, web, marketing, and automation — with timelines and costs upfront.",
  },
  {
    title: "Build & Launch",
    description:
      "Our team and AI stack execute fast, with weekly check-ins.",
  },
  {
    title: "Scale",
    description: "We track results and double down on what's working.",
  },
];

export const OUTCOME_POINTS = [
  "Faster operations",
  "Higher conversion rates",
  "Reduced manual workload",
  "Scalable infrastructure",
];

export const INDUSTRIES = [
  "Retail & E-commerce",
  "Real Estate",
  "Healthcare & Clinics",
  "Restaurants & Cloud Kitchens",
  "Education",
  "Professional Services",
  "Fashion & D2C",
  "Fitness & Wellness",
];
