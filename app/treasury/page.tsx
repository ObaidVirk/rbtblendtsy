import HeroSection from "@/components/HeroSection";
import CaseStudySection from "@/components/CaseStudySection";
import CTASection from "@/components/CTASection";
import BankingServiceCard from "@/components/BankingServiceCard";
import { mockSolutions } from "@/lib/mockData";
import { CheckCircle2 } from "lucide-react";

const solution = mockSolutions[3]; // Treasury

const capabilities = [
  {
    icon: "💧",
    title: "Cash & Liquidity Management",
    description: "Achieve real-time visibility and control over global cash positions with intelligent pooling, sweeping, and funding strategies.",
    stats: [{ label: "Liquidity optimized", value: "$500B+" }, { label: "Manual tasks automated", value: "80%" }],
    tag: "Liquidity",
  },
  {
    icon: "💱",
    title: "FX Risk Management",
    description: "Identify, measure, and hedge foreign exchange exposures with integrated market data and automated hedging workflows.",
    stats: [{ label: "Currencies supported", value: "150+" }, { label: "FX instruments", value: "30+" }],
    tag: "FX Risk",
  },
  {
    icon: "📈",
    title: "Interest Rate Management",
    description: "Manage interest rate risk across assets and liabilities with comprehensive gap analysis, duration management, and hedging tools.",
    stats: [{ label: "IR models", value: "15+" }, { label: "Scenario analyses", value: "Unlimited" }],
    tag: "IR Risk",
  },
  {
    icon: "💼",
    title: "Investment Portfolio Management",
    description: "Optimize short-term investments with configurable limits, maturity ladders, and automated investment policy compliance.",
    stats: [{ label: "Asset classes", value: "20+" }, { label: "Return improvement", value: "0.4%" }],
    tag: "Investments",
  },
  {
    icon: "🤝",
    title: "Counterparty Risk",
    description: "Monitor and manage counterparty credit exposures across all treasury instruments with real-time limit checking.",
    stats: [{ label: "Risk engines", value: "5+" }, { label: "Counterparties supported", value: "Unlimited" }],
    tag: "Credit Risk",
  },
  {
    icon: "📋",
    title: "Regulatory & Board Reporting",
    description: "Generate automated regulatory reports for LCR, NSFR, IRRBB, and board-level treasury reports with single-click publishing.",
    stats: [{ label: "Report templates", value: "120+" }, { label: "Regulatory standards", value: "30+" }],
    tag: "Reporting",
  },
];

export default function TreasuryPage() {
  return (
    <>
      <HeroSection
        tag="Treasury Solutions"
        title="Total Treasury Visibility"
        titleHighlight="and Control"
        subtitle={solution.description}
        primaryCta={{ label: "Request a Demo", href: "/contact" }}
        secondaryCta={{ label: "Treasury Brochure", href: "/resources" }}
        stats={solution.stats.map((s) => ({ label: s.label, value: s.value }))}
      />

      {/* Overview */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Treasury Management</p>
              <h2 className="section-title">
                Intelligent Treasury for the{" "}
                <span className="text-finPurple">Digital Age</span>
              </h2>
              <p className="text-finGray-400 text-base leading-relaxed mt-4 mb-6">
                rbtblendtsy.com Treasury Management Solution provides banks and corporates with
                the intelligence and automation they need to optimize liquidity, manage risk,
                and meet regulatory requirements — all from a single platform.
              </p>
              <ul className="space-y-3">
                {solution.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-finGray-600">
                    <CheckCircle2 size={16} className="text-orange-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <p className="text-orange-200 text-sm font-semibold mb-4">Treasury Metrics</p>
                <div className="space-y-3">
                  {[
                    { label: "Net Cash Position", value: "$12.8B" },
                    { label: "FX Hedging Ratio", value: "82%" },
                    { label: "LCR Ratio", value: "138%" },
                    { label: "Investment Yield", value: "4.2%" },
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
              Comprehensive <span className="text-finPurple">Treasury</span> Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <BankingServiceCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} stats={cap.stats} tag={cap.tag} tagColor="bg-orange-100 text-orange-700" />
            ))}
          </div>
        </div>
      </section>

      <CaseStudySection limit={3} />

      <CTASection
        title="Optimize Your Treasury Operations?"
        subtitle="Discover how leading banks use rbtblendtsy.com to achieve real-time treasury intelligence."
        primaryCta={{ label: "Request a Demo", href: "/contact" }}
        secondaryCta={{ label: "View Resources", href: "/resources" }}
      />
    </>
  );
}
