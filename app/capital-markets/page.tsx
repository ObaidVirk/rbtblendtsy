import HeroSection from "@/components/HeroSection";
import CaseStudySection from "@/components/CaseStudySection";
import CTASection from "@/components/CTASection";
import BankingServiceCard from "@/components/BankingServiceCard";
import { mockSolutions } from "@/lib/mockData";
import { CheckCircle2 } from "lucide-react";

const solution = mockSolutions[4]; // Capital Markets

const capabilities = [
  {
    icon: "⚡",
    title: "Trading Systems",
    description: "High-performance electronic trading infrastructure supporting equities, fixed income, FX, and derivatives across major exchanges and venues.",
    stats: [{ label: "Trade latency", value: "<1ms" }, { label: "Asset classes", value: "50+" }],
    tag: "Trading",
  },
  {
    icon: "📉",
    title: "Risk Management",
    description: "Comprehensive pre-trade, intra-day, and post-trade risk analytics including VaR, PnL attribution, and stress testing.",
    stats: [{ label: "Risk models", value: "25+" }, { label: "Risk calculation time", value: "Real-time" }],
    tag: "Risk",
  },
  {
    icon: "🔄",
    title: "Post-Trade Processing",
    description: "Automated trade confirmation, affirmation, settlement, and reconciliation across custodians and counterparties globally.",
    stats: [{ label: "STP rate", value: "98%" }, { label: "Settlement accuracy", value: "99.99%" }],
    tag: "Post-Trade",
  },
  {
    icon: "⚖️",
    title: "Compliance & Surveillance",
    description: "Real-time market surveillance, trade surveillance, and automated regulatory reporting for MiFID II, Dodd-Frank, EMIR, and more.",
    stats: [{ label: "Alert scenarios", value: "200+" }, { label: "Regulatory frameworks", value: "60+" }],
    tag: "Compliance",
  },
  {
    icon: "📡",
    title: "Market Data Management",
    description: "Normalize, enrich, and distribute market data from 100+ providers including Bloomberg, Refinitiv, and exchange direct feeds.",
    stats: [{ label: "Data providers", value: "100+" }, { label: "Instruments covered", value: "5M+" }],
    tag: "Market Data",
  },
  {
    icon: "🧮",
    title: "Front Office Analytics",
    description: "Advanced quantitative analytics for pricing, structuring, and portfolio analysis across all capital markets asset classes.",
    stats: [{ label: "Pricing models", value: "500+" }, { label: "Quant functions", value: "2,000+" }],
    tag: "Analytics",
  },
];

export default function CapitalMarketsPage() {
  return (
    <>
      <HeroSection
        tag="Capital Markets Solutions"
        title="Next-Generation Capital Markets"
        titleHighlight="Infrastructure"
        subtitle={solution.description}
        primaryCta={{ label: "Request a Demo", href: "/contact" }}
        secondaryCta={{ label: "Download Brochure", href: "/resources" }}
        stats={solution.stats.map((s) => ({ label: s.label, value: s.value }))}
      />

      {/* Overview */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Capital Markets</p>
              <h2 className="section-title">
                Power Every Aspect of{" "}
                <span className="text-finPurple">Capital Markets</span>
              </h2>
              <p className="text-finGray-400 text-base leading-relaxed mt-4 mb-6">
                rbtblendtsy.com provides a unified technology platform for the world's most
                sophisticated capital markets operations. From front-office trading to post-trade
                settlement, our platform delivers speed, accuracy, and regulatory confidence.
              </p>
              <ul className="space-y-3">
                {solution.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-finGray-600">
                    <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <p className="text-indigo-200 text-sm font-semibold mb-4">Markets Dashboard</p>
                <div className="space-y-3">
                  {[
                    { label: "Trades Today", value: "842,340" },
                    { label: "Daily Notional", value: "$820B" },
                    { label: "Open Positions", value: "12,450" },
                    { label: "VaR (99% 1D)", value: "$42M" },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center justify-between glass-card rounded-xl px-4 py-3">
                      <span className="text-sm text-white/80">{m.label}</span>
                      <span className="text-white font-bold text-sm">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-finGray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Capabilities</p>
            <h2 className="section-title">
              Full-Spectrum <span className="text-finPurple">Capital Markets</span> Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <BankingServiceCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} stats={cap.stats} tag={cap.tag} tagColor="bg-indigo-100 text-indigo-700" />
            ))}
          </div>
        </div>
      </section>

      <CaseStudySection limit={3} />

      <CTASection
        title="Elevate Your Capital Markets Operations?"
        subtitle="Connect with our capital markets specialists to build the right technology stack for your institution."
        primaryCta={{ label: "Talk to a Specialist", href: "/contact" }}
        secondaryCta={{ label: "Read Insights", href: "/resources" }}
      />
    </>
  );
}
