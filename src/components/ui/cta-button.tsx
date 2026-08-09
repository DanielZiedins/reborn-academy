import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  icon?: boolean;
};

export function CtaButton({ href, children, variant = "primary", className = "", icon = true }: Props) {
  const base = "btn";
  const variantClass =
    variant === "primary" ? "btn-red" : variant === "outline" ? "btn-outline" : "btn-ghost";

  return (
    <Link href={href} className={`${base} ${variantClass} ${className}`}>
      {children}
      {icon && <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}
