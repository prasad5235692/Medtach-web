import Link from "next/link";
import { getAiTransformationContent } from "@/business/ai-transformation/data/content";
import { getLocale } from "@/lib/i18n/server";
import { Sparkles, CheckCircle2, ArrowRight, Brain, Zap, Shield, TrendingUp, Users, BookOpen } from "lucide-react";

export const dynamic = "force-dynamic";

const useCaseIcons = {
  brain: Brain,
  "book-open": BookOpen,
  shield: Shield,
  "trending-up": TrendingUp,
  users: Users,
  zap: Zap,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getAiTransformationContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function AITransformationPage() {
  const locale = await getLocale();
  const content = getAiTransformationContent(locale);

  return (
    <div className="bg-white">
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
            <Sparkles size={13} /> {content.hero.badge}
          </span>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-purple-400">{content.hero.newLabel}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            {content.hero.titleSegments.map((segment, index) => (
              <span key={segment.id} className={segment.highlight ? "text-orange-400" : undefined}>
                {index > 0 ? " " : null}
                {segment.text}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-purple-100/80">
            {content.hero.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              {content.hero.primaryCtaLabel} <ArrowRight size={15} />
            </Link>
            <Link
              href="/business/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-white/5 px-8 py-3.5 text-sm font-semibold text-purple-200 transition hover:bg-white/10"
            >
              {content.hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.packagesSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.packagesSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {content.packagesSection.items.map((item) => (
              <div key={item.id} className={`rounded-2xl border p-8 shadow-sm ${item.color}`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${item.highlight ? "text-purple-200" : "text-purple-700"}`}>{item.subtitle}</p>
                <h3 className={`mt-2 text-xl font-extrabold ${item.highlight ? "text-white" : "text-gray-900"}`}>{item.name}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${item.highlight ? "text-purple-100" : "text-gray-600"}`}>{item.description}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {item.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2.5 text-sm ${item.highlight ? "text-purple-100" : "text-gray-700"}`}>
                      <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${item.highlight ? "text-purple-300" : "text-purple-700"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/business/contact"
                  className={`mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition ${item.highlight ? "bg-white text-purple-800 hover:bg-purple-50" : "bg-purple-700 text-white hover:bg-purple-800"}`}
                >
                  {item.ctaLabel} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.useCasesSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.useCasesSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.useCasesSection.items.map((item) => {
              const Icon = useCaseIcons[item.icon] ?? Brain;

              return (
                <div key={item.id} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:border-purple-300 hover:shadow-md">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.roadmapSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.roadmapSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {content.roadmapSection.items.map((item) => (
              <div key={item.id} className="relative rounded-2xl border border-gray-100 p-6 shadow-sm">
                <span className="absolute right-5 top-5 select-none text-5xl font-extrabold text-gray-100">{item.step}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                  <Sparkles size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {content.stats.map((item) => (
              <div key={item.id}>
                <p className="text-4xl font-extrabold text-purple-800">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">{content.ctaSection.title}</h2>
          <p className="mt-4 text-base text-purple-100">{content.ctaSection.description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
            >
              {content.ctaSection.primaryCtaLabel} <ArrowRight size={15} />
            </Link>
            <Link
              href="/business/what-we-do/on-demand-learning"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              {content.ctaSection.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
