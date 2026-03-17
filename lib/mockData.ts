// Mock data for the entire application

export const mockStats = [
  { label: "Financial institutions served", value: "8,500+", icon: "🏦" },
  { label: "Countries worldwide", value: "130+", icon: "🌍" },
  { label: "Transactions processed daily", value: "$1.3T", icon: "💳" },
  { label: "Years of innovation", value: "40+", icon: "🚀" },
];

export const mockSolutions = [
  {
    id: "retail-banking",
    title: "Retail Banking",
    shortTitle: "Retail Banking",
    slug: "retail-banking",
    description:
      "Deliver exceptional customer experiences with modern core banking, digital channels, and personalized financial services.",
    icon: "🏦",
    color: "from-purple-600 to-purple-800",
    features: [
      "Core Banking System",
      "Digital Onboarding",
      "Mobile Banking",
      "Payments Processing",
      "Customer Analytics",
      "Wealth Management",
    ],
    stats: [
      { label: "Banks using our platform", value: "3,000+" },
      { label: "Digital transactions daily", value: "$500B+" },
      { label: "Customer satisfaction", value: "98%" },
    ],
    hero: "Transform retail banking with AI-powered solutions that deliver personalized experiences at scale.",
  },
  {
    id: "transaction-banking",
    title: "Transaction Banking",
    shortTitle: "Tx Banking",
    slug: "transaction-banking",
    description:
      "Power corporate treasury and cash management operations with real-time payment processing and advanced liquidity management.",
    icon: "💼",
    color: "from-blue-600 to-blue-800",
    features: [
      "Cash Management",
      "Trade Finance",
      "Supply Chain Finance",
      "SWIFT Connectivity",
      "FX Payments",
      "Virtual Accounts",
    ],
    stats: [
      { label: "Corporate clients", value: "1,200+" },
      { label: "Payment rails supported", value: "100+" },
      { label: "Countries coverage", value: "90+" },
    ],
    hero: "Streamline corporate banking operations with intelligent automation and global payment capabilities.",
  },
  {
    id: "lending",
    title: "Lending",
    shortTitle: "Lending",
    slug: "lending",
    description:
      "Accelerate the entire lending lifecycle from origination to servicing with intelligent automation and risk management.",
    icon: "💰",
    color: "from-green-600 to-green-800",
    features: [
      "Loan Origination",
      "Credit Decisioning",
      "Loan Servicing",
      "Collections Management",
      "Risk Analytics",
      "Regulatory Compliance",
    ],
    stats: [
      { label: "Loans processed annually", value: "$200B+" },
      { label: "Reduction in origination time", value: "70%" },
      { label: "Default rate reduction", value: "35%" },
    ],
    hero: "Redefine lending with data-driven decisioning and automated workflows that reduce time-to-yes.",
  },
  {
    id: "treasury",
    title: "Treasury",
    shortTitle: "Treasury",
    slug: "treasury",
    description:
      "Optimize treasury operations with comprehensive risk management, liquidity planning, and real-time market data integration.",
    icon: "📊",
    color: "from-orange-500 to-orange-700",
    features: [
      "Cash & Liquidity Management",
      "FX Risk Management",
      "Interest Rate Hedging",
      "Investment Portfolio",
      "Counterparty Risk",
      "Regulatory Reporting",
    ],
    stats: [
      { label: "Treasury teams served", value: "2,000+" },
      { label: "Currencies supported", value: "150+" },
      { label: "Reduction in manual tasks", value: "80%" },
    ],
    hero: "Gain complete treasury visibility and control with real-time risk intelligence.",
  },
  {
    id: "capital-markets",
    title: "Capital Markets",
    shortTitle: "Cap Markets",
    slug: "capital-markets",
    description:
      "Navigate complex capital markets with powerful trading, risk, and compliance infrastructure built for global institutions.",
    icon: "📈",
    color: "from-indigo-600 to-indigo-800",
    features: [
      "Trading Systems",
      "Risk Management",
      "Post-Trade Processing",
      "Compliance & Reporting",
      "Market Data",
      "Front Office Analytics",
    ],
    stats: [
      { label: "Asset classes covered", value: "50+" },
      { label: "Trade throughput per day", value: "$800B+" },
      { label: "Regulatory frameworks", value: "60+" },
    ],
    hero: "Power sophisticated capital markets operations with a unified technology platform.",
  },
];

