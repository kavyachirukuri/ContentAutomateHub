import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";

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
  };

  const classes = cn(base, variants[variant], sizes[size], props.className);

  if ("href" in props && typeof props.href === "string") {
    const { href, className: _c, variant: _v, size: _s, ...linkProps } =
      props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { className: _c, variant: _v, size: _s, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

