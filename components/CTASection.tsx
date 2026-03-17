import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "purple" | "dark" | "light";
}

export default function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  variant = "purple",
}: CTASectionProps) {
  const bgClass =
    variant === "purple"
      ? "hero-bg"
      : variant === "dark"
      ? "bg-finBlue"
      : "bg-finGray-50";

  const textClass =
    variant === "light" ? "text-finBlue" : "text-white";

  const subtitleClass =
    variant === "light" ? "text-finGray-500" : "text-gray-300";

  return (
    <section className={`${bgClass} section-padding relative overflow-hidden`}>
      {(variant === "purple" || variant === "dark") && (
        <>
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
        </>
      )}
      <div className="container-max text-center relative z-10">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 ${textClass}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg max-w-xl mx-auto mb-8 ${subtitleClass}`}>{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 group ${
              variant === "light"
                ? "bg-finPurple text-white hover:bg-finPurple-dark shadow-lg"
                : "bg-white text-finPurple hover:bg-gray-50 shadow-lg"
            }`}
          >
            {primaryCta.label}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 transition-all duration-200 ${
                variant === "light"
                  ? "border-finPurple text-finPurple hover:bg-finPurple hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-finPurple"
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
