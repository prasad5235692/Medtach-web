import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Brain, Zap, Shield, TrendingUp, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "AI Transformation — MedTech Business",
  description: "Scale AI fluency across your healthcare organisation with MedTech Business AI programmes.",
};

const aiPackages = [
  {
    name: "AI Foundations Collection",
    subtitle: "For every employee",
    desc: "Build org-wide AI literacy fast. 20+ curated courses covering AI basics, generative AI, prompt engineering, and ethical AI use — designed for non-technical healthcare professionals.",
    features: [
      "AI & Machine Learning fundamentals",
      "Generative AI for healthcare workflows",
      "Prompt engineering for medical documentation",
      "Ethical and responsible AI use",
      "AI tools for coders, billers, and compliance teams",
    ],
    color: "border-purple-200 bg-purple-50",
    cta: "Get Started",
  },
  {
    name: "AI Growth Collection",
    subtitle: "For technical & specialist teams",
    desc: "Scale AI and data science expertise across your HIT, analytics, and digital health teams with 200+ specialised courses and role-specific learning paths.",
    features: [
      "Clinical NLP and medical text processing",
      "AI in revenue cycle and coding automation",
      "Predictive analytics for patient outcomes",
      "Healthcare data governance and AI risk",
      "Role-specific learning paths for 10+ healthcare roles",
    ],
    color: "border-white bg-purple-700 text-white",
    cta: "Talk to Us",
    highlight: true,
  },
];

const aiUseCases = [
  {
    icon: BookOpen,
    title: "AI-Assisted Coding",
    desc: "Understand how AI coding tools (CAC, NLP engines) work, how to validate their outputs, and how to catch errors that automated systems miss.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Denial Management",
    desc: "Use AI insights to identify high-risk claims before submission and reduce denial rates by up to 40%.",
  },
  {
    icon: Brain,
    title: "Clinical Documentation Improvement",
    desc: "Leverage NLP tools to close documentation gaps that drive DRG creep and coding inaccuracies in inpatient settings.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "Automate eligibility checks, prior auth follow-ups, and remittance posting with AI-powered RPA — and train your team to manage it.",
  },
  {
    icon: Shield,
    title: "AI Compliance & Governance",
    desc: "Understand the regulatory implications of deploying AI in a HIPAA-regulated environment, including audit trails and bias mitigation.",
  },
  {
    icon: Users,
    title: "Change Management for AI",
    desc: "Equip managers and leadership to lead AI adoption — addressing resistance, redefining roles, and building a culture of innovation.",
  },
];

const transformationSteps = [
  { step: "01", title: "Assess AI Readiness", desc: "Baseline diagnostic for your teams to understand current AI literacy levels and identify the highest-impact upskilling areas." },
  { step: "02", title: "Select Your AI Package", desc: "Choose AI Foundations for broad literacy or AI Growth for deep technical skilling — or combine both for a full transformation programme." },
  { step: "03", title: "Deploy in Cohorts", desc: "Launch structured learning cohorts across departments, with live sessions on healthcare-specific AI applications." },
  { step: "04", title: "Measure & Scale", desc: "Track AI adoption metrics, measure business impact, and expand the programme org-wide with our analytics platform." },
];

export default function AITransformationPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-28 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Sparkles size={13} /> AI Transformation
          </span>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-purple-400">New</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Scale AI Fluency Across{" "}
            <span className="text-orange-400">
              Your Healthcare Organisation
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Our AI Packages help employees at all levels — from front-line coders to C-suite leaders —
            understand, communicate about, and implement AI solutions with confidence and ethical awareness.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              Contact Us for AI Upskilling <ArrowRight size={15} />
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

      {/* AI Packages */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">AI Packages</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">From AI foundations to enterprise transformation</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {aiPackages.map(({ name, subtitle, desc, features, color, cta, highlight }) => (
              <div key={name} className={`rounded-2xl border p-8 shadow-sm ${color}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${highlight ? "text-purple-200" : "text-purple-700"}`}>{subtitle}</p>
                <h3 className={`mt-2 text-xl font-extrabold ${highlight ? "text-white" : "text-gray-900"}`}>{name}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${highlight ? "text-purple-100" : "text-gray-600"}`}>{desc}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${highlight ? "text-purple-100" : "text-gray-700"}`}>
                      <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${highlight ? "text-purple-300" : "text-purple-700"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/business/contact"
                  className={`mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition ${highlight ? "bg-white text-purple-800 hover:bg-purple-50" : "bg-purple-700 text-white hover:bg-purple-800"}`}
                >
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare AI Use Cases */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">Use Cases</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Where AI transforms healthcare operations</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiUseCases.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:border-purple-300 hover:shadow-md">
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

      {/* Transformation Roadmap */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">The Roadmap</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Your AI transformation journey</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {transformationSteps.map(({ step, title, desc }) => (
              <div key={step} className="relative rounded-2xl border border-gray-100 p-6 shadow-sm">
                <span className="absolute right-5 top-5 text-5xl font-extrabold text-gray-100 select-none">{step}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                  <Sparkles size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="border-y border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { value: "50+", label: "AI courses in the Foundations collection" },
              { value: "200+", label: "AI-specialised courses in Growth collection" },
              { value: "10+", label: "Healthcare AI learning paths" },
              { value: "3×", label: "Faster AI adoption with structured cohorts" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-extrabold text-purple-800">{value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to lead the AI era in healthcare?</h2>
          <p className="mt-4 text-base text-purple-100">
            Let's design an AI upskilling programme that prepares every layer of your organisation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
            >
              Contact Us <ArrowRight size={15} />
            </Link>
            <Link
              href="/business/what-we-do/on-demand-learning"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
