import Link from "next/link";
import {
  Check, Minus, Users, Building2, Brain, GraduationCap,
  Zap, Shield, BarChart3, Globe, Puzzle, HeartHandshake,
  Star, ArrowRight, ChevronLeft,
} from "lucide-react";

// ─── Plan data ────────────────────────────────────────────────────────────────
const plans = [
  {
    id: "team",
    label: "Team Plan",
    tagline: "For your team",
    seats: "2 – 50 staff",
    price: "₹24,000",
    priceNote: "per licence · per year, billed annually",
    cta: { label: "Get Started", href: "/business/contact" },
    highlight: false,
    icon: Users,
    features: [
      "Access to 14,000+ certified healthcare courses",
      "Certification prep for CPC, CRC, CCS & more",
      "Practice tests & AI-powered coding exercises",
      "Goal-focused learning recommendations",
      "AI Role Play to build real-world skills",
      "In-course AI Assistant for personalised support",
      "Adoption analytics & completion reports",
      "Admin recommendations to guide learners",
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise Plan",
    tagline: "For your whole organisation",
    seats: "21+ staff",
    price: "Contact sales",
    priceNote: "custom pricing for your organisation",
    cta: { label: "Request a Demo", href: "/business/request-demo", external: true },
    highlight: true,
    icon: Building2,
    badge: "Most Popular",
    features: [
      "Access to 30,000+ top healthcare courses",
      "Certification prep for 200+ industry exams",
      "Practice tests, AI coding exercises & AI Role Plays",
      "Technical & clinical skills assessments",
      "Goal-focused recommendations + customisable content",
      "Advanced analytics, skill insights & benchmarks",
      "Multi-language course collection (16 languages)",
      "Dedicated customer success team",
      "SSO, Reporting API & HRIS integrations",
      "AI features for learners and L&D admins",
      "Labs, workspaces & pre-built cert paths (add-on)",
      "Enhanced Premium Support (add-on)",
    ],
  },
  {
    id: "ai",
    label: "AI Healthcare Upskilling",
    tagline: "From AI foundations to org-wide transformation",
    seats: "21+ staff",
    price: "Contact sales",
    priceNote: "modular packages, starter to growth",
    cta: { label: "Contact Us", href: "/business/request-demo", external: true },
    highlight: false,
    icon: Brain,
    badge: "NEW",
    features: [
      "AI Readiness Collection — 50 curated courses + AI Assistant",
      "AI Growth Collection — 800+ courses & 30+ role paths",
      "Clinical AI for coders, billers & HIM professionals",
      "AI-enabled learning paths by speciality",
      "AI for Business Leaders workshops",
      "Cohort + on-demand hybrid delivery",
    ],
  },
  {
    id: "leadership",
    label: "Leadership Academy",
    tagline: "Cohort learning that drives transformation",
    seats: "Groups of 25+",
    price: "Contact sales",
    priceNote: "per cohort, structured programme",
    cta: { label: "Contact Us", href: "/business/request-demo", external: true },
    highlight: false,
    icon: GraduationCap,
    features: [
      "MedTech Leadership Academy (12-week programme)",
      "Leading GenAI in Healthcare cohort",
      "Invested Leader & Executive Development",
      "Live facilitated sessions + async coursework",
      "Peer learning cohorts with dedicated coach",
      "Programme completion certificates",
    ],
  },
];

// ─── Add-ons data ─────────────────────────────────────────────────────────────
const addons = [
  {
    icon: Zap,
    title: "Clinical Simulation Pro",
    desc: "Supercharge clinical skills with multi-modal labs and pre-built certification learning paths.",
    tags: ["Labs", "Workspaces", "Pre-built cert paths"],
  },
  {
    icon: Shield,
    title: "Premium Support",
    desc: "Accelerate time-to-value with faster implementation, stronger adoption, and maximised learning time.",
    tags: ["Proactive guidance", "Technical advisory", "Priority support"],
  },
  {
    icon: Brain,
    title: "AI Role Play Enhanced",
    desc: "Scale soft-skills practice with AI-powered custom role plays and interactive video avatars.",
    tags: ["Custom Role Plays", "Interactive Video Avatars"],
  },
  {
    icon: Puzzle,
    title: "AI Connectors",
    desc: "Access relevant learning through AI assistants, integrating skill development into daily workflows.",
    tags: ["LMS connectors", "SSO", "SOC 2 & GDPR compliant"],
  },
];

// ─── Feature comparison data ──────────────────────────────────────────────────
const compareCategories = [
  {
    category: "Course Management",
    rows: [
      { label: "Course assignment with custom messaging",       team: false, enterprise: true },
      { label: "Custom user groups",                           team: false, enterprise: true },
      { label: "Advanced group management",                    team: false, enterprise: true },
      { label: "Assign learning content to employees/teams",   team: false, enterprise: true },
      { label: "Customisable learning paths",                  team: false, enterprise: true },
    ],
  },
  {
    category: "Analytics & Reports",
    rows: [
      { label: "User adoption reports",           team: true,  enterprise: true },
      { label: "Individual user engagement",      team: true,  enterprise: true },
      { label: "Skill insights",                  team: false, enterprise: true },
      { label: "Skills proficiency dashboard",    team: false, enterprise: true },
      { label: "Course insights",                 team: false, enterprise: true },
      { label: "Advanced engagement dashboard",   team: false, enterprise: true },
    ],
  },
  {
    category: "Learner Experience",
    rows: [
      { label: "Personalised course recommendations", team: true,  enterprise: true },
      { label: "Coding exercises",                    team: true,  enterprise: true },
      { label: "Quizzes & practice tests",            team: true,  enterprise: true },
      { label: "Q&A and peer discussion",             team: true,  enterprise: true },
      { label: "Assessments",                         team: false, enterprise: true },
      { label: "AI Role Play",                        team: false, enterprise: true },
      { label: "Multi-language collections",          team: false, enterprise: true },
    ],
  },
  {
    category: "Integrations",
    rows: [
      { label: "Single sign-on (SSO)",      team: false, enterprise: true },
      { label: "Reporting API",             team: false, enterprise: true },
      { label: "Course API",                team: false, enterprise: true },
      { label: "HRIS / LMS integrations",  team: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { label: "24/7 customer support",                team: true,  enterprise: true },
      { label: "Access to customer success team",      team: false, enterprise: true },
      { label: "Dedicated technical account manager",  team: false, enterprise: true },
    ],
  },
];

// ─── Component helpers ────────────────────────────────────────────────────────
function Cell({ value }) {
  return value ? (
    <span className="flex justify-center">
      <Check size={17} className="text-purple-700" strokeWidth={2.5} />
    </span>
  ) : (
    <span className="flex justify-center">
      <Minus size={16} className="text-gray-300" />
    </span>
  );
}

export const metadata = {
  title: "Compare Plans — MedTech Business",
  description: "Scalable healthcare training plans for teams and enterprises.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-20 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        {/* Back button */}
        <div className="relative mx-auto max-w-7xl ">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 rounded-lg border border-purple-400/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-purple-200 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft size={14} />
            Back to MedTech Career
          </Link>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-400">
            Plans &amp; Pricing
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Scalable learning plans for<br />
            <span className="text-orange-400">healthcare organisations</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Whether you're training a small billing team or upskilling an entire hospital network,
            we have a plan built around your goals.
          </p>
        </div>
      </section>

      {/* ── Plan cards ── */}
      <section className="py-20">
        <div className="page-container">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
                    plan.highlight
                      ? "border-purple-400 bg-purple-50 ring-2 ring-purple-300"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  {plan.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${plan.highlight ? "bg-purple-700 text-white" : "bg-orange-500 text-white"}`}>
                      {plan.badge}
                    </span>
                  )}
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${plan.highlight ? "bg-purple-700 text-white" : "bg-purple-100 text-purple-700"}`}>
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-4 text-base font-bold text-gray-900">{plan.label}</h2>
                  <p className="mt-1 text-xs text-gray-500">{plan.tagline}</p>
                  <p className="mt-1 text-xs font-medium text-purple-600">{plan.seats}</p>

                  <div className="my-5 border-t border-gray-100 pt-5">
                    <p className={`text-2xl font-extrabold ${plan.highlight ? "text-purple-800" : "text-gray-900"}`}>
                      {plan.price}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">{plan.priceNote}</p>
                  </div>

                  {plan.cta.external ? (
                    <a
                      href={plan.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-semibold transition ${
                        plan.highlight
                          ? "bg-purple-700 text-white hover:bg-purple-800"
                          : "border border-purple-200 text-purple-700 hover:bg-purple-50"
                      }`}
                    >
                      {plan.cta.label} <ArrowRight size={13} />
                    </a>
                  ) : (
                    <Link
                      href={plan.cta.href}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-semibold transition ${
                        plan.highlight
                          ? "bg-purple-700 text-white hover:bg-purple-800"
                          : "border border-purple-200 text-purple-700 hover:bg-purple-50"
                      }`}
                    >
                      {plan.cta.label} <ArrowRight size={13} />
                    </Link>
                  )}

                  <ul className="mt-6 flex flex-col gap-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="mt-0.5 shrink-0 text-purple-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            * Add-on plans available on Enterprise. Nonprofit pricing available for registered organisations.{" "}
            <a href="/business/contact" className="text-purple-600 hover:underline">Contact us</a> to learn more.
          </p>
        </div>
      </section>

      {/* ── Add-ons ── */}
      <section className="bg-gray-50 py-20">
        <div className="page-container">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-700">Enterprise Add-ons</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">More ways to enhance your platform</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {addons.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-gray-900">{a.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{a.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {a.tags.map((t) => (
                      <span key={t} className="rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-semibold text-purple-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/business/request-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block text-sm font-semibold text-purple-700 hover:text-purple-900 hover:underline"
                  >
                    Contact us →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature comparison table ── */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-700">Feature Comparison</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Compare features</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-100 bg-gray-50">
              <div className="px-6 py-4" />
              <div className="border-l border-gray-100 px-6 py-4 text-center">
                <p className="text-sm font-bold text-gray-700">Team</p>
                <p className="text-xs text-gray-400">2–50 staff</p>
              </div>
              <div className="border-l border-gray-100 bg-purple-50 px-6 py-4 text-center">
                <p className="text-sm font-bold text-purple-800">Enterprise</p>
                <p className="text-xs text-purple-500">21+ staff</p>
              </div>
            </div>

            {compareCategories.map((cat, ci) => (
              <div key={cat.category}>
                {/* Category heading */}
                <div className="grid grid-cols-3 border-b border-gray-100 bg-gray-50/80">
                  <div className="col-span-3 px-6 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-600">{cat.category}</p>
                  </div>
                </div>
                {cat.rows.map((row, ri) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-3 border-b border-gray-50 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                  >
                    <div className="px-6 py-3.5 text-sm text-gray-600">{row.label}</div>
                    <div className="border-l border-gray-100 py-3.5 text-center">
                      <Cell value={row.team} />
                    </div>
                    <div className="border-l border-gray-100 bg-purple-50/30 py-3.5 text-center">
                      <Cell value={row.enterprise} />
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* Footer row */}
            <div className="grid grid-cols-3 border-t border-gray-100 bg-gray-50">
              <div className="px-6 py-4" />
              <div className="border-l border-gray-100 px-4 py-4 text-center">
                <Link
                  href="/business/contact"
                  className="inline-block rounded-lg border border-purple-200 px-4 py-2 text-xs font-semibold text-purple-700 transition hover:bg-purple-50"
                >
                  Get Started
                </Link>
              </div>
              <div className="border-l border-gray-100 bg-purple-50 px-4 py-4 text-center">
                <a
                  href="/business/request-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-purple-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-purple-800"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-language callout ── */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-16 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Globe size={36} className="mx-auto mb-4 text-orange-400" />
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Train your teams in their <span className="text-orange-400">native language</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-purple-100/80">
            Enterprise subscribers get instant access to our Multi-Language collection —
            19,000+ courses across 16 languages, including Hindi, Tamil, and more.
          </p>
          <a
            href="/business/request-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:bg-orange-600"
          >
            Request a Demo <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-600">Get Started Today</p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Not sure which plan is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Talk to one of our healthcare training specialists. We'll build a custom plan around your team size, speciality mix, and compliance requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/business/request-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm shadow-purple-200 transition hover:bg-purple-800"
            >
              Talk to an Expert <ArrowRight size={14} />
            </a>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-8 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Explore Platform
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Star, text: "Rated 4.8/5 by 2,000+ healthcare admins" },
              { icon: HeartHandshake, text: "500+ hospital & clinic clients" },
              { icon: Check, text: "30-day satisfaction guarantee" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                <Icon size={15} className="text-purple-600" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

