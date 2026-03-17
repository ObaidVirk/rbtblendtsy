import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "rbtblendtsy.com — Financial Technology Platform",
  description:
    "rbtblendtsy.com is a leading financial technology platform providing solutions for Retail Banking, Transaction Banking, Lending, Treasury, and Capital Markets.",
  keywords:
    "fintech, banking technology, retail banking, transaction banking, lending, treasury, capital markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
