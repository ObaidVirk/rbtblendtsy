import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, TrendingUp, Shield, Globe, Zap } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import SolutionCard from "@/components/SolutionCard";
import FeatureSection from "@/components/FeatureSection";
import CaseStudySection from "@/components/CaseStudySection";
import CTASection from "@/components/CTASection";
import { mockSolutions, mockPlatformFeatures } from "@/lib/mockData";

const partnerLogos = [
  { name: "Mastercard", icon: "💳" },
  { name: "SWIFT", icon: "🌐" },
  { name: "Visa", icon: "💰" },
  { name: "AWS", icon: "☁️" },
  { name: "Microsoft Azure", icon: "🔷" },
  { name: "Oracle", icon: "🔴" },
  { name: "Bloomberg", icon: "📊" },
  { name: "Refinitiv", icon: "📈" },
];

const highlights = [
  "Core banking modernization",
  "Real-time payment rails",
  "AI-powered credit decisioning",
  "Cloud-native deployment",
  "Open API ecosystem",
  "Regulatory compliance built-in",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HomeHero />

      {/* Partners / Trust Bar */}
      <section className="bg-white border-b border-finGray-100 py-10">
        <div className="container-max px-4 md:px-8 lg:px-16">
          <p className="text-center text-xs font-semibold text-finGray-400 uppercase tracking-widest mb-8">
            Trusted by leading financial institutions & ecosystem partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partnerLogos.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 text-finGray-400 hover:text-finPurple transition-colors duration-200 cursor-pointer"
              >
                <span className="text-xl">{p.icon}</span>
                <span className="text-sm font-semibold">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-finGray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-label">Our Solutions</p>
            <h2 className="section-title">
              Comprehensive{" "}
              <span className="text-finPurple">Fintech Solutions</span>
              <br className="hidden md:block" /> for Every Financial Institution
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              From retail banking to capital markets — our modular platform covers every dimension
              of modern financial services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mockSolutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                href={`/${solution.slug}`}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/solutions" className="btn-primary inline-flex items-center gap-2 group">
              View All Solutions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why rbtblendtsy */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Content */}
            <div>
              <p className="section-label">Why rbtblendtsy.com</p>
              <h2 className="section-title">
                Built for the{" "}
                <span className="text-finPurple">Modern Banking</span> Era
              </h2>
              <p className="text-finGray-400 text-base leading-relaxed mt-4 mb-8">
                Financial institutions globally trust rbtblendtsy.com to power their most critical
                operations. Our platform combines decades of financial expertise with cutting-edge
                technology to deliver results that matter.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-finGray-600">
                    <CheckCircle2 size={16} className="text-finPurple flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/platform" className="btn-primary">
                  Explore Platform
                </Link>
                <Link href="/about" className="btn-secondary">
                  Our Story
                </Link>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="bg-hero-gradient rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <p className="text-primary-200 font-semibold text-sm uppercase tracking-wider mb-6">
                    Platform at a Glance
                  </p>
                  <div className="space-y-5">
                    {[
                      { icon: <TrendingUp size={18} />, label: "Real-time Analytics", value: "Live" },
                      { icon: <Shield size={18} />, label: "Security Status", value: "✓ Protected" },
                      { icon: <Globe size={18} />, label: "Global Coverage", value: "130+ Countries" },
                      { icon: <Zap size={18} />, label: "System Uptime", value: "99.99%" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between glass-card rounded-xl px-4 py-3">
                        <div className="flex items-center gap-3 text-white/80">
                          {item.icon}
                          <span className="text-sm">{item.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <button className="btn-white text-sm px-5 py-2.5 rounded-xl flex items-center gap-2">
                      <Play size={14} /> Demo Video
                    </button>
                    <Link href="/contact" className="btn-outline-white text-sm px-5 py-2.5 rounded-xl">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <FeatureSection
        tag="Platform Capabilities"
        title="Enterprise-Grade Technology"
        titleHighlight="Built for Scale"
        subtitle="Everything your financial institution needs to compete and grow in the digital-first era."
        features={mockPlatformFeatures}
        background="gray"
        columns={3}
      />

      {/* Retail Banking Spotlight */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-600 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl order-2 lg:order-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="space-y-4 relative z-10">
                <p className="text-purple-200 text-xs font-semibold uppercase tracking-widest">Retail Banking</p>
                <h3 className="text-2xl font-bold">Modern Core Banking for Millions</h3>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Serve millions of customers with a cloud-native core banking platform that delivers
                  personalized experiences across every channel.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { value: "3,000+", label: "Banks served" },
                    { value: "$500B+", label: "Daily transactions" },
                    { value: "98%", label: "Satisfaction rate" },
                    { value: "99ms", label: "Avg response time" },
                  ].map((s) => (
                    <div key={s.label} className="glass-card rounded-xl p-3">
                      <p className="text-xl font-bold text-white">{s.value}</p>
                      <p className="text-purple-200 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/retail-banking" className="btn-white text-sm inline-flex items-center gap-2 mt-2 group">
                  Explore Retail Banking
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label">Retail Banking</p>
              <h2 className="section-title">
                Reimagine the{" "}
                <span className="text-finPurple">Banking Experience</span>
              </h2>
              <p className="text-finGray-400 text-base leading-relaxed mt-4 mb-6">
                Our retail banking suite delivers end-to-end capabilities from digital onboarding
                to intelligent customer engagement — all on a single unified platform.
              </p>
              <ul className="space-y-3">
                {["Omnichannel digital banking", "Intelligent loan origination", "Personalized wealth management", "Real-time fraud detection"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-finGray-600">
                    <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-purple-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/retail-banking" className="btn-primary mt-7 inline-flex items-center gap-2 group">
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Banking & Lending row */}
      <section className="bg-finGray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Transaction Banking */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <span className="text-3xl block mb-4">💼</span>
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-2">Transaction Banking</p>
                <h3 className="text-xl font-bold mb-3">Smart Corporate Banking</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-5">
                  Power corporate treasury, cash management, and global payments with intelligent automation and real-time visibility.
                </p>
                <Link href="/transaction-banking" className="btn-outline-white text-sm inline-flex items-center gap-2 group">
                  Discover More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            {/* Lending */}
            <div className="bg-gradient-to-br from-green-600 to-green-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <span className="text-3xl block mb-4">💰</span>
                <p className="text-green-200 text-xs font-semibold uppercase tracking-widest mb-2">Lending</p>
                <h3 className="text-xl font-bold mb-3">Intelligent Lending Platform</h3>
                <p className="text-green-100 text-sm leading-relaxed mb-5">
                  Accelerate loan origination and servicing with AI-powered credit decisioning and automated risk management.
                </p>
                <Link href="/lending" className="btn-outline-white text-sm inline-flex items-center gap-2 group">
                  Discover More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treasury & Capital Markets */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Treasury */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <span className="text-3xl block mb-4">📊</span>
                <p className="text-orange-200 text-xs font-semibold uppercase tracking-widest mb-2">Treasury</p>
                <h3 className="text-xl font-bold mb-3">Intelligent Treasury Management</h3>
                <p className="text-orange-100 text-sm leading-relaxed mb-5">
                  Achieve total treasury visibility with real-time liquidity management, FX risk hedging, and regulatory reporting.
                </p>
                <Link href="/treasury" className="btn-outline-white text-sm inline-flex items-center gap-2 group">
                  Discover More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            {/* Capital Markets */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <span className="text-3xl block mb-4">📈</span>
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-2">Capital Markets</p>
                <h3 className="text-xl font-bold mb-3">Capital Markets Infrastructure</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-5">
                  Navigate complex capital markets with powerful trading, risk management, and compliance infrastructure.
                </p>
                <Link href="/capital-markets" className="btn-outline-white text-sm inline-flex items-center gap-2 group">
                  Discover More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudySection limit={3} />

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Financial Institution?"
        subtitle="Join 8,500+ financial institutions globally using rbtblendtsy.com to power their growth."
        primaryCta={{ label: "Request a Demo", href: "/contact" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
        variant="purple"
      />
    </>
  );
}
