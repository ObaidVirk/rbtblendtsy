import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful — rbtblendtsy.com",
  description: "Your subscription has been activated.",
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-finGray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl border border-finGray-100 p-10 md:p-16 max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-finBlue mb-3">
          Payment Successful
        </h1>
        <p className="text-finGray-400 text-sm mb-2">
          Thank you for subscribing to rbtblendtsy.com.
        </p>
        <p className="text-finGray-400 text-sm mb-8">
          A confirmation email has been sent to you. Your plan is now active.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/admin"
            className="btn-primary"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/pricing"
            className="btn-secondary"
          >
            View Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
