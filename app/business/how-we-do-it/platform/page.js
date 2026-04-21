import Link from "next/link";
import { getPlatformContent } from "@/business/data/howWeDoIt";
import { getLocale } from "@/lib/i18n/server";
import { Monitor, CheckCircle2, ArrowRight, Play, Shield, Zap, Globe } from "lucide-react";

const featureIcons = {
  globe: Globe,
  play: Play,
  shield: Shield,
  zap: Zap,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getPlatformContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function PlatformPage() {
  const locale = await getLocale();
  const content = getPlatformContent(locale);

  return (
    <div className="bg-white">
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Monitor size={13} /> {content.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {content.hero.titleLeading}{" "}
            <span className="text-orange-400">{content.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            {content.hero.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-600"
            >
              {content.hero.primaryCtaLabel} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.featuresSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.featuresSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {content.featuresSection.items.map((feature) => {
              const Icon = featureIcons[feature.icon] ?? Play;

              return (
                <div key={feature.id} className="flex items-start gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{content.highlightsSection.title}</h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.highlightsSection.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-purple-700" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-8">
              <h3 className="text-xl font-bold text-purple-950">{content.audienceSection.learnerCard.title}</h3>
              <p className="mt-3 text-sm text-purple-900">{content.audienceSection.learnerCard.description}</p>
              <ul className="mt-5 flex flex-col gap-2">
                {content.audienceSection.learnerCard.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-purple-900">
                    <CheckCircle2 size={15} className="text-purple-700" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{content.audienceSection.adminCard.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{content.audienceSection.adminCard.description}</p>
              <ul className="mt-5 flex flex-col gap-2">
                {content.audienceSection.adminCard.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-purple-700" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">{content.ctaSection.title}</h2>
          <p className="mt-4 text-base text-purple-100">{content.ctaSection.description}</p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            {content.ctaSection.primaryCtaLabel} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
