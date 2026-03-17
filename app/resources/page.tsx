import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { mockResources } from "@/lib/mockData";

const typeColors: Record<string, string> = {
  Whitepaper: "bg-purple-100 text-purple-700",
  Webinar: "bg-blue-100 text-blue-700",
  "Case Study": "bg-green-100 text-green-700",
  Report: "bg-indigo-100 text-indigo-700",
  Blog: "bg-pink-100 text-pink-700",
  Guide: "bg-orange-100 text-orange-700",
};

const categories = ["All", "Whitepapers", "Case Studies", "Webinars", "Blog", "Reports", "Guides"];

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        tag="Resource Center"
        title="Insights for the Future"
        titleHighlight="of Finance"
        subtitle="Stay ahead with the latest research, guides, webinars, and case studies from the rbtblendtsy.com team and industry experts."
        primaryCta={{ label: "Subscribe to Insights", href: "/contact" }}
        compact
      />

      {/* Resources */}
      <section className="bg-white section-padding">
        <div className="container-max">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  idx === 0
                    ? "bg-finPurple text-white shadow-md"
                    : "bg-finGray-100 text-finGray-600 hover:bg-finPurple hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockResources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-finGray-100 overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Card Type Bar */}
                <div className="h-1.5 bg-gradient-to-r from-finPurple to-finPurple-light" />
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`tag text-xs ${
                        typeColors[resource.type] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {resource.type}
                    </span>
                    <span className="text-xs text-finGray-300">({resource.tag})</span>
                  </div>
                  <h3 className="text-lg font-bold text-finBlue mb-3 leading-snug group-hover:text-finPurple transition-colors duration-200">
                    {resource.title}
                  </h3>
                  <p className="text-finGray-400 text-sm leading-relaxed mb-5">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-finGray-400">
                    <span>{resource.date}</span>
                    <span className="text-finGray-300">•</span>
                    <span>{resource.readTime}</span>
                  </div>
                </div>
                <div className="px-7 pb-6 border-t border-finGray-50 pt-4">
                  <button className="text-sm font-semibold text-finPurple hover:underline flex items-center gap-1">
                    {resource.type === "Webinar" ? "Watch Now" : "Read Now"} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">Load More Resources</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-finGray-50 section-padding">
        <div className="container-max">
          <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 relative z-10">
              Never Miss an Insight
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto relative z-10">
              Join 50,000+ fintech professionals receiving our weekly digest of industry insights,
              product updates, and expert analysis.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
              />
              <button type="submit" className="btn-white text-sm px-6 py-3 rounded-xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for Custom Research?"
        subtitle="Our advisory team produces bespoke reports and analysis for financial institutions."
        primaryCta={{ label: "Contact Advisory Team", href: "/contact" }}
        variant="dark"
      />
    </>
  );
}
