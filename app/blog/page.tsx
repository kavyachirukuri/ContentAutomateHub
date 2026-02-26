"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const posts = [
  {
    id: "1",
    title: "Why SMBs Need AI-Powered Digital Transformation",
    excerpt:
      "How AI and automation are leveling the playing field for small and medium businesses.",
    date: "2025-02-20",
    slug: "smb-ai-digital-transformation",
  },
  {
    id: "2",
    title: "Real Estate Marketing: Branding and Lead Automation",
    excerpt:
      "Best practices for real estate branding, web presence, and lead capture automation.",
    date: "2025-02-15",
    slug: "real-estate-marketing-automation",
  },
  {
    id: "3",
    title: "AEO and GVO: Getting Found in the Answer Engine Era",
    excerpt:
      "Answer Engine Optimization and Generative Visibility Optimization for modern search.",
    date: "2025-02-10",
    slug: "aeo-gvo-answer-engine",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0c0f14] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#d4af37]">
              Blog / Insights
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Thoughts on AI, digital transformation, branding, and automation
              for SMBs and real estate.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="space-y-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-[#0c0f14]/10 bg-gray-50/50 p-6 sm:p-8 transition-shadow hover:shadow-md"
              >
                <p className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="mt-2 text-xl font-bold text-[#0c0f14]">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#d4af37] hover:underline"
                >
                  Read more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-gray-500">
            Blog CMS-ready. Connect Sanity, Strapi, or your headless CMS to
            manage posts.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
