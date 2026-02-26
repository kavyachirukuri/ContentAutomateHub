<<<<<<< HEAD
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";
=======
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const motionLinkProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.15 },
};

const motionButtonProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.15 },
};
>>>>>>> 012d777 (updated to v1)

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  const children = props.children;
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";

  const base =
<<<<<<< HEAD
    "inline-flex items-center justify-center rounded-md font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 motion-safe:transition-[color,background-color,border-color,box-shadow,transform] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-emerald-950 text-white hover:bg-emerald-900 active:bg-emerald-950 hover:shadow-md",
    secondary:
      "border border-emerald-200 bg-white text-emerald-950 hover:border-emerald-300 hover:bg-emerald-50/70 active:bg-emerald-50/70 hover:shadow-md",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
=======
    "inline-flex items-center justify-center rounded-md font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0f14] disabled:pointer-events-none disabled:opacity-50 transition-all duration-200";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#d4af37] text-[#0c0f14] hover:bg-[#e5c76b] active:bg-[#b8962e] shadow-md hover:shadow-lg hover:shadow-[#d4af37]/25",
    secondary:
      "border-2 border-[#d4af37] bg-transparent text-[#d4af37] hover:bg-[#d4af37]/10",
    outline:
      "border border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base",
>>>>>>> 012d777 (updated to v1)
  };

  const classes = cn(base, variants[variant], sizes[size], props.className);

  if ("href" in props && typeof props.href === "string") {
<<<<<<< HEAD
    const { href, className: _c, variant: _v, size: _s, ...linkProps } =
      props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
=======
    const { href, className: _c, variant: _v, size: _s, ...linkProps } = props;
    return (
      <motion.div className="inline-block" {...motionLinkProps}>
        <Link href={href} className={classes} {...linkProps}>
          {children}
        </Link>
      </motion.div>
>>>>>>> 012d777 (updated to v1)
    );
  }

  const { className: _c, variant: _v, size: _s, ...buttonProps } = props;
  return (
<<<<<<< HEAD
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

=======
    <motion.button className={classes} {...motionButtonProps} {...buttonProps}>
      {children}
    </motion.button>
  );
}
>>>>>>> 012d777 (updated to v1)
