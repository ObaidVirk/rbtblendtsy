"use client";

import { useRouter } from "next/navigation";
import { Bell, Search, Settings, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export default function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.push("/");
  };
  return (
    <header className="bg-white border-b border-finGray-100 h-16 flex items-center justify-between px-6 flex-shrink-0">
      <div>
        <h1 className="text-lg font-bold text-finBlue leading-none">{title}</h1>
        {subtitle && (
          <p className="text-xs text-finGray-400 mt-0.5">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-finGray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-finGray-50 border border-finGray-200 rounded-lg text-sm text-finGray-700 placeholder-finGray-400 focus:outline-none focus:ring-2 focus:ring-finPurple/30 focus:border-finPurple w-52 transition-all duration-200"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-finGray-500 hover:text-finPurple hover:bg-primary-50 rounded-lg transition-colors duration-200">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Settings */}
        <button className="p-2 text-finGray-500 hover:text-finPurple hover:bg-primary-50 rounded-lg transition-colors duration-200">
          <Settings size={18} />
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-finGray-200 ml-1">
          <div className="w-8 h-8 rounded-full bg-finPurple text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
            A
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-semibold text-finBlue">Admin User</p>
            <p className="text-xs text-finGray-400">Super Admin</p>
          </div>
          <button
            onClick={handleLogout}
            title="Logout"
            className="ml-1 p-2 text-finGray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
