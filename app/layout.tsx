import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Analytics } from "@/components/Analytics";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-app",
});

export const metadata: Metadata = {
  title: {
    default: "SynkraAI – One-Stop AI & Digital Growth Partner",
    template: "%s | SynkraAI",
  },
  description:
    "SynkraAI – One-Stop AI & Digital Transformation Partner for SMBs. Branding, web & mobile development, AI-powered marketing, content studio, and business automation. Book a free strategy call.",
  keywords: [
    "AI digital transformation",
    "SMB marketing",
    "branding",
    "web development",
    "business automation",
    "real estate marketing",
    "real estate AI",
  ],
  openGraph: {
    title: "SynkraAI – One-Stop AI & Digital Growth Partner",
    description:
      "Branding, web, AI marketing, content, and automation for small and medium businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SynkraAI",
    description: "One-Stop AI & Digital Transformation Partner for SMBs. Branding, web & mobile development, AI-powered marketing, content studio, and business automation.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.synkraai.in",
    sameAs: [],
  };

  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen bg-white font-sans text-[#0c0f14] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