export const mockCaseStudies = [
  {
    id: 1,
    client: "Vertex Global Bank",
    region: "Asia Pacific",
    segment: "Retail Banking",
    title: "Modernizing Core Banking for 5M+ Customers",
    outcome: "40% reduction in operational costs and 3x improvement in transaction speed.",
    logo: "🏦",
    tag: "Core Banking",
  },
  {
    id: 2,
    client: "Meridian Financial Group",
    region: "Europe",
    segment: "Transaction Banking",
    title: "Real-Time Payments Across 30 Countries",
    outcome: "99.99% uptime achieved with instant cross-border payment capabilities.",
    logo: "💳",
    tag: "Payments",
  },
  {
    id: 3,
    client: "Apex Community Bank",
    region: "North America",
    segment: "Lending",
    title: "Digital Lending Transformation",
    outcome: "Loan origination time reduced from 2 weeks to 4 hours.",
    logo: "💰",
    tag: "Lending",
  },
  {
    id: 4,
    client: "Sovereign Capital Partners",
    region: "Middle East",
    segment: "Treasury",
    title: "Unified Treasury Management Platform",
    outcome: "Saved $12M annually through optimized liquidity management.",
    logo: "📊",
    tag: "Treasury",
  },
  {
    id: 5,
    client: "NexGen Investment Bank",
    region: "Global",
    segment: "Capital Markets",
    title: "Next-Gen Trading Infrastructure",
    outcome: "50% faster trade execution with real-time risk analytics.",
    logo: "📈",
    tag: "Capital Markets",
  },
  {
    id: 6,
    client: "Blue Horizon Savings",
    region: "Africa",
    segment: "Retail Banking",
    title: "Financial Inclusion Through Mobile Banking",
    outcome: "2M new customers onboarded digitally in 12 months.",
    logo: "📱",
    tag: "Mobile Banking",
  },
];

export const mockPlatformFeatures = [
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption, multi-factor authentication, and continuous threat monitoring.",
  },
  {
    icon: "☁️",
    title: "Cloud-Native Architecture",
    description:
      "Deployed on AWS, Azure, or GCP with auto-scaling, high availability, and disaster recovery built-in.",
  },
  {
    icon: "🔌",
    title: "Open API Ecosystem",
    description:
      "RESTful APIs and pre-built connectors for seamless integration with existing systems and third-party services.",
  },
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    description:
      "Embedded intelligence for fraud detection, credit scoring, customer personalization, and operational automation.",
  },
  {
    icon: "📋",
    title: "Regulatory Compliance",
    description:
      "Built-in compliance for GDPR, Basel III, IFRS 9, MiFID II, and 60+ global regulatory frameworks.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description:
      "Executive dashboards and operational insights with real-time data processing and visualization tools.",
  },
];

export const mockNavLinks = [
  { label: "Home", href: "/" },
  { label: "Retail Banking", href: "/retail-banking" },
  { label: "Transaction Banking", href: "/transaction-banking" },
  { label: "Lending", href: "/lending" },
  { label: "Treasury", href: "/treasury" },
  { label: "Capital Markets", href: "/capital-markets" },
];

