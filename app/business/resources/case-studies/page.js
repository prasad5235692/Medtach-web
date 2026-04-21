import Link from "next/link";
import { getCaseStudiesContent } from "@/business/resources/case-studies/data/content";
import { getLocale } from "@/lib/i18n/server";
import { FileText, ArrowRight, Building2, TrendingUp, Award } from "lucide-react";

export const dynamic = "force-dynamic";

const caseStudyIcons = {
  award: Award,
  "building-2": Building2,
  "trending-up": TrendingUp,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getCaseStudiesContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function CaseStudiesPage() {
  const locale = await getLocale();
  const content = getCaseStudiesContent(locale);

  return (
    <div className="bg-white">
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <FileText size={13} /> {content.hero.badge}
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
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-12">
            {content.items.map((item) => {
              const Icon = caseStudyIcons[item.icon] ?? Building2;

              return (
                <article key={item.id} className={`rounded-2xl border p-8 ${item.color}`}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm">
                      <Icon size={22} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{item.type}</p>
                      <h2 className="mt-1 text-xl font-extrabold text-gray-900">{item.org}</h2>
                      <p className="mt-1 text-base font-semibold text-purple-800">{item.headline}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{content.labels.challenge}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-800">{content.labels.solution}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-bold text-gray-800">{content.labels.results}</h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {item.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-700" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="mt-6 border-l-4 border-purple-600 pl-4">
                    <p className="text-sm italic text-gray-600">"{item.quote}"</p>
                    <footer className="mt-1 text-xs font-semibold text-purple-800">— {item.quotee}</footer>
                  </blockquote>
                </article>
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
