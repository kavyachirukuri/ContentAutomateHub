import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights on AI, digital transformation, branding, and automation for SMBs and real estate from SynkraAI.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
