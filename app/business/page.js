import Link from "next/link";
import { getBusinessHomeContent } from "@/business/data/home";
import { getLocale } from "@/lib/i18n/server";
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
  ChevronLeft,
} from "lucide-react";

const solutionIcons = {
  "award": Award,
  "bar-chart-3": BarChart3,
  "book-open": BookOpen,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  users: Users,
};

const whyFeatureIcons = {
  award: Award,
  "bar-chart-3": BarChart3,
  clock: Clock,
  globe: Globe,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getBusinessHomeContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function BusinessHome() {
  const locale = await getLocale();
  const content = getBusinessHomeContent(locale);

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

        {/* Back button */}
        <div className="page-container relative">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 rounded-lg border border-purple-400/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-purple-200 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft size={14} />
            {content.hero.backLabel}
          </Link>
        </div>

        <div className="page-container relative text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wider">
            <Building2 size={13} />
            {content.hero.badge}
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            {content.hero.titleLeading}{" "}
            <span className="text-orange-400">
              {content.hero.titleHighlight}
            </span>{" "}
            {content.hero.titleTrailing}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-purple-100/80">
            {content.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-950/40 transition hover:bg-purple-600"
            >
              {content.hero.primaryCtaLabel} <ArrowRight size={16} />
            </Link>
            <Link
              href="/business/solutions"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-white/5 px-8 py-3.5 text-base font-semibold text-purple-200 transition hover:bg-white/10"
            >
              {content.hero.secondaryCtaLabel}
            </Link>
          </div>

          {/* Trust badges */}
          <p className="mt-8 text-xs text-purple-400/60">
            {content.hero.trustLabel}
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.id}>
                <p className="text-4xl font-extrabold text-purple-800">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{stat.label}</p>
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
              {content.solutionsSection.label}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
              {content.solutionsSection.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              {content.solutionsSection.description}
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.solutionsSection.items.map((item) => {
              const Icon = solutionIcons[item.icon] ?? BookOpen;

              return (
              <div
                key={item.id}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition group-hover:bg-purple-100">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            )})}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/business/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-800 transition hover:text-purple-700"
            >
              {content.solutionsSection.viewAllLabel} <ArrowRight size={14} />
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
                {content.whyUsSection.label}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                {content.whyUsSection.title}
              </h2>
              <p className="mt-4 text-base text-gray-600">
                {content.whyUsSection.description}
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {content.whyUsSection.points.map((item) => (
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
                {content.whyUsSection.primaryCtaLabel} <ArrowRight size={14} />
              </Link>
            </div>

            {/* Feature cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {content.whyUsSection.features.map((feature) => {
                const Icon = whyFeatureIcons[feature.icon] ?? Clock;

                return (
                <div
                  key={feature.id}
                  className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                    <Icon size={20} />
                  </span>
                  <h4 className="mt-3 text-sm font-semibold text-gray-900">{feature.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{feature.description}</p>
                </div>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20">
        <div className="page-container">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">
              {content.testimonialsSection.label}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              {content.testimonialsSection.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {content.testimonialsSection.items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-gray-600">"{testimonial.quote}"</p>
                <div className="mt-5">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-purple-700">{testimonial.role}</p>
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
            {content.ctaSection.title}
          </h2>
          <p className="mt-4 text-base text-purple-100">
            {content.ctaSection.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-purple-800 shadow transition hover:bg-purple-50"
            >
              {content.ctaSection.primaryCtaLabel} <ArrowRight size={16} />
            </Link>
            <Link
              href="/business/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-300/50 bg-purple-700/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-purple-700/60"
            >
              {content.ctaSection.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
