interface FeatureSectionProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  columns?: 2 | 3 | 4;
  background?: "white" | "gray" | "purple";
}

export default function FeatureSection({
  tag,
  title,
  titleHighlight,
  subtitle,
  features,
  columns = 3,
  background = "white",
}: FeatureSectionProps) {
  const bgClass =
    background === "gray"
      ? "bg-finGray-50"
      : background === "purple"
      ? "bg-hero-gradient"
      : "bg-white";

  const isColoredBg = background === "purple";

  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className={`${bgClass} section-padding`}>
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16">
          {tag && (
            <p
              className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
                isColoredBg ? "text-primary-200" : "text-finPurple"
              }`}
            >
              {tag}
            </p>
          )}
          <h2
            className={`text-3xl md:text-4xl font-bold leading-tight ${
              isColoredBg ? "text-white" : "text-finBlue"
            }`}
          >
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className={isColoredBg ? "text-primary-300" : "text-finPurple"}>
                  {titleHighlight}
                </span>
              </>
            )}
          </h2>
          {subtitle && (
            <p
              className={`mt-4 text-base md:text-lg max-w-2xl mx-auto ${
                isColoredBg ? "text-gray-300" : "text-finGray-400"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 ${colClass} gap-6 md:gap-8`}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                isColoredBg
                  ? "glass-card hover:bg-white/15"
                  : "bg-white border border-finGray-100 hover:border-finPurple/20 hover:shadow-card"
              }`}
            >
              <div
                className={`w-13 h-13 text-3xl mb-5 w-14 h-14 rounded-xl flex items-center justify-center ${
                  isColoredBg
                    ? "bg-white/10"
                    : "bg-gradient-to-br from-primary-50 to-primary-100"
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-lg font-bold mb-3 ${
                  isColoredBg ? "text-white" : "text-finBlue"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isColoredBg ? "text-gray-300" : "text-finGray-400"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
