import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — rbtblendtsy.com",
  description: "Sign in to your rbtblendtsy.com financial technology platform account.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-finGray-50 via-primary-50 to-finGray-100 flex items-center justify-center p-4">
      {children}
    </div>
  );
}
