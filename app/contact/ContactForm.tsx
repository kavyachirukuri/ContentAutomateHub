"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  industry: z.string().optional(),
  primaryChallenge: z
    .string()
    .min(10, "Primary challenge must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const INDUSTRY_OPTIONS = [
  "",
  "Real Estate",
  "Professional Services",
  "E-commerce",
  "Healthcare",
  "Technology",
  "Retail",
  "Other",
];

const inputBase =
  "mt-2 block w-full rounded-md border bg-white px-3 py-2.5 text-sm text-[#0c0f14] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-1 focus:border-[#d4af37]";
const inputError = "border-red-400 focus:ring-red-400 focus:border-red-400";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await axios.post("/api/contact", {
        name: data.name,
        email: data.email,
        company: data.businessName,
        phone: data.phone,
        industry: data.industry,
        service: "other",
        message: data.primaryChallenge,
      });
      if (response.status === 200) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#0c0f14]"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={cn(inputBase, errors.name && inputError)}
            placeholder="Your name"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1 text-sm text-red-600"
              >
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label
            htmlFor="businessName"
            className="block text-sm font-medium text-[#0c0f14]"
          >
            Business name
          </label>
          <input
            type="text"
            id="businessName"
            {...register("businessName")}
            className={cn(inputBase, "border-[#0c0f14]/20")}
            placeholder="Your business name"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#0c0f14]"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={cn(inputBase, errors.email && inputError)}
            placeholder="you@company.com"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1 text-sm text-red-600"
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#0c0f14]"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className={cn(inputBase, "border-[#0c0f14]/20")}
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-[#0c0f14]"
        >
          Industry
        </label>
        <select
          id="industry"
          {...register("industry")}
          className={cn(inputBase, "border-[#0c0f14]/20")}
        >
          {INDUSTRY_OPTIONS.map((opt) => (
            <option key={opt || "blank"} value={opt}>
              {opt || "Select industry"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="primaryChallenge"
          className="block text-sm font-medium text-[#0c0f14]"
        >
          Primary challenge <span className="text-red-500">*</span>
        </label>
        <textarea
          id="primaryChallenge"
          rows={5}
          {...register("primaryChallenge")}
          className={cn(inputBase, errors.primaryChallenge && inputError)}
          placeholder="What's your biggest challenge right now? How can we help?"
        />
        <AnimatePresence>
          {errors.primaryChallenge && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.primaryChallenge.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-[#d4af37]/40 bg-[#d4af37]/10 p-4"
          >
            <p className="text-sm font-medium text-[#0c0f14]">
              Thank you! Your message has been sent. We&apos;ll get back to you
              soon.
            </p>
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-red-200 bg-red-50 p-4"
          >
            <p className="text-sm font-medium text-red-800">
              Something went wrong. Please try again or contact us directly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Book My Strategy Call"}
      </Button>
    </motion.form>
  );
}
