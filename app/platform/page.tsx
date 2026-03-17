import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import { mockPlatformFeatures } from "@/lib/mockData";

const integrations = [
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "Microsoft Azure", icon: "🔷", category: "Cloud" },
  { name: "Google Cloud", icon: "🌤️", category: "Cloud" },
  { name: "SWIFT", icon: "🌐", category: "Connectivity" },
  { name: "Visa", icon: "💳", category: "Payments" },
  { name: "Mastercard", icon: "💰", category: "Payments" },
  { name: "Bloomberg", icon: "📊", category: "Market Data" },
  { name: "Refinitiv", icon: "📈", category: "Market Data" },
  { name: "Salesforce", icon: "☁️", category: "CRM" },
  { name: "Oracle", icon: "🔴", category: "Database" },
  { name: "SAP", icon: "🟦", category: "ERP" },
  { name: "Temenos", icon: "🏦", category: "Core Banking" },
];

const architectureHighlights = [
  {
    icon: "🔄",
    title: "Event-Driven Architecture",
    description: "Real-time event streaming with Apache Kafka processing 1M+ events per second for instant data synchronization.",
  },
  {
    icon: "🏗️",
    title: "Microservices",
    description: "100+ independent microservices enabling independent scaling, deployment, and resilience for each function.",
  },
  {
    icon: "🔐",
    title: "Zero-Trust Security",
    description: "Every service, user, and device is authenticated and authorized — no implicit trust anywhere in the network.",
  },
  {
    icon: "🌍",
    title: "Multi-Region Deployment",
    description: "Deploy across multiple cloud regions with active-active architecture for maximum availability and data residency compliance.",
  },
  {
    icon: "📦",
    title: "Containerized with Kubernetes",
    description: "All platform components run in containers orchestrated by Kubernetes for consistent, reliable, and scalable deployments.",
  },
  {
    icon: "🔌",
    title: "API-First Design",
    description: "Every platform capability is exposed as a versioned REST API, enabling seamless third-party integrations.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <HeroSection
        tag="The rbtblendtsy.com Platform"
        title="The Open Platform for"
        titleHighlight="Financial Services"
        subtitle="A cloud-native, API-first, enterprise-grade technology platform built to power the most demanding financial operations at scale."
        primaryCta={{ label: "Explore APIs", href: "/contact" }}
        secondaryCta={{ label: "Architecture Overview", href: "/resources" }}
        stats={[
          { label: "API endpoints", value: "1,200+", icon: "🔌" },
          { label: "System uptime SLA", value: "99.99%", icon: "⚡" },
          { label: "Transactions/second", value: "10,000+", icon: "🚀" },
          { label: "Cloud providers", value: "3+", icon: "☁️" },
        ]}
      />

      {/* Platform Architecture */}
      <FeatureSection
        tag="Architecture"
        title="Enterprise-Grade"
        titleHighlight="Platform Architecture"
        subtitle="Built on modern engineering principles for performance, reliability, and security at any scale."
        features={architectureHighlights}
        background="gray"
        columns={3}
      />

      {/* Platform Capabilities */}
      <FeatureSection
        tag="Capabilities"
        title="Everything You Need"
        titleHighlight="Built Right In"
        subtitle="Our platform comes with comprehensive capabilities so you can focus on building value, not infrastructure."
        features={mockPlatformFeatures}
        background="white"
        columns={3}
      />

      {/* Integrations */}
      <section className="bg-finGray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Integrations</p>
            <h2 className="section-title">
              Connects with Your{" "}
              <span className="text-finPurple">Entire Ecosystem</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Pre-built connectors and certified integrations with the world&apos;s leading enterprise software.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-white rounded-2xl border border-finGray-100 p-5 text-center hover:border-finPurple/30 hover:shadow-card transition-all duration-300 card-hover"
              >
                <div className="text-3xl mb-3">{integration.icon}</div>
                <p className="text-sm font-semibold text-finBlue">{integration.name}</p>
                <p className="text-xs text-finGray-400 mt-0.5">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build on Our Platform?"
        subtitle="Access our developer portal, API documentation, and sandbox environment to start integrating today."
        primaryCta={{ label: "Access Developer Portal", href: "/contact" }}
        secondaryCta={{ label: "View API Docs", href: "/resources" }}
        variant="purple"
      />
    </>
  );
}
