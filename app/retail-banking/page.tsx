import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CaseStudySection from "@/components/CaseStudySection";
import CTASection from "@/components/CTASection";
import BankingServiceCard from "@/components/BankingServiceCard";
import { mockSolutions } from "@/lib/mockData";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const solution = mockSolutions[0]; // Retail Banking

const capabilities = [
  {
    icon: "🏛️",
    title: "Core Banking Modernization",
    description: "Replace legacy systems with a cloud-native core banking platform that processes millions of transactions with sub-second latency.",
    stats: [{ label: "Banks migrated", value: "300+" }, { label: "Downtime during migration", value: "Zero" }],
    tag: "Core Banking",
  },
  {
    icon: "📱",
    title: "Digital Banking Channels",
    description: "Deliver seamless digital experiences across web, mobile, and API channels with a single unified platform.",
    stats: [{ label: "Mobile app rating", value: "4.9/5" }, { label: "Digital adoption rate", value: "87%" }],
    tag: "Digital",
  },
  {
    icon: "💳",
    title: "Payments & Cards",
    description: "Issue and manage debit, credit, and prepaid cards integrated with global payment networks including Visa, Mastercard, and UnionPay.",
    stats: [{ label: "Card schemes supported", value: "15+" }, { label: "Payment rails", value: "50+" }],
    tag: "Payments",
  },
  {
    icon: "🧠",
    title: "AI-Powered Personalization",
    description: "Use customer data intelligence to deliver hyper-personalized product recommendations, offers, and financial advice.",
    stats: [{ label: "Cross-sell increase", value: "3.2x" }, { label: "Customer churn reduction", value: "28%" }],
    tag: "AI & Analytics",
  },
  {
    icon: "🔒",
    title: "Fraud & Risk Management",
    description: "Real-time fraud detection powered by machine learning models that block threats before they impact customers.",
    stats: [{ label: "Fraud detection rate", value: "99.7%" }, { label: "False positive reduction", value: "60%" }],
    tag: "Security",
  },
  {
    icon: "⚖️",
    title: "Regulatory Compliance",
    description: "Built-in compliance for global and regional regulations including PSD2, GDPR, AML/KYC, and Basel III.",
    stats: [{ label: "Regulatory frameworks", value: "40+" }, { label: "Audit time reduction", value: "75%" }],
    tag: "Compliance",
  },
];

export default function RetailBankingPage() {
  return (
    <>
      <HeroSection
        tag="Retail Banking Solutions"
        title="Modern Core Banking for"
        titleHighlight="Millions of Customers"
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
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title">
                Transform Retail Banking with{" "}
                <span className="text-finPurple">Intelligent Technology</span>
              </h2>
              <p className="text-finGray-400 text-base leading-relaxed mt-4 mb-6">
                rbtblendtsy.com retail banking platform enables financial institutions to rapidly
                modernize and deliver the digital experiences their customers demand, while
                maintaining the security and reliability that banking requires.
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
            <div className="bg-gradient-to-br from-purple-600 to-purple-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <p className="text-purple-200 text-sm font-semibold mb-4">Platform Dashboard Preview</p>
                <div className="space-y-3">
                  {[
                    { label: "Active Accounts", value: "12.4M", change: "+8.3%" },
                    { label: "Daily Transactions", value: "$2.1B", change: "+12.1%" },
                    { label: "Customer NPS", value: "72", change: "+5pts" },
                    { label: "Digital Adoption", value: "87%", change: "+11%" },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center justify-between glass-card rounded-xl px-4 py-3">
                      <span className="text-sm text-white/80">{m.label}</span>
                      <div className="text-right">
                        <span className="text-white font-bold text-sm">{m.value}</span>
                        <span className="text-green-300 text-xs ml-2">{m.change}</span>
                      </div>
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
              End-to-End <span className="text-finPurple">Retail Banking</span> Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <BankingServiceCard
                key={cap.title}
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
                stats={cap.stats}
                tag={cap.tag}
              />
            ))}
          </div>
        </div>
      </section>

      <CaseStudySection limit={3} />

      <CTASection
        title="Ready to Modernize Your Retail Bank?"
        subtitle="Join 3,000+ banks globally transforming with rbtblendtsy.com retail banking solutions."
        primaryCta={{ label: "Get Started Today", href: "/contact" }}
        secondaryCta={{ label: "View Case Studies", href: "/resources" }}
      />
    </>
  );
}
