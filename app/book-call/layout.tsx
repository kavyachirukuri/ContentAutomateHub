import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Schedule a free strategy call with SynkraAI. Discuss your goals for branding, web, AI marketing, content, and automation.",
};

export default function BookCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
