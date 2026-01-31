"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

type Contact = {
  _id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: string;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

const SERVICE_LABELS: Record<string, string> = {
  "ai-content": "AI Content Creation",
  automation: "Automation Solutions",
  saas: "SaaS & Web Applications",
  websites: "Website Development",
  multiple: "Multiple Services",
  other: "Other",
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-amber-100 text-amber-800",
  read: "bg-slate-100 text-slate-800",
  replied: "bg-emerald-100 text-emerald-800",
};

export default function AdminContactsPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: String(page) });
      if (statusFilter) params.set("status", statusFilter);
      const res = await fetch(`/api/admin/contacts?${params}`);
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const data = await res.json();
      setContacts(data.contacts ?? []);
      setPagination(data.pagination ?? null);
    } catch {
      setContacts([]);
    } finally {
      setLoading(false);
    }
  }, [page, statusFilter, router]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const updateStatus = async (id: string, status: "new" | "read" | "replied") => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setContacts((prev) =>
          prev.map((c) => (c._id === id ? { ...c, status } : c))
        );
      }
    } finally {
      setUpdatingId(null);
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/admin"
              className="text-sm text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              ← Back to Admin
            </Link>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Contact Submissions
            </h1>
            <p className="mt-1 text-slate-600">
              View and manage inquiries from the contact form
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="">All statuses</option>
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="rounded-xl border border-stone-200 bg-white p-12 text-center">
            <p className="text-slate-600">Loading contacts...</p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="rounded-xl border border-stone-200 bg-white p-12 text-center">
            <p className="text-slate-600">No contact submissions yet.</p>
          </div>
        ) : (
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {contacts.map((contact) => (
              <motion.div
                key={contact._id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-xl border border-stone-200 bg-white p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-slate-950">
                        {contact.name}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-xs font-medium",
                          STATUS_COLORS[contact.status] ?? "bg-stone-100 text-stone-800"
                        )}
                      >
                        {contact.status}
                      </span>
                      <span className="text-xs text-slate-500">
                        {SERVICE_LABELS[contact.service] ?? contact.service}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-emerald-700 hover:underline"
                      >
                        {contact.email}
                      </a>
                      {contact.company && (
                        <span> · {contact.company}</span>
                      )}
                    </p>
                    <p className="text-sm text-slate-700 line-clamp-2">
                      {contact.message}
                    </p>
                    <p className="text-xs text-slate-500">
                      {formatDate(contact.createdAt)}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <AnimatePresence mode="wait">
                      {["new", "read", "replied"].map((s) => (
                        <button
                          key={s}
                          onClick={() =>
                            updateStatus(contact._id, s as Contact["status"])
                          }
                          disabled={updatingId === contact._id}
                          className={cn(
                            "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                            contact.status === s
                              ? "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200"
                              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {pagination && pagination.totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
            >
              Previous
            </Button>
            <span className="text-sm text-slate-600">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                setPage((p) => Math.min(pagination.totalPages, p + 1))
              }
              disabled={page >= pagination.totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
