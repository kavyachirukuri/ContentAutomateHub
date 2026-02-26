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
<<<<<<< HEAD
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
=======
  businessName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  industry: z.string().optional(),
  primaryChallenge: z.string().min(10, "Primary challenge must be at least 10 characters"),
>>>>>>> 012d777 (updated to v1)
});

type ContactFormData = z.infer<typeof contactFormSchema>;

<<<<<<< HEAD
=======
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

>>>>>>> 012d777 (updated to v1)
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    try {
<<<<<<< HEAD
      const response = await axios.post("/api/contact", data);
      
      if (response.status === 200) {
        setSubmitStatus("success");
        reset();
        // Reset success message after 5 seconds
=======
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
>>>>>>> 012d777 (updated to v1)
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
<<<<<<< HEAD
      // Reset error message after 5 seconds
=======
>>>>>>> 012d777 (updated to v1)
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
<<<<<<< HEAD
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-900"
          >
=======
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0c0f14]">
>>>>>>> 012d777 (updated to v1)
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
<<<<<<< HEAD
            className={cn(
              "mt-2 block w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1",
              errors.name
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
            )}
            placeholder="John Doe"
=======
            className={cn(inputBase, errors.name && inputError)}
            placeholder="Your name"
>>>>>>> 012d777 (updated to v1)
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
<<<<<<< HEAD
                initial={{ opacity: 0, y: -10 }}
=======
                initial={{ opacity: 0, y: -4 }}
>>>>>>> 012d777 (updated to v1)
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1 text-sm text-red-600"
              >
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
<<<<<<< HEAD
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-900"
          >
=======
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-[#0c0f14]">
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
          <label htmlFor="email" className="block text-sm font-medium text-[#0c0f14]">
>>>>>>> 012d777 (updated to v1)
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
<<<<<<< HEAD
            className={cn(
              "mt-2 block w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1",
              errors.email
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
            )}
            placeholder="john@example.com"
=======
            className={cn(inputBase, errors.email && inputError)}
            placeholder="you@company.com"
>>>>>>> 012d777 (updated to v1)
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
<<<<<<< HEAD
                initial={{ opacity: 0, y: -10 }}
=======
                initial={{ opacity: 0, y: -4 }}
>>>>>>> 012d777 (updated to v1)
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-1 text-sm text-red-600"
              >
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
<<<<<<< HEAD
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label
          htmlFor="company"
          className="block text-sm font-medium text-slate-900"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          {...register("company")}
          className="mt-2 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="Your Company"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-900"
        >
          Service Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          {...register("service")}
          className={cn(
            "mt-2 block w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-1",
            errors.service
              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
              : "border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
          )}
        >
          <option value="">Select a service</option>
          <option value="ai-content">AI Content Creation</option>
          <option value="automation">Automation Solutions</option>
          <option value="saas">SaaS & Web Applications</option>
          <option value="websites">Website Development</option>
          <option value="multiple">Multiple Services</option>
          <option value="other">Other</option>
        </select>
        <AnimatePresence>
          {errors.service && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.service.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-900"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className={cn(
            "mt-2 block w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1",
            errors.message
              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
              : "border-stone-300 focus:border-emerald-500 focus:ring-emerald-500"
          )}
          placeholder="Tell us about your project..."
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
=======
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0c0f14]">
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
        <label htmlFor="industry" className="block text-sm font-medium text-[#0c0f14]">
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
        <label htmlFor="primaryChallenge" className="block text-sm font-medium text-[#0c0f14]">
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
>>>>>>> 012d777 (updated to v1)
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1 text-sm text-red-600"
            >
<<<<<<< HEAD
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
=======
              {errors.primaryChallenge.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
>>>>>>> 012d777 (updated to v1)

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-md bg-emerald-50 p-4"
          >
            <p className="text-sm font-medium text-emerald-800">
              Thank you! Your message has been sent. We'll get back to you soon.
            </p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-md bg-red-50 p-4"
=======
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-[#d4af37]/40 bg-[#d4af37]/10 p-4"
          >
            <p className="text-sm font-medium text-[#0c0f14]">
              Thank you! Your message has been sent. We&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-red-200 bg-red-50 p-4"
>>>>>>> 012d777 (updated to v1)
          >
            <p className="text-sm font-medium text-red-800">
              Something went wrong. Please try again or contact us directly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
=======
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Book My Strategy Call"}
      </Button>
>>>>>>> 012d777 (updated to v1)
    </motion.form>
  );
}
