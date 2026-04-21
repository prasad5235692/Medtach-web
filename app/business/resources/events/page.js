import Link from "next/link";
import { getEventsContent } from "@/business/data/resources";
import { getLocale } from "@/lib/i18n/server";
import { CalendarDays, ArrowRight, MapPin, Clock, Users, Video } from "lucide-react";

const eventIcons = {
  "calendar-days": CalendarDays,
  "map-pin": MapPin,
  users: Users,
  video: Video,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getEventsContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function EventsPage() {
  const locale = await getLocale();
  const content = getEventsContent(locale);

  return (
    <div className="bg-white">
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <CalendarDays size={13} /> {content.hero.badge}
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
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-extrabold text-gray-900">{content.upcomingSection.title}</h2>
          <div className="mt-8 flex flex-col gap-6">
            {content.upcomingSection.items.map((item) => {
              const Icon = eventIcons[item.icon] ?? Video;

              return (
                <article key={item.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.typeColor}`}>{item.type}</span>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><CalendarDays size={12} /> {item.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {item.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                      <Icon size={17} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-purple-800">
                      <Users size={13} /> {item.seats}
                    </span>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-purple-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-purple-800"
                    >
                      {content.upcomingSection.registerLabel} <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-extrabold text-gray-900">{content.pastSection.title}</h2>
          <p className="mt-2 text-sm text-gray-500">{content.pastSection.description}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {content.pastSection.items.map((item) => (
              <li key={item.id} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
                <span className="text-sm font-medium text-gray-700">{item.title}</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">{item.type}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/business/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-800 transition hover:text-purple-700"
          >
            {content.pastSection.linkLabel} <ArrowRight size={13} />
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
