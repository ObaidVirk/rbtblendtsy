import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: { label: string; value: string; icon?: string }[];
  compact?: boolean;
}

export default function HeroSection({
  tag,
  title,
  titleHighlight,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  compact = false,
}: HeroSectionProps) {
  return (
    <section className={`hero-bg relative overflow-hidden ${compact ? "pt-28 pb-16" : "pt-28 pb-20 md:pt-36 md:pb-28"}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-500/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-max px-4 md:px-8 lg:px-16 relative z-10">
        <div className={compact ? "max-w-3xl" : "max-w-4xl"}>
          {tag && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full text-sm font-semibold text-primary-200 mb-6">
              <span className="w-1.5 h-1.5 bg-primary-300 rounded-full animate-pulse" />
              {tag}
            </div>
          )}
          <h1 className={`font-bold text-white leading-tight ${compact ? "text-3xl md:text-4xl lg:text-5xl" : "text-4xl md:text-5xl lg:text-6xl"}`}>
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-primary-300">{titleHighlight}</span>
              </>
            )}
          </h1>
          <p className={`text-gray-300 mt-5 leading-relaxed ${compact ? "text-base md:text-lg max-w-2xl" : "text-lg md:text-xl max-w-2xl"}`}>
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="btn-white inline-flex items-center gap-2 group"
                >
                  {primaryCta.label}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-outline-white">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>

        {stats && (
          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-5 md:p-6 text-center">
                {stat.icon && <div className="text-2xl mb-2">{stat.icon}</div>}
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
