import Link from "next/link";
import { getAnalyticsContent } from "@/business/data/howWeDoIt";
import { getLocale } from "@/lib/i18n/server";
import { BarChart3, ArrowRight, TrendingUp, PieChart, Users, Download } from "lucide-react";

const reportIcons = {
  download: Download,
  "pie-chart": PieChart,
  "trending-up": TrendingUp,
  users: Users,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getAnalyticsContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function AnalyticsPage() {
  const locale = await getLocale();
  const content = getAnalyticsContent(locale);

  return (
    <div className="bg-white">
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <BarChart3 size={13} /> {content.hero.badge}
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

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {content.metrics.map((metric) => (
              <div key={metric.id}>
                <p className="text-3xl font-extrabold text-purple-800">{metric.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.reportsSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.reportsSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {content.reportsSection.items.map((report) => {
              const Icon = reportIcons[report.icon] ?? Users;

              return (
                <div key={report.id} className="flex items-start gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{report.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{report.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.roiSection.label}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.roiSection.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600">{content.roiSection.description}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {content.roiSection.stats.map((item) => (
              <div key={item.id} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-4xl font-extrabold text-purple-800">{item.metric}</p>
                <p className="mt-2 text-sm text-gray-600">{item.label}</p>
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
