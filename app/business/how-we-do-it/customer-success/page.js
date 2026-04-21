import Link from "next/link";
import { getCustomerSuccessContent } from "@/business/how-we-do-it/customer-success/data/content";
import { getLocale } from "@/lib/i18n/server";
import { HeartHandshake, CheckCircle2, ArrowRight, UserCheck, Clock, MessageSquare, TrendingUp } from "lucide-react";

export const dynamic = "force-dynamic";

const featureIcons = {
  clock: Clock,
  "message-square": MessageSquare,
  "trending-up": TrendingUp,
  "user-check": UserCheck,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getCustomerSuccessContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function CustomerSuccessPage() {
  const locale = await getLocale();
  const content = getCustomerSuccessContent(locale);

  return (
    <div className="bg-white">
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <HeartHandshake size={13} /> {content.hero.badge}
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.featuresSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.featuresSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {content.featuresSection.items.map((feature) => {
              const Icon = featureIcons[feature.icon] ?? UserCheck;

              return (
                <div key={feature.id} className="flex items-start gap-5 rounded-2xl border border-gray-100 p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <Icon size={24} />
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                      <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-semibold text-purple-800">{feature.planLabel}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700">{content.tiersSection.label}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">{content.tiersSection.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.tiersSection.items.map((tier) => (
              <div key={tier.id} className={`rounded-2xl border p-6 shadow-sm ${tier.highlight ? "border-purple-300 bg-purple-700 text-white" : "border-gray-100 bg-white"}`}>
                <h3 className={`text-lg font-extrabold ${tier.highlight ? "text-white" : "text-gray-900"}`}>{tier.name}</h3>
                <p className={`mt-1 text-sm ${tier.highlight ? "text-purple-100" : "text-gray-500"}`}>
                  {content.tiersSection.responseLabel} <strong>{tier.response}</strong>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tier.channels.map((channel) => (
                    <span key={channel} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tier.highlight ? "bg-white/20 text-white" : "bg-purple-50 text-purple-800"}`}>
                      {channel}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 flex flex-col gap-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 text-sm ${tier.highlight ? "text-purple-100" : "text-gray-700"}`}>
                      <CheckCircle2 size={15} className={tier.highlight ? "text-purple-200" : "text-purple-700"} />
                      {feature}
                    </li>
                  ))}
                </ul>
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
