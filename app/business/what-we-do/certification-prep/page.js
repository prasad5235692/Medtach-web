import Link from "next/link";
import { Award, CheckCircle2, ArrowRight, BookOpen, Users, Clock } from "lucide-react";

export const metadata = {
  title: "Certification Prep — MedTech Business",
  description: "Structured CPC, CRC, CCS & AHIMA exam bootcamps with live mentoring for your team.",
};

const credentials = [
  { code: "CPC",  body: "AAPC", full: "Certified Professional Coder",         color: "bg-purple-50 text-purple-800 border-purple-200" },
  { code: "CRC",  body: "AAPC", full: "Certified Risk Adjustment Coder",       color: "bg-purple-50 text-purple-700 border-purple-200" },
  { code: "COC",  body: "AAPC", full: "Certified Outpatient Coder",            color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { code: "CCS",  body: "AHIMA", full: "Certified Coding Specialist",          color: "bg-purple-50 text-purple-800 border-purple-200" },
  { code: "RHIT", body: "AHIMA", full: "Registered Health Information Tech",   color: "bg-purple-50 text-purple-700 border-purple-200" },
  { code: "CPMA", body: "AAPC", full: "Certified Professional Medical Auditor",color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
];

const programFeatures = [
  "12-week structured bootcamp aligned to the latest exam blueprint",
  "Live doubt-clearing sessions twice a week with certified instructors",
  "Full-length mock exams with detailed answer explanations",
  "Dedicated Slack/Teams channel for peer support",
  "Study materials, quick-reference guides, and code books included",
  "Post-exam re-attempt coaching at no extra cost",
];

const stats = [
  { value: "95%", label: "First-attempt pass rate" },
  { value: "12 wk", label: "Average prep duration" },
  { value: "6", label: "Credentials covered" },
  { value: "200+", label: "Exam passers in 2024" },
];

export default function CertificationPrepPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Award size={13} /> Certification Prep
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Develop and{" "}
            <span className="text-orange-400">
              Validate Skills
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Grow your employees' skills with AAPC- and AHIMA-aligned certification bootcamps.
            Badges and credentials they can share — respect they can earn.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              Enrol Your Team <ArrowRight size={15} />
            </Link>
            <Link
              href="/business/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-white/5 px-8 py-3.5 text-sm font-semibold text-purple-200 transition hover:bg-white/10"
            >
              View Plans
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

      {/* Credentials */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Credentials We Prepare For</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              Six industry-recognised certifications
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map(({ code, body, full, color }) => (
              <div key={code} className={`rounded-2xl border p-6 ${color}`}>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold">{code}</span>
                  <span className="rounded-full bg-white/60 px-2 py-0.5 text-xs font-semibold">{body}</span>
                </div>
                <p className="mt-3 text-sm font-medium">{full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Features */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">What's Included</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Everything your team needs to pass</h2>
          </div>
          <ul className="mt-10 flex flex-col gap-4">
            {programFeatures.map((f) => (
              <li key={f} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-purple-700" />
                <span className="text-sm text-gray-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">How the Bootcamp Works</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "01", icon: BookOpen, title: "Enrol & Assess", desc: "Your team takes a baseline diagnostic to identify knowledge gaps before training begins." },
              { step: "02", icon: Users,    title: "Learn in Cohort", desc: "12 weeks of live + self-paced study, mock exams, and weekly Q&A with certified trainers." },
              { step: "03", icon: Award,    title: "Certify & Share", desc: "Pass the exam, receive your AAPC/AHIMA credential, and share your digital badge." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative rounded-2xl border border-gray-100 p-6 shadow-sm">
                <span className="absolute right-5 top-5 text-5xl font-extrabold text-gray-100 select-none">{step}</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to certify your team?</h2>
          <p className="mt-4 text-base text-purple-100">
            Talk to us and we'll design a certification pathway that fits your schedule and headcount.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Get a Free Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
