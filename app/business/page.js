import Link from "next/link";
import {
  Building2,
  Users,
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Clock,
  Globe,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Organizations Trained" },
  { value: "12,000+", label: "Employees Upskilled" },
  { value: "95%", label: "Certification Pass Rate" },
  { value: "40+", label: "Specialised Courses" },
];

const solutions = [
  {
    icon: BookOpen,
    title: "Medical Coding & Billing",
    desc: "ICD-10, CPT, HCPCS — end-to-end coding and billing training tailored for hospital and clinic teams.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Regulatory",
    desc: "HIPAA, CMS, and payer-specific compliance programs designed for healthcare administrators.",
  },
  {
    icon: Award,
    title: "CPC / CRC Certification Prep",
    desc: "Structured certification bootcamps for AAPC and AHIMA credentials with live mentoring.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    desc: "Holistic RCM training covering eligibility, claims, denials, and AR follow-up workflows.",
  },
  {
    icon: Users,
    title: "Team & Cohort Programs",
    desc: "Dedicated learning cohorts with a dedicated trainer, progress dashboards, and group assessments.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Real-time learner analytics, completion reports, and ROI metrics delivered to your HR portal.",
  },
];

const whyUs = [
  "Industry-certified trainers with 10+ years clinical experience",
  "Live sessions + recorded library access for your entire team",
  "Customised curriculum aligned to your speciality or payer mix",
  "Dedicated account manager & 24/7 learner support",
  "Bulk seat pricing with flexible billing cycles",
  "ISO-quality learning materials updated quarterly",
];

const testimonials = [
  {
    quote:
      "Our coding accuracy improved by 28% within three months of enrolling. The structured curriculum is exactly what hospital teams need.",
    name: "Dr. Kavitha R.",
    role: "HIM Director, Apollo Hospitals",
  },
  {
    quote:
      "Medtech Business gave our billing staff the confidence and credentials to handle complex payer requirements. Highly recommend.",
    name: "Rajan Pillai",
    role: "Revenue Cycle Head, Fortis Healthcare",
  },
  {
    quote:
      "The cohort model meant our team learned together and supported each other. Completion rates went from 60% to 94%.",
    name: "Sneha Menon",
    role: "L&D Manager, Manipal Health",
  },
];

export default function BusinessHome() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        {/* Background blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl"
        />

        <div className="page-container relative text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider">
            <Building2 size={13} />
            Enterprise Healthcare Training
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Upskill Your{" "}
            <span className="text-orange-400">
              Healthcare Team
            </span>{" "}
            at Scale
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-purple-100/80">
            Medtech Business provides hospitals, clinics, and healthcare
            organisations with certified, flexible, and results-driven training
            in medical coding, billing, and compliance.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-950/40 transition hover:bg-purple-600"
            >
              Get a Free Demo <ArrowRight size={16} />
            </Link>
            <Link
              href="/business/solutions"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-white/5 px-8 py-3.5 text-base font-semibold text-purple-200 transition hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Trust badges */}
          <p className="mt-8 text-xs text-purple-400/60">
            Trusted by 500+ healthcare organisations across India
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-gray-100 bg-gray-50 py-14">
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

      {/* ── Solutions ── */}
      <section className="py-20">
        <div className="page-container">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">
              What We Offer
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Training Solutions Built for Healthcare
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              From individual certification prep to enterprise-wide cohort
              programmes, we have a solution for every stage of your team's growth.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition group-hover:bg-purple-100">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/business/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-800 transition hover:text-purple-700"
            >
              View all solutions <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why MedTech Business ── */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="page-container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Everything your team needs to succeed
              </h2>
              <p className="mt-4 text-base text-gray-600">
                We don't just deliver courses — we partner with your organisation
                to design learning journeys that drive measurable business outcomes.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-purple-700"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/business/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800"
              >
                Talk to Our Team <ArrowRight size={14} />
              </Link>
            </div>

            {/* Feature cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Clock, title: "Flexible Learning", desc: "Self-paced + live sessions that fit any shift pattern." },
                { icon: Globe, title: "Pan-India Access", desc: "Learners across all your branches on a single platform." },
                { icon: BarChart3, title: "Progress Dashboards", desc: "HR-ready reports for every department and team." },
                { icon: Award, title: "Recognised Certifications", desc: "AAPC & AHIMA-aligned credentials respected by employers." },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm"
                >
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

      {/* ── Testimonials ── */}
      <section className="py-20">
        <div className="page-container">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">
              What Clients Say
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Trusted by Healthcare Leaders
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map(({ quote, name, role }) => (
              <div
                key={name}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-gray-600">"{quote}"</p>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-gray-900">{name}</p>
                  <p className="text-xs text-purple-700">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Ready to transform your team?
          </h2>
          <p className="mt-4 text-base text-purple-100">
            Book a free 30-minute discovery call and we'll design a custom
            learning plan for your organisation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-purple-800 shadow transition hover:bg-purple-50"
            >
              Book a Demo Call <ArrowRight size={16} />
            </Link>
            <Link
              href="/business/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-300/50 bg-purple-700/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-purple-700/60"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
