import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight, Clock, Globe, Users, BarChart3 } from "lucide-react";

export const metadata = {
  title: "On-Demand Learning — MedTech Business",
  description: "Give your team anytime, anywhere access to 40+ certified healthcare courses.",
};

const benefits = [
  "Close skills gaps and improve coding accuracy across departments",
  "Develop talent from within and improve staff retention",
  "Support business continuity through regulatory and payer changes",
  "Reduce training overhead with a single, centralised platform",
  "Increase revenue by reducing claim denials and improving RCM efficiency",
];

const stats = [
  { value: "40+", label: "Certified Courses" },
  { value: "500+", label: "Healthcare Clients" },
  { value: "16", label: "Specialisations" },
  { value: "24/7", label: "Learner Access" },
];

const skillAreas = [
  { title: "Medical Coding", desc: "ICD-10-CM/PCS, CPT, HCPCS — inpatient and outpatient scenarios." },
  { title: "Medical Billing", desc: "End-to-end claim submission, payer rules and ERA reconciliation." },
  { title: "Compliance", desc: "HIPAA, CMS, and audit-readiness programmes." },
  { title: "Revenue Cycle", desc: "Eligibility, denials, AR management and cash flow optimisation." },
];

export default function OnDemandLearningPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <BookOpen size={13} /> On-Demand Learning
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Upskill Your Team{" "}
            <span className="text-orange-400">
              On Their Schedule
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Give every member of your healthcare team flexible, 24/7 access to expert-led courses
            covering medical coding, billing, compliance, and revenue cycle management.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              Request a Demo <ArrowRight size={15} />
            </Link>
            <Link
              href="/business/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-white/5 px-8 py-3.5 text-sm font-semibold text-purple-200 transition hover:bg-white/10"
            >
              Compare Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-purple-800">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Why On-Demand?</p>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Here's what on-demand learning does for your organisation
              </h2>
              <ul className="mt-8 flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-purple-700" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Clock,     title: "Learn Anytime",       desc: "Self-paced modules that fit any shift pattern or work schedule." },
                { icon: Globe,     title: "Pan-India Access",    desc: "All branches on one platform — no per-branch licences needed." },
                { icon: Users,     title: "Team Dashboards",     desc: "Track every learner's progress across your organisation." },
                { icon: BarChart3, title: "ROI Reporting",       desc: "Measure productivity uplift and certification pass rates." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                    <Icon size={20} />
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-gray-900">{title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Areas */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">In-Demand Skills, On Demand</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">What your team will learn</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillAreas.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to get started?</h2>
          <p className="mt-4 text-base text-purple-100">
            Book a free 30-minute demo and see the platform in action.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Book a Demo <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
