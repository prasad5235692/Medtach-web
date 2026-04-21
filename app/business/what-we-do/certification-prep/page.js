import Link from "next/link";
import { getCertificationPrepContent } from "@/business/what-we-do/certification-prep/data/content";
import { getLocale } from "@/lib/i18n/server";
import { Award, CheckCircle2, ArrowRight, BookOpen, Users } from "lucide-react";

export const dynamic = "force-dynamic";

const processIcons = {
  award: Award,
  "book-open": BookOpen,
  users: Users,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getCertificationPrepContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function CertificationPrepPage() {
  const locale = await getLocale();
  const content = getCertificationPrepContent(locale);

  return (
    <div className="bg-white">
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Award size={13} /> {content.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {content.hero.titleSegments.map((segment, index) => (
              <span key={segment.id} className={segment.highlight ? "text-orange-400" : undefined}>
                {index > 0 ? " " : null}
                {segment.text}
              </span>
            ))}
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
            <Link
              href="/business/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-white/5 px-8 py-3.5 text-sm font-semibold text-purple-200 transition hover:bg-white/10"
            >
              {content.hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50 py-12">
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.credentialsSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.credentialsSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.credentialsSection.items.map((credential) => (
              <div key={credential.id} className={`rounded-2xl border p-6 ${credential.color}`}>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold">{credential.code}</span>
                  <span className="rounded-full bg-white/60 px-2 py-0.5 text-xs font-semibold">{credential.body}</span>
                </div>
                <p className="mt-3 text-sm font-medium">{credential.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.programmeFeaturesSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.programmeFeaturesSection.title}</h2>
          </div>
          <ul className="mt-10 flex flex-col gap-4">
            {content.programmeFeaturesSection.items.map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-purple-700" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{content.processSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {content.processSection.items.map((item) => {
              const Icon = processIcons[item.icon] ?? BookOpen;

              return (
                <div key={item.id} className="relative rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <span className="absolute right-5 top-5 select-none text-5xl font-extrabold text-gray-100">{item.step}</span>
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
