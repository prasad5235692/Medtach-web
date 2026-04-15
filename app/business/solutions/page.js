import Link from "next/link";
import { BookOpen, ShieldCheck, Award, TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: BookOpen,
    title: "Medical Coding & Billing",
    desc: "Comprehensive ICD-10-CM/PCS, CPT, and HCPCS training for hospital, clinic, and physician practice teams. Covers both inpatient and outpatient scenarios with real-world case studies.",
    tags: ["ICD-10", "CPT", "HCPCS", "Outpatient", "Inpatient"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Regulatory",
    desc: "HIPAA Privacy & Security, Medicare/Medicaid compliance, and payer-specific guidelines. Built for HIM directors, compliance officers, and billing supervisors.",
    tags: ["HIPAA", "CMS", "Payer Compliance", "Audit Readiness"],
  },
  {
    icon: Award,
    title: "CPC / CRC Certification Prep",
    desc: "Structured 12-week bootcamp aligned with AAPC and AHIMA exam blueprints. Live mock exams, doubt sessions, and post-exam support included.",
    tags: ["AAPC", "AHIMA", "CPC", "CRC", "CCS"],
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    desc: "End-to-end RCM training from patient registration and eligibility verification to denial management and AR follow-up, with payer-specific workflows.",
    tags: ["Eligibility", "Claims", "Denials", "AR Management"],
  },
  {
    icon: Users,
    title: "Cohort & Team Programmes",
    desc: "Dedicated cohorts of 10–100 learners with a single trainer, shared schedule, and group assessments. Ideal for onboarding batches and department upskilling.",
    tags: ["Team Learning", "Onboarding", "Cohort"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting Suite",
    desc: "Real-time dashboards showing learner progress, course completion rates, assessment scores, and ROI benchmarks — delivered directly to your HR portal.",
    tags: ["Dashboards", "ROI", "Learning Analytics"],
  },
];

export const metadata = {
  title: "Solutions — MedTech Business",
};

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-br from-[#0d0422] to-[#0f172a] py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">Our Programmes</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Training Solutions for Every Healthcare Role
          </h1>
          <p className="mt-5 text-base text-purple-100/80">
            Purpose-built programmes for coders, billers, compliance teams, and revenue cycle professionals.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="py-20">
        <div className="page-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ icon: Icon, title, desc, tags }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-50 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Can't find exactly what you need?
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            We build customised programmes for any speciality or team size. Let's talk.
          </p>
          <Link
            href="/business/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
          >
            Request a Custom Programme <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
