import Link from "next/link";
import { FileText, ArrowRight, Building2, TrendingUp, Award } from "lucide-react";

export const metadata = {
  title: "Case Studies — MedTech Business",
  description: "See how healthcare organisations achieved measurable results with MedTech Business.",
};

const caseStudies = [
  {
    org: "Apollo Hospitals",
    type: "Multi-city Hospital Group",
    headline: "Coding accuracy improved by 28% in 3 months",
    challenge: "Apollo's HIM team struggled with ICD-10-PCS accuracy for complex inpatient procedures, leading to a 15% claim rejection rate from major payers.",
    solution: "We deployed a 12-week peer cohort programme for 80 coders across 6 branches, with weekly live sessions and branch-level progress dashboards.",
    results: ["28% improvement in coding accuracy", "Claim rejection rate dropped from 15% to 6%", "94% cohort completion rate", "22 coders went on to earn CPC credential"],
    quote: "The structured curriculum is exactly what hospital teams need. Highly recommended.",
    quotee: "Dr. Kavitha R., HIM Director",
    icon: Building2,
    color: "border-purple-200 bg-purple-50",
  },
  {
    org: "Fortis Healthcare",
    type: "Hospital Chain — 12 Units",
    headline: "Billing team confidence transformed in 8 weeks",
    challenge: "Fortis's revenue cycle team was losing over ₹40 lakhs per quarter to avoidable denials due to inconsistent billing practices across units.",
    solution: "MedTech Business delivered a custom RCM upskilling programme with unit-specific payer rules, denial analytics training, and supervisor coaching.",
    results: ["40% reduction in denial write-offs in Q1", "RCM team NPS score rose from 52 to 87", "Denial management turnaround cut from 18 to 7 days", "100% of supervisors completed compliance certification"],
    quote: "Medtech Business gave our billing staff the confidence to handle complex payer requirements.",
    quotee: "Rajan Pillai, Revenue Cycle Head",
    icon: TrendingUp,
    color: "border-purple-200 bg-purple-50",
  },
  {
    org: "Manipal Health",
    type: "Healthcare Network",
    headline: "Completion rates rose from 60% to 94% with cohort model",
    challenge: "Previous self-paced training programmes had chronically low completion rates, with learners abandoning courses within the first two weeks.",
    solution: "We redesigned the learning programme as structured 8-week cohorts with peer accountability, bi-weekly live Q&As, and manager progress notifications.",
    results: ["Completion rate: 60% → 94%", "Time-to-competence cut by 35%", "Net certification headcount increased by 3×", "L&D cost-per-completion reduced by 22%"],
    quote: "The cohort model meant our team learned together and supported each other.",
    quotee: "Sneha Menon, L&D Manager",
    icon: Award,
    color: "border-emerald-200 bg-emerald-50",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <FileText size={13} /> Case Studies
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Real Outcomes from{" "}
            <span className="text-orange-400">
              Real Healthcare Teams
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            See how India's leading hospitals and healthcare organisations used MedTech Business
            to improve coding accuracy, reduce denials, and certify their teams.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-12">
            {caseStudies.map(({ org, type, headline, challenge, solution, results, quote, quotee, icon: Icon, color }) => (
              <article key={org} className={`rounded-2xl border p-8 ${color}`}>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm text-purple-700">
                    <Icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{type}</p>
                    <h2 className="mt-1 text-xl font-extrabold text-gray-900">{org}</h2>
                    <p className="mt-1 text-base font-semibold text-purple-800">{headline}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">The Challenge</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">The Solution</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{solution}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-bold text-gray-800">Results</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {results.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="mt-6 border-l-4 border-purple-600 pl-4">
                  <p className="text-sm italic text-gray-600">"{quote}"</p>
                  <footer className="mt-1 text-xs font-semibold text-purple-800">— {quotee}</footer>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Your success story starts here</h2>
          <p className="mt-4 text-base text-purple-100">
            Book a call and let us design a programme for your organisation.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
