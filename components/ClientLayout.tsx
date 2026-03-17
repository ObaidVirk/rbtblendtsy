"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TranslationProvider } from "@/lib/TranslationContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");
  const isAuth = pathname === "/login" || pathname === "/signup";

  if (isAdmin || isAuth) {
    return <TranslationProvider>{children}</TranslationProvider>;
  }

  return (
    <TranslationProvider>
      <Navbar />
      <main className="pt-0">{children}</main>
      <Footer />
    </TranslationProvider>
  );
}
