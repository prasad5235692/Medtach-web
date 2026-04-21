import Link from "next/link";
import { getBusinessAboutContent } from "@/business/about/data/content";
import { getLocale } from "@/lib/i18n/server";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

export const dynamic = "force-dynamic";

const highlightIcons = {
  award: Award,
  "building-2": Building2,
  "trending-up": TrendingUp,
  users: Users,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getBusinessAboutContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function BusinessAboutPage() {
  const locale = await getLocale();
  const content = getBusinessAboutContent(locale);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-linear-to-br from-[#0d0422] to-[#0f172a] py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">{content.hero.label}</p>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-5 text-base text-purple-100/80">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-gray max-w-none text-base leading-relaxed text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">{content.storySection.title}</h2>
            {content.storySection.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? undefined : "mt-4"}>
                {paragraph.includes(content.storySection.highlightText) ? (
                  <>
                    {paragraph.split(content.storySection.highlightText)[0]}
                    <strong className="text-purple-800"> {content.storySection.highlightText}</strong>
                    {paragraph.split(content.storySection.highlightText)[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {content.highlights.map((highlight) => {
              const Icon = highlightIcons[highlight.icon] ?? Building2;

              return (
              <div
                key={highlight.id}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{highlight.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{highlight.description}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-50 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">
            {content.ctaSection.title}
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            {content.ctaSection.description}
          </p>
          <Link
            href="/business/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
          >
            {content.ctaSection.primaryCtaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
