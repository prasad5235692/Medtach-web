import Link from "next/link";
import { getGuidesContent } from "@/business/data/resources";
import { getLocale } from "@/lib/i18n/server";
import { BookMarked, ArrowRight, Download, Play, FileText } from "lucide-react";

const resourceIcons = {
  download: Download,
  "file-text": FileText,
  play: Play,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getGuidesContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function GuidesWebinarsPage() {
  const locale = await getLocale();
  const content = getGuidesContent(locale);

  return (
    <div className="bg-white">
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <BookMarked size={13} /> {content.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            {content.hero.titleLeading}{" "}
            <span className="text-orange-400">{content.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            {content.hero.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.items.map((item) => {
              const Icon = resourceIcons[item.icon] ?? Download;

              return (
                <div key={item.id} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.badgeColor}`}>{item.badge}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                      <Icon size={17} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-gray-900">{item.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-500">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-800 transition hover:text-purple-700"
                  >
                    {item.cta} <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">{content.newsletterSection.title}</h2>
          <p className="mt-3 text-sm text-gray-600">{content.newsletterSection.description}</p>
          <Link
            href="/business/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-purple-800"
          >
            {content.newsletterSection.primaryCtaLabel} <ArrowRight size={14} />
          </Link>
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
