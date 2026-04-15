import Link from "next/link";
import { BarChart3, ArrowRight, TrendingUp, PieChart, Users, Download } from "lucide-react";

export const metadata = {
  title: "Analytics & Reporting — MedTech Business",
  description: "Real-time dashboards, ROI metrics, and HR-ready reports for healthcare L&D teams.",
};

const reportTypes = [
  {
    icon: Users,
    title: "User Adoption Report",
    desc: "Track active learners, total hours spent, and login frequency across your entire organisation or filtered by branch and department.",
  },
  {
    icon: TrendingUp,
    title: "Skills Proficiency Dashboard",
    desc: "See which skills your teams have mastered and where gaps remain — mapped to real coding, billing, and compliance competencies.",
  },
  {
    icon: PieChart,
    title: "Course Completion & Scores",
    desc: "Per-course completion rates, average assessment scores, and time-to-complete metrics to identify at-risk learners early.",
  },
  {
    icon: Download,
    title: "Custom Report Builder",
    desc: "Pull any combination of metrics into a branded report and schedule automated monthly or quarterly exports to your HR inbox.",
  },
];

const metrics = [
  { value: "Real-time", label: "Dashboard updates" },
  { value: "CSV / PDF", label: "Export formats" },
  { value: "10+", label: "Report templates" },
  { value: "API", label: "Data access option" },
];

export default function AnalyticsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <BarChart3 size={13} /> Analytics & Reporting
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Insights That Drive{" "}
            <span className="text-orange-400">
              Real Business Outcomes
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Move beyond completion percentages. MedTech Business analytics connect learning activity
            to coding accuracy, denial rates, and revenue cycle performance.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              See a Demo <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label}>
                <p className="text-3xl font-extrabold text-purple-800">{m.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">What You Can Measure</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Reporting for every stakeholder</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {reportTypes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Prove the ROI of Learning</p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Connect training to business metrics</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600">
            Our clients measure learning ROI in the metrics that matter most to healthcare executives:
            coding accuracy, first-pass claim rates, denial write-offs, and certification headcount.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { metric: "28%", label: "Average improvement in coding accuracy after 3 months" },
              { metric: "40%", label: "Reduction in denial write-offs reported by clients" },
              { metric: "3×", label: "Faster certification timelines vs. self-study" },
            ].map(({ metric, label }) => (
              <div key={metric} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-extrabold text-purple-800">{metric}</p>
                <p className="mt-2 text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Make your L&D budget accountable</h2>
          <p className="mt-4 text-base text-purple-100">
            Talk to us about setting up a custom dashboard that speaks the language of your leadership team.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Request Analytics Demo <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
