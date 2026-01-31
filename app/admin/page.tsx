"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export default function AdminPage() {
  const router = useRouter();
  const [auth, setAuth] = useState<{ authenticated: boolean; email?: string } | null>(null);

  useEffect(() => {
    fetch("/api/admin/me")
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (res.status === 401) {
          router.replace("/admin/login");
          return;
        }
        setAuth(data);
      })
      .catch(() => router.replace("/admin/login"));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  if (auth === null) {
    return (
      <main>
        <section className="mx-auto flex max-w-6xl items-center justify-center px-4 py-24">
          <p className="text-slate-600">Loading...</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Admin Dashboard
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Manage your website content, view inquiries, and monitor analytics.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {auth.email && (
              <span className="text-sm text-slate-600">{auth.email}</span>
            )}
            <Button variant="secondary" size="sm" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href="/admin/contacts"
              className="block rounded-xl border border-stone-200 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_10px_30px_rgba(2,44,34,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  className="h-6 w-6 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                Contact Submissions
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                View and manage inquiries from the contact form
              </p>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-xl border border-stone-200 bg-stone-50 p-8 opacity-75"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-200">
              <svg
                className="h-6 w-6 text-stone-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-700">
              Content Management
            </h3>
            <p className="mt-2 text-sm text-slate-500">Coming soon</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="rounded-xl border border-stone-200 bg-stone-50 p-8 opacity-75"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-200">
              <svg
                className="h-6 w-6 text-stone-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-700">
              Analytics
            </h3>
            <p className="mt-2 text-sm text-slate-500">Coming soon</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
