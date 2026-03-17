import type { Metadata } from "next";
import DashboardSidebar from "@/components/DashboardSidebar";
import AdminGuard from "@/components/AdminGuard";

export const metadata: Metadata = {
  title: "Admin Dashboard — rbtblendtsy.com",
  description: "rbtblendtsy.com administrative dashboard.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-finGray-50">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {children}
        </div>
      </div>
    </AdminGuard>
  );
}
