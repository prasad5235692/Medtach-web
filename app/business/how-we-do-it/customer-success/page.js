import Link from "next/link";
import { HeartHandshake, CheckCircle2, ArrowRight, UserCheck, Clock, MessageSquare, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Customer Success — MedTech Business",
  description: "Dedicated partner support and 24/7 learner assistance for every MedTech Business client.",
};

const csFeatures = [
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    desc: "Every Enterprise client gets a named account manager who owns your success, conducts quarterly business reviews, and proactively flagging risks.",
    plans: "Enterprise Plan",
  },
  {
    icon: Clock,
    title: "24/7 Learner Support",
    desc: "Round-the-clock help desk for learners with live chat and email support. Average first response time under 2 hours.",
    plans: "All Plans",
  },
  {
    icon: MessageSquare,
    title: "Onboarding & Adoption Coaching",
    desc: "Structured onboarding sessions for your L&D and HR teams. We run adoption campaigns, send nudge emails, and help you build a learning culture from day one.",
    plans: "Professional & Enterprise",
  },
  {
    icon: TrendingUp,
    title: "Quarterly Business Reviews",
    desc: "Comprehensive QBRs covering usage data, ROI metrics, upcoming content releases, and a forward-looking roadmap aligned to your business goals.",
    plans: "Enterprise Plan",
  },
];

const supportTiers = [
  {
    name: "Starter",
    response: "48 hours",
    channels: ["Email"],
    features: ["Help centre access", "Email support"],
    highlight: false,
  },
  {
    name: "Professional",
    response: "12 hours",
    channels: ["Email", "Live Chat"],
    features: ["Help centre access", "Email + live chat", "Monthly check-in call", "Onboarding session"],
    highlight: false,
  },
  {
    name: "Enterprise",
    response: "2 hours",
    channels: ["Email", "Live Chat", "Phone", "Slack"],
    features: ["All Professional features", "Dedicated account manager", "Quarterly business reviews", "Priority escalation path", "Proactive adoption campaigns"],
    highlight: true,
  },
];

export default function CustomerSuccessPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <HeartHandshake size={13} /> Customer Success
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            A Partner, Not Just{" "}
            <span className="text-orange-400">
              a Platform
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Our customer success team is invested in your outcomes. From onboarding to QBRs,
            we're with you at every stage of your learning programme.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              Meet Your Success Team <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CS Features */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">How We Support You</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Success is built into every plan</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {csFeatures.map(({ icon: Icon, title, desc, plans }) => (
              <div key={title} className="flex items-start gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={24} />
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-gray-900">{title}</h3>
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-semibold text-purple-800">{plans}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Support Tiers</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Support that grows with you</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {supportTiers.map(({ name, response, channels, features, highlight }) => (
              <div key={name} className={`rounded-2xl border p-6 shadow-sm ${highlight ? "border-purple-300 bg-purple-700 text-white" : "border-gray-100 bg-white"}`}>
                <h3 className={`text-lg font-extrabold ${highlight ? "text-white" : "text-gray-900"}`}>{name}</h3>
                <p className={`mt-1 text-sm ${highlight ? "text-purple-100" : "text-gray-500"}`}>First response in <strong>{response}</strong></p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {channels.map((c) => (
                    <span key={c} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${highlight ? "bg-white/20 text-white" : "bg-purple-50 text-purple-800"}`}>{c}</span>
                  ))}
                </div>
                <ul className="mt-5 flex flex-col gap-2">
                  {features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${highlight ? "text-purple-100" : "text-gray-700"}`}>
                      <CheckCircle2 size={15} className={highlight ? "text-purple-200" : "text-purple-700"} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Talk to our team today</h2>
          <p className="mt-4 text-base text-purple-100">
            Find out which support tier is right for your organisation — no commitment required.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Contact Customer Success <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
