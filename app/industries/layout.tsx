import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "SynkraAI serves SMBs across retail, real estate, healthcare, restaurants, education, professional services, fashion, and fitness with AI-powered branding, marketing, and automation.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
