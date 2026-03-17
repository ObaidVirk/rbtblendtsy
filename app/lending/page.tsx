import HeroSection from "@/components/HeroSection";
import CaseStudySection from "@/components/CaseStudySection";
import CTASection from "@/components/CTASection";
import BankingServiceCard from "@/components/BankingServiceCard";
import { mockSolutions } from "@/lib/mockData";
import { CheckCircle2 } from "lucide-react";

const solution = mockSolutions[2]; // Lending

const capabilities = [
  {
    icon: "📋",
    title: "Loan Origination System",
    description: "Digital-first loan origination with configurable workflows for retail, SME, and commercial lending segments.",
    stats: [{ label: "Time-to-decision", value: "4 mins" }, { label: "STP rate", value: "85%" }],
    tag: "Origination",
  },
  {
    icon: "🤖",
    title: "AI Credit Decisioning",
    description: "Machine learning models that analyze hundreds of data points to deliver accurate, consistent, and explainable credit decisions.",
    stats: [{ label: "Model accuracy", value: "94%" }, { label: "Default reduction", value: "35%" }],
    tag: "AI & Risk",
  },
  {
    icon: "⚙️",
    title: "Loan Servicing & Management",
    description: "Full lifecycle loan management including disbursement, repayment scheduling, restructuring, and prepayment handling.",
    stats: [{ label: "Loan types supported", value: "30+" }, { label: "Currency support", value: "100+" }],
    tag: "Servicing",
  },
  {
    icon: "📞",
    title: "Collections Management",
    description: "Intelligent collections workflows with automated outreach, payment plans, and delinquency management.",
    stats: [{ label: "Recovery rate improvement", value: "22%" }, { label: "Agent productivity gain", value: "40%" }],
    tag: "Collections",
  },
  {
    icon: "📊",
    title: "Portfolio Risk Analytics",
    description: "Real-time portfolio monitoring with stress testing, concentration analysis, and early warning indicators.",
    stats: [{ label: "Risk metrics tracked", value: "200+" }, { label: "Reporting latency", value: "Real-time" }],
    tag: "Analytics",
  },
  {
    icon: "✅",
    title: "Compliance & Reporting",
    description: "Automated regulatory reporting for IFRS 9, Basel III, CRD IV, and local lending regulations across jurisdictions.",
    stats: [{ label: "Regulatory reports", value: "80+" }, { label: "Jurisdictions covered", value: "60+" }],
    tag: "Compliance",
  },
];

export default function LendingPage() {
  return (
    <>
      <HeroSection
        tag="Lending Solutions"
        title="Intelligent Lending from"
        titleHighlight="Application to Payoff"
        subtitle={solution.description}
        primaryCta={{ label: "Request a Demo", href: "/contact" }}
        secondaryCta={{ label: "Download Whitepaper", href: "/resources" }}
        stats={solution.stats.map((s) => ({ label: s.label, value: s.value }))}
      />

      {/* Overview */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Lending Platform</p>
              <h2 className="section-title">
                Speed and Precision in{" "}
                <span className="text-finPurple">Every Lending Decision</span>
              </h2>
              <p className="text-finGray-400 text-base leading-relaxed mt-4 mb-6">
                The rbtblendtsy.com Lending platform empowers financial institutions to lend
                smarter and faster — with AI-driven decisioning, automated origination, and
                real-time portfolio management built into one unified solution.
              </p>
              <ul className="space-y-3">
                {solution.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-finGray-600">
                    <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <p className="text-green-200 text-sm font-semibold mb-4">Portfolio Dashboard</p>
                <div className="space-y-3">
                  {[
                    { label: "Total Loan Portfolio", value: "$8.4B" },
                    { label: "Applications Today", value: "4,821" },
                    { label: "Approval Rate", value: "68%" },
                    { label: "NPL Ratio", value: "1.2%" },
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
              Complete <span className="text-finPurple">Lending Lifecycle</span> Management
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <BankingServiceCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} stats={cap.stats} tag={cap.tag} tagColor="bg-green-100 text-green-700" />
            ))}
          </div>
        </div>
      </section>

      <CaseStudySection limit={3} />

      <CTASection
        title="Transform Your Lending Business?"
        subtitle="Discover how intelligent lending technology can help you grow your portfolio responsibly."
        primaryCta={{ label: "Talk to a Specialist", href: "/contact" }}
        secondaryCta={{ label: "Download Case Study", href: "/resources" }}
      />
    </>
  );
}
