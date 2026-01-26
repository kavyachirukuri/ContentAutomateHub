import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AnimatedBackground } from "../components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Padma Desireddy",
    template: "%s | Padma Desireddy",
  },
  description:
    "Professional services in AI content creation, automation, SaaS development, and web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-stone-50 font-sans text-slate-900 antialiased`}
      >
        <AnimatedBackground />
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
