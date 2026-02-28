import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "SynkraAI serves SMBs, real estate (primary niche), founders, marketing teams, and operations managers with AI and digital transformation.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
