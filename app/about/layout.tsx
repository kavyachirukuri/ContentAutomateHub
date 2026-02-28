import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SynkraAI is a full-stack AI and digital transformation company focused on helping SMBs and real estate businesses scale through intelligent systems.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
