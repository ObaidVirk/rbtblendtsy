import AuthForm from "@/components/AuthForm";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account — rbtblendtsy.com",
  description: "Create your rbtblendtsy.com account and start your fintech journey.",
};

export default function SignupPage() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen py-12 px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/rbtblendtsy.png"
            alt="rbtblendtsy.com logo"
            width={180}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mb-8">
          {["🚀 Free 30-day trial", "💳 No credit card", "🔒 Enterprise Security"].map((badge) => (
            <span key={badge} className="text-xs text-finGray-500 font-medium hidden sm:block">
              {badge}
            </span>
          ))}
        </div>
        <AuthForm type="signup" />
      </div>
    </div>
  );
}
