import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SynkraAI is the AI-first growth partner for ambitious SMBs — one team covering branding, web & app development, digital marketing, AI content, and automation.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
