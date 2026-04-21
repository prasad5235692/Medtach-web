import Link from "next/link";
import { getBusinessSolutionsContent } from "@/business/data/company";
import { getLocale } from "@/lib/i18n/server";
import { BookOpen, ShieldCheck, Award, TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";

const solutionIcons = {
  award: Award,
  "bar-chart-3": BarChart3,
  "book-open": BookOpen,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
  users: Users,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getBusinessSolutionsContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function SolutionsPage() {
  const locale = await getLocale();
  const content = getBusinessSolutionsContent(locale);

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

      {/* Solutions grid */}
      <section className="py-20">
        <div className="page-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.solutions.map((solution) => {
              const Icon = solutionIcons[solution.icon] ?? BookOpen;

              return (
              <div
                key={solution.id}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{solution.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{solution.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-800"
                    >
                      {tag}
                    </span>
                  ))}
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
            {content.ctaSection.primaryCtaLabel} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
