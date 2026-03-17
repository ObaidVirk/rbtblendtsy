"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface PricingPlan {
  name: string;
  price: number; // USD per month
  amountCents: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: 299,
    amountCents: 29900,
    description: "For emerging fintechs and digital banks getting started.",
    features: [
      "Up to 10,000 transactions/month",
      "Core banking APIs",
      "Basic analytics dashboard",
      "Email support",
      "99.5% SLA uptime",
    ],
  },
  {
    name: "Professional",
    price: 899,
    amountCents: 89900,
    description: "For growing institutions needing advanced capabilities.",
    features: [
      "Up to 100,000 transactions/month",
      "Full banking API suite",
      "Advanced analytics & reporting",
      "Multi-currency support",
      "Priority support (24/7)",
      "99.9% SLA uptime",
      "Custom integrations",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: 2499,
    amountCents: 249900,
    description: "For tier-1 banks and global financial institutions.",
    features: [
      "Unlimited transactions",
      "All Professional features",
      "Dedicated infrastructure",
      "White-label options",
      "Dedicated account manager",
      "99.99% SLA uptime",
      "On-premise deployment",
      "Custom SLA",
    ],
    badge: "Best Value",
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planName: `rbtblendtsy ${plan.name} Plan`,
          amount: plan.amountCents,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        plan.highlighted
          ? "bg-hero-gradient border-finPurple shadow-hero text-white"
          : "bg-white border-finGray-100 shadow-card"
      }`}
    >
      {plan.badge && (
        <span
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
            plan.highlighted
              ? "bg-white text-finPurple"
              : "bg-finPurple text-white"
          }`}
        >
          {plan.badge}
        </span>
      )}

      <div className="mb-6">
        <h3
          className={`text-xl font-bold mb-2 ${
            plan.highlighted ? "text-white" : "text-finBlue"
          }`}
        >
          {plan.name}
        </h3>
        <p
          className={`text-sm mb-5 ${
            plan.highlighted ? "text-white/80" : "text-finGray-400"
          }`}
        >
          {plan.description}
        </p>
        <div className="flex items-end gap-1">
          <span
            className={`text-4xl font-bold ${
              plan.highlighted ? "text-white" : "text-finBlue"
            }`}
          >
            ${plan.price.toLocaleString()}
          </span>
          <span
            className={`text-sm mb-1.5 ${
              plan.highlighted ? "text-white/70" : "text-finGray-400"
            }`}
          >
            / month
          </span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 text-base leading-none ${
                plan.highlighted ? "text-white" : "text-green-500"
              }`}
            >
              ✓
            </span>
            <span className={plan.highlighted ? "text-white/90" : "text-finGray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {error && (
        <p className="text-xs text-red-400 mb-3 text-center">{error}</p>
      )}

      <button
        onClick={handleSubscribe}
        disabled={loading}
        className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed ${
          plan.highlighted
            ? "bg-white text-finPurple hover:bg-gray-100 shadow-md"
            : "bg-finPurple text-white hover:bg-finPurple-dark shadow-md hover:shadow-lg"
        }`}
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {loading ? "Redirecting…" : `Subscribe to ${plan.name}`}
      </button>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 px-4 md:px-8 lg:px-16 text-center">
        <div className="container-max">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-5">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Simple, Transparent{" "}
            <span className="text-primary-300">Pricing</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your institution. All plans include a
            14-day free trial, no credit card required.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-finGray-50 py-20 px-4 md:px-8 lg:px-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-4">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>

          <p className="text-center text-xs text-finGray-400 mt-10">
            All prices in USD. Billed monthly. Cancel anytime. Payments
            processed securely by{" "}
            <span className="font-semibold text-finGray-500">Stripe</span>.
          </p>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-finBlue text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes. You can change your plan at any time from your billing portal. Changes take effect at the next billing cycle.",
              },
              {
                q: "Is there a free trial?",
                a: "All plans include a 14-day free trial. No credit card required to start.",
              },
              {
                q: "Are payments secure?",
                a: "Payments are processed by Stripe, a PCI-DSS Level 1 certified provider. We never store your card details.",
              },
              {
                q: "What happens if I cancel?",
                a: "You can cancel anytime. Your access continues until the end of the current billing period.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl border border-finGray-100 bg-finGray-50 p-6"
              >
                <p className="font-semibold text-finBlue mb-2">{q}</p>
                <p className="text-sm text-finGray-500">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
