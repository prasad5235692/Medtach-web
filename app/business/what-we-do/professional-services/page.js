import Link from "next/link";
import { Briefcase, CheckCircle2, ArrowRight, ClipboardList, Lightbulb, Headphones, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Professional Services — MedTech Business",
  description: "Custom curriculum design, consulting, and implementation support for healthcare organisations.",
};

const services = [
  {
    icon: ClipboardList,
    title: "Custom Curriculum Design",
    desc: "Our instructional designers work with your HIM and L&D teams to map course content to your specific speciality, payer mix, and workflow — not a generic template.",
  },
  {
    icon: Lightbulb,
    title: "Learning Strategy Consulting",
    desc: "A dedicated learning consultant reviews your current training programmes, identifies gaps, and builds a multi-quarter roadmap aligned to your business goals.",
  },
  {
    icon: Headphones,
    title: "Implementation Support",
    desc: "Hands-on onboarding, LMS configuration, SCORM/xAPI integration, and SSO setup — all managed by our technical services team so your HR team doesn't have to.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Programme Management",
    desc: "Quarterly business reviews, content refresh cycles, and proactive learner engagement campaigns to keep completion rates high year-round.",
  },
];

const deliverables = [
  "Needs analysis and skills-gap assessment report",
  "Custom course curriculum and lesson outlines",
  "Branded learner portal with your organisation's logo and colours",
  "SCORM/xAPI content packages for your LMS",
  "Trainer guides, facilitator notes, and assessment banks",
  "Quarterly ROI and performance reports",
];

const stats = [
  { value: "500+", label: "Organisations Served" },
  { value: "96%", label: "Client Satisfaction Score" },
  { value: "6 wk", label: "Average Onboarding Time" },
  { value: "₹0", label: "Hidden Setup Fees" },
];

export default function ProfessionalServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Briefcase size={13} /> Professional Services
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Get the Expertise You Need to{" "}
            <span className="text-orange-400">
              Achieve Goals Faster
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Our professional services team provides strategic consulting, custom curriculum
            design, and implementation support so your learning programme delivers measurable results.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              Talk to Our Consultants <ArrowRight size={15} />
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

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">What We Offer</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
              End-to-end support for your learning programme
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map(({ icon: Icon, title, desc }) => (
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

      {/* Deliverables */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">What You'll Receive</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Concrete, tangible deliverables</h2>
          </div>
          <ul className="mt-10 flex flex-col gap-4">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-purple-700" />
                <span className="text-sm text-gray-700">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Process</h2>
            <p className="mt-3 text-base text-gray-500">From first call to fully deployed learning programme in 6 weeks.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Discovery Call", desc: "We understand your organisation, team, goals, and current training gaps." },
              { step: "02", title: "Needs Assessment", desc: "Formal gap analysis and a learning strategy document delivered within 1 week." },
              { step: "03", title: "Curriculum Build", desc: "Custom content, assessments, and supporting materials developed by our team." },
              { step: "04", title: "Launch & Support", desc: "Platform setup, trainer briefing, and quarterly check-ins to track ROI." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative rounded-2xl border border-gray-100 p-6 shadow-sm">
                <span className="absolute right-5 top-5 text-5xl font-extrabold text-gray-100 select-none">{step}</span>
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
          <h2 className="text-3xl font-extrabold text-white">Let's design your learning programme</h2>
          <p className="mt-4 text-base text-purple-100">
            Book a free discovery call and our consultants will map out a custom plan for your organisation.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Book a Discovery Call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
