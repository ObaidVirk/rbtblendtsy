interface BankingServiceCardProps {
  icon: string;
  title: string;
  description: string;
  stats?: { label: string; value: string }[];
  tag?: string;
  tagColor?: string;
}

export default function BankingServiceCard({
  icon,
  title,
  description,
  stats,
  tag,
  tagColor = "bg-primary-50 text-finPurple",
}: BankingServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-finGray-100 hover:border-finPurple/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="p-7">
        {tag && (
          <span className={`tag ${tagColor} mb-4 inline-block`}>{tag}</span>
        )}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-finBlue leading-snug">{title}</h3>
        </div>
        <p className="text-finGray-400 text-sm leading-relaxed">{description}</p>
      </div>
      {stats && stats.length > 0 && (
        <div className="border-t border-finGray-50 px-7 py-4 bg-finGray-50/50 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-lg font-bold text-finPurple">{stat.value}</div>
              <div className="text-xs text-finGray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
