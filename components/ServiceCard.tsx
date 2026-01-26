import Link from "next/link";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  const card = (
    <div
      className={cn(
        "rounded-xl border border-stone-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.06)]",
        "motion-safe:transition-[border-color,box-shadow,transform] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_10px_30px_rgba(2,44,34,0.08)]",
        className,
      )}
    >
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      {card}
    </Link>
  );
}

