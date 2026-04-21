import Link from "next/link";
import { getProfessionalServicesContent } from "@/business/what-we-do/professional-services/data/content";
import { getLocale } from "@/lib/i18n/server";
import { Briefcase, CheckCircle2, ArrowRight, ClipboardList, Lightbulb, Headphones, RefreshCw } from "lucide-react";

export const dynamic = "force-dynamic";

const serviceIcons = {
  "clipboard-list": ClipboardList,
  headphones: Headphones,
  lightbulb: Lightbulb,
  "refresh-cw": RefreshCw,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getProfessionalServicesContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function ProfessionalServicesPage() {
  const locale = await getLocale();
  const content = getProfessionalServicesContent(locale);

  return (
    <div className="bg-white">
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Briefcase size={13} /> {content.hero.badge}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.servicesSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.servicesSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {content.servicesSection.items.map((item) => {
              const Icon = serviceIcons[item.icon] ?? ClipboardList;

              return (
                <div key={item.id} className="flex items-start gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.deliverablesSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.deliverablesSection.title}</h2>
          </div>
          <ul className="mt-10 flex flex-col gap-4">
            {content.deliverablesSection.items.map((item) => (
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
            <p className="mt-3 text-base text-gray-500">{content.processSection.description}</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {content.processSection.items.map((item) => (
              <div key={item.id} className="relative rounded-2xl border border-gray-100 p-6 shadow-sm">
                <span className="absolute right-5 top-5 select-none text-5xl font-extrabold text-gray-100">{item.step}</span>
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
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
