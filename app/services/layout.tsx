import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding & identity, web & app development, digital marketing (SEO/AEO/GEO), AI content & video, and AI automation — everything your business needs to grow.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