export const mockFooterLinks = {
  solutions: [
    { label: "Retail Banking", href: "/retail-banking" },
    { label: "Transaction Banking", href: "/transaction-banking" },
    { label: "Lending", href: "/lending" },
    { label: "Treasury", href: "/treasury" },
    { label: "Capital Markets", href: "/capital-markets" },
    { label: "Platform", href: "/platform" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Press & Media", href: "/resources" },
    { label: "Investor Relations", href: "/about" },
  ],
  resources: [
    { label: "Blog", href: "/resources" },
    { label: "Whitepapers", href: "/resources" },
    { label: "Webinars", href: "/resources" },
    { label: "Events", href: "/resources" },
    { label: "Case Studies", href: "/resources" },
    { label: "API Documentation", href: "/platform" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Partner Portal", href: "/contact" },
    { label: "Help Center", href: "/resources" },
    { label: "Privacy Policy", href: "/about" },
    { label: "Terms of Service", href: "/about" },
    { label: "Cookie Settings", href: "/about" },
  ],
};

// Admin dashboard mock data
export const mockCustomers = [
  { id: "CUS-001", name: "Vertex Global Bank", type: "Commercial Bank", country: "Singapore", status: "Active", revenue: "$2.4M", since: "2019" },
  { id: "CUS-002", name: "Meridian Financial Group", type: "Investment Bank", country: "UK", status: "Active", revenue: "$5.1M", since: "2017" },
  { id: "CUS-003", name: "Apex Community Bank", type: "Community Bank", country: "USA", status: "Active", revenue: "$890K", since: "2021" },
  { id: "CUS-004", name: "Sovereign Capital Partners", type: "Asset Manager", country: "UAE", status: "Active", revenue: "$3.2M", since: "2018" },
  { id: "CUS-005", name: "NexGen Investment Bank", type: "Investment Bank", country: "Germany", status: "Trial", revenue: "$0", since: "2024" },
  { id: "CUS-006", name: "Blue Horizon Savings", type: "Savings Bank", country: "Nigeria", status: "Active", revenue: "$450K", since: "2022" },
  { id: "CUS-007", name: "Pacific Coast Credit Union", type: "Credit Union", country: "Canada", status: "Inactive", revenue: "$120K", since: "2020" },
  { id: "CUS-008", name: "Alpine Private Bank", type: "Private Bank", country: "Switzerland", status: "Active", revenue: "$8.7M", since: "2016" },
];

export const mockTransactions = [
  { id: "TXN-8821", client: "Vertex Global Bank", type: "Wire Transfer", amount: "$1,250,000", currency: "USD", status: "Completed", date: "2026-03-12" },
  { id: "TXN-8820", client: "Alpine Private Bank", type: "FX Conversion", amount: "€890,000", currency: "EUR", status: "Processing", date: "2026-03-12" },
  { id: "TXN-8819", client: "Meridian Financial Group", type: "Swift Payment", amount: "£340,000", currency: "GBP", status: "Completed", date: "2026-03-11" },
  { id: "TXN-8818", client: "Sovereign Capital Partners", type: "Trade Finance", amount: "$4,500,000", currency: "USD", status: "Pending", date: "2026-03-11" },
  { id: "TXN-8817", client: "Apex Community Bank", type: "Loan Disbursement", amount: "$75,000", currency: "USD", status: "Completed", date: "2026-03-10" },
  { id: "TXN-8816", client: "Blue Horizon Savings", type: "Mobile Payment", amount: "₦2,500,000", currency: "NGN", status: "Completed", date: "2026-03-10" },
  { id: "TXN-8815", client: "Pacific Coast Credit Union", type: "ACH Transfer", amount: "$18,500", currency: "CAD", status: "Failed", date: "2026-03-09" },
];

export const mockProducts = [
  { id: "PRD-001", name: "CoreBanking Suite", category: "Retail Banking", clients: 3200, version: "v12.4", status: "Generally Available", license: "Enterprise" },
  { id: "PRD-002", name: "PayHub Pro", category: "Transaction Banking", clients: 1800, version: "v8.1", status: "Generally Available", license: "Per Transaction" },
  { id: "PRD-003", name: "LendingIQ", category: "Lending", clients: 950, version: "v6.2", status: "Generally Available", license: "Enterprise" },
  { id: "PRD-004", name: "TreasuryConnect", category: "Treasury", clients: 780, version: "v5.0", status: "Generally Available", license: "Enterprise" },
  { id: "PRD-005", name: "CapMarkets AI", category: "Capital Markets", clients: 420, version: "v3.8", status: "Beta", license: "Enterprise" },
  { id: "PRD-006", name: "OpenBanking API", category: "Platform", clients: 5200, version: "v2.1", status: "Generally Available", license: "API Calls" },
  { id: "PRD-007", name: "ComplianceGuard", category: "Compliance", clients: 2100, version: "v4.3", status: "Generally Available", license: "Seat-based" },
];

export const mockAnalytics = [
  { title: "Total Revenue", value: "$24.8M", change: "+12.4%", trend: "up", period: "vs last quarter" },
  { title: "Active Clients", value: "8,542", change: "+3.2%", trend: "up", period: "vs last month" },
  { title: "Transactions Today", value: "2.4M", change: "+8.1%", trend: "up", period: "vs yesterday" },
  { title: "Avg Response Time", value: "98ms", change: "-5.2%", trend: "up", period: "vs last week" },
  { title: "System Uptime", value: "99.99%", change: "0.00%", trend: "neutral", period: "last 30 days" },
  { title: "Support Tickets", value: "142", change: "-18%", trend: "up", period: "vs last month" },
];

export const mockResources = [
  {
    type: "Whitepaper",
    title: "The Future of Open Banking: 2026 Outlook",
    description: "Explore how open banking APIs are transforming customer experiences and creating new revenue streams.",
    date: "March 2026",
    readTime: "12 min read",
    tag: "Open Banking",
  },
  {
    type: "Webinar",
    title: "AI-Driven Credit Risk: From Theory to Practice",
    description: "Learn how leading banks are deploying machine learning models to improve lending decisions.",
    date: "February 2026",
    readTime: "45 min watch",
    tag: "Lending",
  },
  {
    type: "Case Study",
    title: "How Vertex Global Bank Reduced Costs by 40%",
    description: "A deep dive into the digital core banking transformation at Vertex Global Bank.",
    date: "January 2026",
    readTime: "8 min read",
    tag: "Retail Banking",
  },
  {
    type: "Report",
    title: "Global Treasury Technology Benchmarks 2026",
    description: "Annual benchmarking report covering treasury tech adoption across 500+ financial institutions.",
    date: "March 2026",
    readTime: "20 min read",
    tag: "Treasury",
  },
  {
    type: "Blog",
    title: "Navigating MiFID III Compliance Requirements",
    description: "What capital markets firms need to know about the latest regulatory changes in Europe.",
    date: "March 2026",
    readTime: "6 min read",
    tag: "Capital Markets",
  },
  {
    type: "Guide",
    title: "Digital Onboarding Best Practices for Banks",
    description: "Step-by-step guide to implementing frictionless digital customer onboarding.",
    date: "February 2026",
    readTime: "10 min read",
    tag: "Digital Banking",
  },
];
