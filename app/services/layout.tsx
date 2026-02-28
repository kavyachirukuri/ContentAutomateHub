import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, web & mobile development, AI-powered digital marketing, AI content studio, and business automation for SMBs.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
