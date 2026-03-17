import DashboardHeader from "@/components/DashboardHeader";
import CustomersTable from "@/components/CustomersTable";
import TransactionsTable from "@/components/TransactionsTable";
import ProductsTable from "@/components/ProductsTable";
import { mockAnalytics } from "@/lib/mockData";
import { TrendingUp, TrendingDown, Minus, Activity, Bell, Users, DollarSign, Zap, Globe, Shield } from "lucide-react";

const activityLog = [
  { time: "09:42 AM", event: "New client onboarded: NexGen Investment Bank", type: "success" },
  { time: "09:15 AM", event: "Transaction TXN-8821 completed: $1.25M", type: "success" },
  { time: "08:50 AM", event: "System maintenance completed — v12.4.1 deployed", type: "info" },
  { time: "08:30 AM", event: "Suspicious login attempt blocked for user admin@meridian.com", type: "warning" },
  { time: "08:05 AM", event: "Loan application batch processed: 842 applications", type: "success" },
  { time: "07:45 AM", event: "Payment rail SEPA experiencing elevated latency", type: "warning" },
  { time: "07:12 AM", event: "Daily backup completed successfully — 2.4TB archived", type: "info" },
  { time: "06:30 AM", event: "Transaction TXN-8815 failed — ACH rejection code R03", type: "error" },
];

const activityColors: Record<string, string> = {
  success: "bg-green-100 text-green-700",
  info: "bg-blue-100 text-blue-700",
  warning: "bg-yellow-100 text-yellow-700",
  error: "bg-red-100 text-red-700",
};

const activityDots: Record<string, string> = {
  success: "bg-green-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

export default function AdminDashboardPage() {
  return (
    <>
      <DashboardHeader
        title="Platform Overview"
        subtitle="Welcome back, Admin — rbtblendtsy.com Dashboard"
      />

      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Analytics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {mockAnalytics.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-5 border border-finGray-100 hover:shadow-card transition-shadow duration-300"
            >
              <p className="text-xs text-finGray-400 font-medium mb-2 truncate">{card.title}</p>
              <p className="text-2xl font-bold text-finBlue mb-1">{card.value}</p>
              <div className="flex items-center gap-1">
                {card.trend === "up" ? (
                  <TrendingUp size={12} className="text-green-500" />
                ) : card.trend === "down" ? (
                  <TrendingDown size={12} className="text-red-500" />
                ) : (
                  <Minus size={12} className="text-finGray-400" />
                )}
                <span
                  className={`text-xs font-semibold ${
                    card.trend === "up"
                      ? "text-green-500"
                      : card.trend === "down"
                      ? "text-red-500"
                      : "text-finGray-400"
                  }`}
                >
                  {card.change}
                </span>
              </div>
              <p className="text-xs text-finGray-300 mt-0.5">{card.period}</p>
            </div>
          ))}
        </div>

        {/* Platform Health Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Activity size={18} />, label: "API Health", value: "Operational", color: "text-green-600 bg-green-50" },
            { icon: <Globe size={18} />, label: "Global Nodes", value: "48 Active", color: "text-blue-600 bg-blue-50" },
            { icon: <Shield size={18} />, label: "Security Status", value: "All Clear", color: "text-finPurple bg-primary-50" },
            { icon: <Zap size={18} />, label: "Avg Latency", value: "98ms", color: "text-orange-600 bg-orange-50" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-5 border border-finGray-100 flex items-center gap-4 hover:shadow-card transition-shadow">
              <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-finGray-400">{item.label}</p>
                <p className="font-bold text-finBlue text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Customers Table */}
        <CustomersTable />

        {/* Transactions & Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <TransactionsTable />
          </div>

          {/* Activity Panel */}
          <div className="bg-white rounded-2xl border border-finGray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-finGray-100 flex items-center justify-between">
              <h3 className="font-bold text-finBlue">Platform Activity</h3>
              <span className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-2.5 py-1 rounded-full font-medium">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Live
              </span>
            </div>
            <div className="divide-y divide-finGray-50 max-h-80 overflow-y-auto">
              {activityLog.map((log, idx) => (
                <div key={idx} className="px-5 py-3.5">
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full ${activityDots[log.type]} mt-1.5 flex-shrink-0`} />
                    <div>
                      <p className="text-xs text-finGray-600 leading-relaxed">{log.event}</p>
                      <p className="text-xs text-finGray-300 mt-0.5">{log.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Table */}
        <ProductsTable />

        {/* Settings Mini Panel */}
        <div className="bg-white rounded-2xl border border-finGray-100 p-6">
          <h3 className="font-bold text-finBlue mb-5 text-base">Quick Settings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Bell size={16} />, label: "Notification Preferences", status: "Configured" },
              { icon: <Shield size={16} />, label: "2FA Authentication", status: "Enabled ✓" },
              { icon: <Users size={16} />, label: "User Access Control", status: "48 Users" },
              { icon: <DollarSign size={16} />, label: "Billing & Plan", status: "Enterprise" },
            ].map((setting) => (
              <button key={setting.label} className="flex items-center gap-3 p-4 bg-finGray-50 rounded-xl hover:bg-primary-50 hover:border-finPurple/20 border border-transparent transition-all duration-200 text-left group">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-finPurple shadow-sm group-hover:shadow-md transition-shadow">
                  {setting.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-finBlue">{setting.label}</p>
                  <p className="text-xs text-finGray-400">{setting.status}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
