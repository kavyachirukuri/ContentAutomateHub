import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Analytics } from "@/components/Analytics";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-app",
});

export const metadata: Metadata = {
  title: {
    default: "AI-Powered Growth Agency for SMBs | SynkraAI",
    template: "%s | SynkraAI",
  },
  description:
    "SynkraAI is the AI-first growth partner for ambitious SMBs — branding, web & app development, digital marketing, AI content & video, and AI automation under one roof.",
  keywords: [
    "AI growth agency",
    "AI marketing agency",
    "branding agency for SMBs",
    "web and app development agency",
    "AI automation agency",
    "SEO AEO GEO agency",
    "AI content and video agency",
    "digital transformation agency Hyderabad",
  ],
  openGraph: {
    title: "AI-Powered Growth Agency for SMBs | SynkraAI",
    description:
      "One team. Every growth lever. Powered by AI, run by strategists. Branding, web & app development, digital marketing, AI content & video, and automation for SMBs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "SynkraAI",
    description:
      "AI-powered growth partner for small and medium businesses, offering branding & identity, web & app development, digital marketing, AI content & video, and AI automation under one roof.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.synkraai.in",
    email: "contact@synkraai.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#B-1, 3rd Floor, Padma Manohar Arcade, Madhura Nagar",
      addressLocality: "Hyderabad",
      postalCode: "500038",
      addressCountry: "IN",
    },
    areaServed: "Hyderabad, India",
    sameAs: [],
  };

  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-[#0c0f14] antialiased transition-colors dark:bg-[#0B0B0F] dark:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
