import Link from "next/link";
import { getPricingContent } from "@/business/data/pricing";
import { getLocale } from "@/lib/i18n/server";
import {
  Check, Minus, Users, Building2, Brain, GraduationCap,
  Zap, Shield, Globe, Puzzle, HeartHandshake,
  Star, ArrowRight, ChevronLeft,
} from "lucide-react";

const pricingIcons = {
  "building-2": Building2,
  brain: Brain,
  check: Check,
  globe: Globe,
  "graduation-cap": GraduationCap,
  "heart-handshake": HeartHandshake,
  puzzle: Puzzle,
  shield: Shield,
  star: Star,
  users: Users,
  zap: Zap,
};

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

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getPricingContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function PricingPage() {
  const locale = await getLocale();
  const content = getPricingContent(locale);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-20 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl ">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 rounded-lg border border-purple-400/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-purple-200 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft size={14} />
            {content.hero.backLabel}
          </Link>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-400">
            {content.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {content.hero.titleLine1}<br />
            <span className="text-orange-400">{content.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            {content.hero.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="page-container">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {content.plans.map((plan) => {
              const Icon = pricingIcons[plan.icon] ?? Users;

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
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check size={14} className="mt-0.5 shrink-0 text-purple-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-gray-400">
            {content.note.prefix}{" "}
            <Link href="/business/contact" className="text-purple-600 hover:underline">{content.note.linkLabel}</Link>{" "}
            {content.note.suffix}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="page-container">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-700">{content.addonsSection.label}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">{content.addonsSection.title}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.addonsSection.items.map((item) => {
              const Icon = pricingIcons[item.icon] ?? Zap;

              return (
                <div key={item.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-semibold text-purple-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/business/request-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block text-sm font-semibold text-purple-700 hover:text-purple-900 hover:underline"
                  >
                    {item.linkLabel}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-purple-700">{content.comparisonSection.label}</p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">{content.comparisonSection.title}</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-3 border-b border-gray-100 bg-gray-50">
              <div className="px-6 py-4" />
              <div className="border-l border-gray-100 px-6 py-4 text-center">
                <p className="text-sm font-bold text-gray-700">{content.comparisonSection.headers.teamLabel}</p>
                <p className="text-xs text-gray-400">{content.comparisonSection.headers.teamSeats}</p>
              </div>
              <div className="border-l border-gray-100 bg-purple-50 px-6 py-4 text-center">
                <p className="text-sm font-bold text-purple-800">{content.comparisonSection.headers.enterpriseLabel}</p>
                <p className="text-xs text-purple-500">{content.comparisonSection.headers.enterpriseSeats}</p>
              </div>
            </div>

            {content.comparisonSection.categories.map((category) => (
              <div key={category.id}>
                <div className="grid grid-cols-3 border-b border-gray-100 bg-gray-50/80">
                  <div className="col-span-3 px-6 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-600">{category.category}</p>
                  </div>
                </div>
                {category.rows.map((row, rowIndex) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-3 border-b border-gray-50 ${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
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

            <div className="grid grid-cols-3 border-t border-gray-100 bg-gray-50">
              <div className="px-6 py-4" />
              <div className="border-l border-gray-100 px-4 py-4 text-center">
                <Link
                  href="/business/contact"
                  className="inline-block rounded-lg border border-purple-200 px-4 py-2 text-xs font-semibold text-purple-700 transition hover:bg-purple-50"
                >
                  {content.comparisonSection.footer.teamCtaLabel}
                </Link>
              </div>
              <div className="border-l border-gray-100 bg-purple-50 px-4 py-4 text-center">
                <a
                  href="/business/request-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-purple-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-purple-800"
                >
                  {content.comparisonSection.footer.enterpriseCtaLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-16 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Globe size={36} className="mx-auto mb-4 text-orange-400" />
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            {content.languageSection.titleLeading} <span className="text-orange-400">{content.languageSection.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-purple-100/80">
            {content.languageSection.description}
          </p>
          <a
            href="/business/request-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:bg-orange-600"
          >
            {content.languageSection.primaryCtaLabel} <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-purple-600">{content.bottomCtaSection.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            {content.bottomCtaSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            {content.bottomCtaSection.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/business/request-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm shadow-purple-200 transition hover:bg-purple-800"
            >
              {content.bottomCtaSection.primaryCtaLabel} <ArrowRight size={14} />
            </a>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-8 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              {content.bottomCtaSection.secondaryCtaLabel}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {content.bottomCtaSection.trustItems.map((item) => {
              const Icon = pricingIcons[item.icon] ?? Star;

              return (
                <div key={item.id} className="flex items-center gap-2 text-sm text-gray-500">
                <Icon size={15} className="text-purple-600" />
                {item.text}
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

