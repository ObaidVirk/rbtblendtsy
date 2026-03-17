import { mockCaseStudies } from "@/lib/mockData";

interface CaseStudySectionProps {
  limit?: number;
  showAll?: boolean;
}

export default function CaseStudySection({ limit = 6, showAll = false }: CaseStudySectionProps) {
  const studies = showAll ? mockCaseStudies : mockCaseStudies.slice(0, limit);

  const tagColors: Record<string, string> = {
    "Core Banking": "bg-purple-100 text-purple-700",
    Payments: "bg-blue-100 text-blue-700",
    Lending: "bg-green-100 text-green-700",
    Treasury: "bg-orange-100 text-orange-700",
    "Capital Markets": "bg-indigo-100 text-indigo-700",
    "Mobile Banking": "bg-pink-100 text-pink-700",
  };

  return (
    <section className="bg-finGray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label">Client Success</p>
          <h2 className="section-title">
            Trusted by{" "}
            <span className="text-finPurple">Leading</span> Financial Institutions
          </h2>
          <p className="section-subtitle mx-auto">
            See how global banks and financial institutions are transforming with our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {studies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl overflow-hidden border border-finGray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-2 bg-gradient-to-r from-finPurple to-finPurple-light" />
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {study.logo}
                  </div>
                  <span
                    className={`tag text-xs ${
                      tagColors[study.tag] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {study.tag}
                  </span>
                </div>
                <p className="text-xs font-semibold text-finGray-400 uppercase tracking-wider mb-1">
                  {study.client} · {study.region}
                </p>
                <h3 className="text-lg font-bold text-finBlue mb-3 leading-snug group-hover:text-finPurple transition-colors duration-200">
                  {study.title}
                </h3>
                <p className="text-finGray-400 text-sm leading-relaxed">{study.outcome}</p>
              </div>
              <div className="px-7 pb-6">
                <button className="text-sm font-semibold text-finPurple hover:underline flex items-center gap-1">
                  Read Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
