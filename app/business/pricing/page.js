import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "per seat / year",
    desc: "For small clinics and independent practices getting started with certified training.",
    seats: "5–20 seats",
    highlight: false,
    features: [
      "Access to 10 core courses",
      "Self-paced video library",
      "Monthly live Q&A session",
      "Certificate of completion",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "₹9,499",
    period: "per seat / year",
    desc: "For mid-sized hospitals and multispeciality practices that need full coverage.",
    seats: "20–100 seats",
    highlight: true,
    features: [
      "Access to all 40+ courses",
      "Live sessions + recorded library",
      "Dedicated cohort trainer",
      "CPC / CRC exam prep included",
      "Progress dashboard for managers",
      "Priority support (24 hours)",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact for quote",
    desc: "For large hospital chains and healthcare groups with complex training needs.",
    seats: "100+ seats",
    highlight: false,
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom curriculum design",
      "LMS integration (SCORM/xAPI)",
      "Branded learning portal",
      "Quarterly business reviews",
      "SLA-backed support",
    ],
  },
];

export const metadata = {
  title: "Pricing — MedTech Business",
};

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-br from-[#042a2b] to-[#0a4d4f] py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">Transparent Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Simple, Flexible Plans</h1>
          <p className="mt-5 text-base text-teal-100/80">
            No hidden fees. Scale up or down as your team grows.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.highlight
                    ? "border-teal-400 bg-linear-to-b from-teal-600 to-teal-700 text-white shadow-xl shadow-teal-200"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-0.5 text-xs font-bold text-white shadow">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    plan.highlight ? "text-teal-200" : "text-teal-600"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="mt-3 flex items-end gap-1">
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span
                      className={`mb-1 text-xs ${
                        plan.highlight ? "text-teal-200" : "text-gray-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-1 text-xs font-medium ${
                    plan.highlight ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  {plan.seats}
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    plan.highlight ? "text-teal-100" : "text-gray-500"
                  }`}
                >
                  {plan.desc}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlight ? "text-teal-200" : "text-teal-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlight ? "text-teal-50" : "text-gray-600"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/business/contact"
                  className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-white text-teal-700 hover:bg-teal-50"
                      : "bg-teal-600 text-white hover:bg-teal-700"
                  }`}
                >
                  {plan.price === "Custom" ? "Get a Quote" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {[
              {
                q: "Can we add more seats mid-year?",
                a: "Yes. You can purchase additional seats at any time. They'll be prorated to your renewal date.",
              },
              {
                q: "Do you offer a free trial?",
                a: "All plans include a 14-day free trial with full access. No payment required to start.",
              },
              {
                q: "Can we get a custom quote for 200+ employees?",
                a: "Absolutely. Contact our enterprise team and we'll build a proposal within 48 hours.",
              },
              {
                q: "Is there a minimum contract period?",
                a: "Starter and Professional plans are annual. Enterprise contracts can be structured as monthly or multi-year.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-800">{q}</p>
                <p className="mt-2 text-sm text-gray-500">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-600"
            >
              Still have questions? Talk to us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
