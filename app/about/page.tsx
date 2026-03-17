import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

const executives = [
  { name: "Alexandra Chen", title: "Chief Executive Officer", bg: "from-purple-400 to-purple-600", initials: "AC" },
  { name: "Michael Hartmann", title: "Chief Technology Officer", bg: "from-blue-400 to-blue-600", initials: "MH" },
  { name: "Priya Nair", title: "Chief Revenue Officer", bg: "from-green-400 to-green-600", initials: "PN" },
  { name: "James O'Brien", title: "Chief Financial Officer", bg: "from-orange-400 to-orange-600", initials: "JO" },
  { name: "Lin Wei", title: "Chief Product Officer", bg: "from-indigo-400 to-indigo-600", initials: "LW" },
  { name: "Fatima Al-Rashid", title: "Chief Risk Officer", bg: "from-pink-400 to-pink-600", initials: "FA" },
];

const milestones = [
  { year: "1985", event: "Founded as a financial technology consultancy in New York" },
  { year: "1998", event: "Launched first core banking system for regional banks in North America" },
  { year: "2007", event: "Expanded globally, entering European and Asia-Pacific markets" },
  { year: "2015", event: "Reached 5,000 banking clients across 80 countries" },
  { year: "2019", event: "Launched open banking API platform and cloud-native infrastructure" },
  { year: "2022", event: "Passed $1 trillion daily transaction processing milestone" },
  { year: "2024", event: "Rebranded as rbtblendtsy.com — the unified fintech platform" },
  { year: "2026", event: "Serving 8,500+ institutions across 130+ countries" },
];

const values = [
  { icon: "🔍", title: "Transparency", description: "We believe in open, honest relationships with clients, partners, and employees." },
  { icon: "💡", title: "Innovation", description: "We continuously push the boundaries of what's possible in financial technology." },
  { icon: "🤝", title: "Partnership", description: "We succeed when our clients succeed — we're committed to their long-term growth." },
  { icon: "🔒", title: "Trust & Security", description: "We hold ourselves to the highest standards of security, reliability, and integrity." },
  { icon: "🌍", title: "Inclusion", description: "We build technology that promotes financial inclusion and broadens access to services." },
  { icon: "🌱", title: "Responsibility", description: "We operate sustainably and take our social and environmental responsibilities seriously." },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        tag="About rbtblendtsy.com"
        title="We Power The Future of"
        titleHighlight="Financial Technology"
        subtitle="For over 40 years, rbtblendtsy.com has been at the forefront of financial technology innovation — partnering with banks, credit unions, and financial institutions across 130+ countries to transform their operations."
        primaryCta={{ label: "Our Solutions", href: "/solutions" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        compact
      />

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-finGray-50 rounded-3xl p-8 border border-finGray-100">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-finBlue mb-3">Our Mission</h3>
              <p className="text-finGray-400 leading-relaxed">
                To democratize access to world-class financial technology — enabling every financial
                institution, regardless of size or geography, to compete and thrive in the digital age.
              </p>
            </div>
            <div className="bg-hero-gradient rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where financial services are seamless, inclusive, and intelligently
                connected — powered by an open technology ecosystem that puts people first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-finGray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "8,500+", label: "Global Clients", icon: "🏦" },
              { value: "130+", label: "Countries", icon: "🌍" },
              { value: "40+", label: "Years of Experience", icon: "📅" },
              { value: "12,000+", label: "Employees Worldwide", icon: "👥" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-7 text-center border border-finGray-100 shadow-sm hover:shadow-card transition-shadow duration-300">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold stat-number mb-1.5">{stat.value}</div>
                <p className="text-finGray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Values</p>
            <h2 className="section-title">
              What Guides <span className="text-finPurple">Everything We Do</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-finGray-50 rounded-2xl p-6 border border-finGray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-finBlue mb-2">{v.title}</h3>
                <p className="text-finGray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-finGray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Leadership Team</p>
            <h2 className="section-title">
              Experienced <span className="text-finPurple">Leaders</span> Driving Innovation
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {executives.map((exec) => (
              <div key={exec.name} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${exec.bg} flex items-center justify-center text-white text-xl font-bold mx-auto mb-3 group-hover:scale-105 transition-transform duration-200 shadow-lg`}>
                  {exec.initials}
                </div>
                <p className="font-semibold text-finBlue text-sm leading-snug">{exec.name}</p>
                <p className="text-finGray-400 text-xs mt-0.5">{exec.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">
              40+ Years of <span className="text-finPurple">Financial Innovation</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-finGray-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 relative ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                    <div className={`bg-white rounded-2xl p-5 border border-finGray-100 hover:shadow-card transition-shadow duration-300 inline-block max-w-sm ${idx % 2 === 1 ? "md:ml-auto" : ""}`}>
                      <p className="text-finPurple font-bold text-lg">{m.year}</p>
                      <p className="text-finGray-600 text-sm mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-finPurple border-4 border-white shadow-md flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Join Our Team?"
        subtitle="We're always looking for exceptional talent to help shape the future of financial technology."
        primaryCta={{ label: "View Open Positions", href: "/contact" }}
        secondaryCta={{ label: "Our Culture", href: "/resources" }}
        variant="dark"
      />
    </>
  );
}
