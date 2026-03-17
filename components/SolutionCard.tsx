import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  href: string;
  gradient?: string;
  variant?: "default" | "featured" | "minimal";
}

export default function SolutionCard({
  icon,
  title,
  description,
  features,
  href,
  gradient = "from-finPurple to-finPurple-dark",
  variant = "default",
}: SolutionCardProps) {
  if (variant === "featured") {
    return (
      <Link href={href} className="group block">
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 text-white h-full card-hover shadow-lg`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <span className="text-4xl block mb-4">{icon}</span>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-5">{description}</p>
            {features && (
              <ul className="space-y-1.5 mb-6">
                {features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:text-white">
              Explore Solution
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "minimal") {
    return (
      <Link href={href} className="group block">
        <div className="bg-white rounded-xl p-6 border border-finGray-100 hover:border-finPurple/30 hover:shadow-card transition-all duration-300 h-full">
          <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl mb-4">
            {icon}
          </div>
          <h3 className="font-semibold text-finBlue text-base mb-2">{title}</h3>
          <p className="text-finGray-400 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex items-center gap-1 text-sm font-medium text-finPurple group-hover:gap-2 transition-all duration-200">
            Learn more
            <ArrowRight size={13} />
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl p-7 border border-finGray-100 hover:border-finPurple/20 shadow-sm hover:shadow-card transition-all duration-300 h-full card-hover">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-5 shadow-md group-hover:scale-110 transition-transform duration-200`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-finBlue mb-3">{title}</h3>
        <p className="text-finGray-400 text-sm leading-relaxed mb-5">{description}</p>
        {features && (
          <ul className="space-y-2 mb-5">
            {features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-finGray-500">
                <span className="w-4 h-4 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-finPurple rounded-full" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center gap-1.5 text-sm font-semibold text-finPurple group-hover:gap-2.5 transition-all duration-200">
          Learn More
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
}
