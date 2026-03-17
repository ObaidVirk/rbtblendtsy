import HeroSection from "@/components/HeroSection";
import SolutionCard from "@/components/SolutionCard";
import CTASection from "@/components/CTASection";
import { mockSolutions } from "@/lib/mockData";

export default function SolutionsPage() {
  return (
    <>
      <HeroSection
        tag="All Solutions"
        title="Financial Technology Solutions for"
        titleHighlight="Every Institution"
        subtitle="Whether you're a global tier-1 bank, a regional institution, or an emerging fintech — rbtblendtsy.com has the right solution for your needs."
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "Download Overview", href: "/resources" }}
        compact
      />

      {/* Solutions Grid */}
      <section className="bg-finGray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Portfolio</p>
            <h2 className="section-title">
              Solutions Across{" "}
              <span className="text-finPurple">Every Domain</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockSolutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                href={`/${solution.slug}`}
                variant="featured"
                gradient={solution.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solution Comparison Table */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Compare Solutions</p>
            <h2 className="section-title">
              Find the Right{" "}
              <span className="text-finPurple">Solution</span> For You
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-finGray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-finGray-50">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-finGray-500 uppercase tracking-wider w-48">Feature</th>
                  {mockSolutions.map((s) => (
                    <th key={s.id} className="text-center px-4 py-4 text-xs font-semibold text-finGray-700 uppercase tracking-wider">
                      {s.shortTitle}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-finGray-50">
                {[
                  "AI & Machine Learning",
                  "Real-time Processing",
                  "Mobile Support",
                  "API-First",
                  "Cloud Native",
                  "Multi-currency",
                  "Regulatory Reporting",
                ].map((feature, idx) => (
                  <tr key={feature} className={idx % 2 === 0 ? "bg-white" : "bg-finGray-50/30"}>
                    <td className="px-6 py-4 font-medium text-finGray-700">{feature}</td>
                    {mockSolutions.map((s) => (
                      <td key={s.id} className="px-4 py-4 text-center">
                        <span className="text-green-500 text-lg">✓</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Solution is Right?"
        subtitle="Our fintech experts will help you identify the best solution combination for your institution."
        primaryCta={{ label: "Speak to an Expert", href: "/contact" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
        variant="dark"
      />
    </>
  );
}
