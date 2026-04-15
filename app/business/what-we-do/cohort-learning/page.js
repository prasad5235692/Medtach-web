import Link from "next/link";
import { Users, CheckCircle2, ArrowRight, Calendar, BarChart3, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Cohort Learning — MedTech Business",
  description: "Team-based, trainer-led learning programmes that drive completion rates to 94%+.",
};

const cohortBenefits = [
  "Shared schedule keeps teams accountable and on track",
  "Cohort sizes of 10–100 with one dedicated trainer",
  "Live group sessions, peer discussions, and team assignments",
  "Completion rates 30% higher than self-paced learning",
  "Ideal for onboarding batches, department upskilling, and new hire programmes",
  "Progress visible to L&D managers in real time",
];

const stats = [
  { value: "94%", label: "Average completion rate" },
  { value: "10–100", label: "Cohort size range" },
  { value: "8 wk", label: "Typical cohort duration" },
  { value: "30%", label: "Higher retention vs self-paced" },
];

const cohortTypes = [
  {
    title: "New Hire Onboarding",
    desc: "Get new coders and billers productive faster with a structured 4-week onboarding cohort customised to your workflows and EHR system.",
    duration: "4 weeks",
    size: "10–30 seats",
  },
  {
    title: "Department Upskilling",
    desc: "Upskill an existing team in a new specialty, payer, or regulatory area. Cohorts run alongside day jobs with minimal schedule disruption.",
    duration: "6–8 weeks",
    size: "20–60 seats",
  },
  {
    title: "Certification Bootcamp",
    desc: "An intensive cohort-based CPC/CRC/CCS prep programme with mock exams and live doubt sessions for teams targeting AAPC/AHIMA credentials.",
    duration: "12 weeks",
    size: "15–50 seats",
  },
  {
    title: "Leadership Academy",
    desc: "Grow your HIM directors, compliance leads, and coding supervisors with a guided self-paced management programme.",
    duration: "10 weeks",
    size: "Groups of 25+",
  },
];

export default function CohortLearningPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Users size={13} /> Cohort Learning
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Grow Your Leaders with{" "}
            <span className="text-orange-400">
              Guided, Team-Based Learning
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Cohort programmes keep teams accountable, build peer support networks,
            and deliver 30% higher completion rates than solo self-paced courses.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              Build My Cohort <ArrowRight size={15} />
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

      {/* Cohort Types */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Programme Types</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
              A cohort for every stage of your team's growth
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cohortTypes.map(({ title, desc, duration, size }) => (
              <div key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                <h3 className="text-base font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
                <div className="mt-4 flex gap-3">
                  <span className="flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-800">
                    <Calendar size={11} /> {duration}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                    <Users size={11} /> {size}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Why Cohort Learning?</p>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Learning is better together
              </h2>
              <p className="mt-4 text-base text-gray-600">
                When your team learns together, they stay accountable, share domain knowledge,
                and build relationships that improve collaboration long after the course ends.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {cohortBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-purple-700" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { icon: Calendar,      title: "Structured Schedule",  desc: "Fixed weekly sessions and milestones keep the entire cohort in sync." },
                { icon: MessageSquare, title: "Peer Interaction",     desc: "Discussion boards and group assignments build deep domain understanding." },
                { icon: BarChart3,     title: "Group Analytics",      desc: "See how every individual and the cohort as a whole is progressing." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <blockquote className="text-xl font-medium italic text-gray-700">
            "The cohort model meant our team learned together and supported each other. Completion rates went from 60% to 94%."
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-purple-800">Sneha Menon</p>
          <p className="text-xs text-gray-500">L&D Manager, Manipal Health</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Build your team's cohort today</h2>
          <p className="mt-4 text-base text-purple-100">
            Tell us your goals, team size, and timeline — we'll design the perfect cohort.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Contact Our Team <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
