import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Solutions",
  description:
    "WhatsApp automation, lead qualification, onboarding, scheduling, invoicing, and CRM pipeline automation for SMBs and real estate.",
};

export default function AutomationSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
