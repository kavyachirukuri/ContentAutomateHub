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
    default: "AI Video Agency in Hyderabad | SynkraAI",
    template: "%s | SynkraAI",
  },
  description:
    "AI-powered promotional videos, reels, ads, and creative content for modern brands. Fast, cinematic, and social-media-ready AI video production.",
  keywords: [
    "AI video agency",
    "AI promotional videos",
    "AI reels service",
    "AI product videos",
    "AI marketing videos",
    "AI ads agency",
    "AI video agency Hyderabad",
  ],
  openGraph: {
    title: "AI Video Agency in Hyderabad | SynkraAI",
    description:
      "Premium AI-powered promotional videos, reels, ads, and creative marketing content for modern brands.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SynkraAI",
    description:
      "AI-powered creative video agency creating cinematic promotional videos, reels, ads, mascots, and social-media-ready content for modern brands.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.synkraai.in",
    areaServed: "Hyderabad, India",
    sameAs: [],
  };

  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen bg-[#0B0B0F] font-sans text-white antialiased">
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
