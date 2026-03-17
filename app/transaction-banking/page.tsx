import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CaseStudySection from "@/components/CaseStudySection";
import CTASection from "@/components/CTASection";
import BankingServiceCard from "@/components/BankingServiceCard";
import { mockSolutions } from "@/lib/mockData";
import { CheckCircle2 } from "lucide-react";

const solution = mockSolutions[1]; // Transaction Banking

const capabilities = [
  {
    icon: "💵",
    title: "Cash & Liquidity Management",
    description: "Optimize cash positions across entities, currencies, and geographies with real-time visibility and intelligent sweeping.",
    stats: [{ label: "Clients using", value: "800+" }, { label: "Cash visibility", value: "100%" }],
    tag: "Cash Management",
  },
  {
    icon: "🌐",
    title: "Global Payments Hub",
    description: "Process domestic and cross-border payments across SWIFT, SEPA, Fedwire, CHAPS, and 80+ local payment rails.",
    stats: [{ label: "Payment rails", value: "100+" }, { label: "Countries covered", value: "90+" }],
    tag: "Payments",
  },
  {
    icon: "📦",
    title: "Trade Finance",
    description: "Digitize letters of credit, guarantees, collections, and supply chain finance with end-to-end workflow automation.",
    stats: [{ label: "Processing time reduction", value: "60%" }, { label: "Trade instruments", value: "25+" }],
    tag: "Trade Finance",
  },
  {
    icon: "🔄",
    title: "Supply Chain Finance",
    description: "Extend working capital solutions to buyers and suppliers with dynamic discounting and reverse factoring programs.",
    stats: [{ label: "Suppliers enrolled", value: "50K+" }, { label: "Avg APR saved", value: "2.8%" }],
    tag: "SCF",
  },
  {
    icon: "🏦",
    title: "Virtual Accounts",
    description: "Issue unlimited virtual accounts for precise payment reconciliation and efficient segregation of funds.",
    stats: [{ label: "Virtual accounts managed", value: "2M+" }, { label: "Reconciliation accuracy", value: "99.9%" }],
    tag: "Virtual Accounts",
  },
  {
    icon: "📋",
    title: "Reporting & Analytics",
    description: "Real-time transaction reporting, cash forecasting, and compliance reporting across all channels and geographies.",
    stats: [{ label: "Report types", value: "150+" }, { label: "Data latency", value: "<1 sec" }],
    tag: "Reporting",
  },
];

export default function TransactionBankingPage() {
  return (
    <>
      <HeroSection
        tag="Transaction Banking Solutions"
        title="Intelligent Transaction Banking"
        titleHighlight="for Corporate Clients"
        subtitle={solution.description}
        primaryCta={{ label: "Request a Demo", href: "/contact" }}
        secondaryCta={{ label: "Download Guide", href: "/resources" }}
        stats={solution.stats.map((s) => ({ label: s.label, value: s.value }))}
      />

      {/* Overview */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Transaction Banking</p>
              <h2 className="section-title">
                Power Corporate Banking with{" "}
                <span className="text-finPurple">Real-Time Intelligence</span>
              </h2>
              <p className="text-finGray-400 text-base leading-relaxed mt-4 mb-6">
                Our transaction banking platform gives corporate treasurers and finance teams
                complete control over their cash, payments, and trade operations — in real time,
                at global scale.
              </p>
              <ul className="space-y-3">
                {solution.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-finGray-600">
                    <CheckCircle2 size={16} className="text-finPurple flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <p className="text-blue-200 text-sm font-semibold mb-4">Treasury Dashboard</p>
                <div className="space-y-3">
                  {[
                    { label: "Total Cash Position", value: "$4.2B" },
                    { label: "Pending Payments", value: "1,247" },
                    { label: "FX Exposure", value: "$890M" },
                    { label: "Trade Lines Active", value: "342" },
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
              Complete <span className="text-finPurple">Transaction Banking</span> Suite
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <BankingServiceCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} stats={cap.stats} tag={cap.tag} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudySection limit={3} />

      <CTASection
        title="Modernize Your Transaction Banking?"
        subtitle="Connect with our team to explore how rbtblendtsy.com can transform your corporate banking operations."
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "Read Case Studies", href: "/resources" }}
      />
    </>
  );
}
