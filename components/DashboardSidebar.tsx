"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ChevronLeft,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/admin" },
];

interface DashboardSidebarProps {
  collapsed?: boolean;
}

export default function DashboardSidebar({ collapsed = false }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.push("/");
  };

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-finBlue flex-shrink-0 flex flex-col min-h-screen transition-all duration-300`}
    >
      {/* Logo */}
      <div className={`flex items-center gap-3 px-5 h-16 border-b border-white/10 ${collapsed ? "justify-center px-3" : ""}`}>
        <Image
          src="/adminpanel.png"
          alt="Admin panel logo"
          width={collapsed ? 32 : 150}
          height={collapsed ? 32 : 40}
          priority
          className={collapsed ? "h-8 w-8 object-contain" : "h-10 w-auto object-contain"}
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-5 px-3 space-y-0.5 overflow-y-auto">
        {!collapsed && (
          <p className="text-white/30 text-xs uppercase tracking-widest font-semibold px-3 mb-3">
            Main Menu
          </p>
        )}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? "bg-finPurple text-white shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && isActive && (
                <span className="ml-auto w-1.5 h-1.5 bg-white/60 rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className={`border-t border-white/10 p-3 space-y-0.5`}>
        <Link
          href="/"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 ${collapsed ? "justify-center" : ""}`}
          title={collapsed ? "Back to site" : undefined}
        >
          <ChevronLeft size={18} />
          {!collapsed && <span>Back to Site</span>}
        </Link>
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-300 hover:text-red-200 hover:bg-red-500/10 transition-all duration-200 ${collapsed ? "justify-center" : ""}`}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
