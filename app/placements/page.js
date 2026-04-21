import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { getStaticPageContent } from "@/data/staticPageContent";
import Link from "next/link";
import { getLocale } from "@/lib/i18n/server";
import { Briefcase, TrendingUp, Users, Award, Building2, CheckCircle, ArrowRight, BookOpen, MessageSquare, Handshake } from "lucide-react";

const statIcons = {
  users: Users,
  "building-2": Building2,
  "trending-up": TrendingUp,
  briefcase: Briefcase,
};

const stepIcons = {
  "book-open": BookOpen,
  "message-square": MessageSquare,
  handshake: Handshake,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getStaticPageContent("placements", locale);

  return {
    title: content?.metadata?.title,
  };
}

export default async function PlacementsPage() {
  const locale = await getLocale();
  const content = getStaticPageContent("placements", locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-20 pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #7E22CE 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">{content.hero.label}</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              {content.hero.titleLeading}{" "}
              <span className="text-purple-700">{content.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-500">
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-800 hover:-translate-y-0.5"
              >
                {content.hero.primaryCtaLabel}
              </Link>
              <Link
                href="/courses"
                className="rounded-lg border border-purple-200 bg-white px-8 py-3.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                {content.hero.secondaryCtaLabel}
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Placement Journey Steps */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.journeySection.label}
              title={content.journeySection.title}
              subtitle={content.journeySection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {content.journeySection.steps.map((step, i) => {
              const Icon = stepIcons[step.icon] ?? BookOpen;
              return (
                <AnimateOnScroll key={step.id} animation="fade-up" delay={i * 120}>
                  <div className="relative flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.color} text-white`}>
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <span className={`mt-4 text-xs font-black uppercase tracking-widest ${step.textColor}`}>{content.journeySection.stepPrefix} {step.step}</span>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.description}</p>
                    {i < content.journeySection.steps.length - 1 && (
                      <ArrowRight size={20} className="absolute -right-3.5 top-1/2 hidden -translate-y-1/2 text-gray-300 sm:block" />
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-purple-700 py-14">
        <div className="page-container">
          <div className="grid grid-cols-2 gap-6 text-white sm:grid-cols-4">
            {content.stats.map((stat, i) => {
              const Icon = statIcons[stat.icon] ?? Users;
              return (
                <AnimateOnScroll key={stat.id} animation="fade-up" delay={i * 80}>
                  <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <Icon size={22} />
                    </div>
                    <span className="text-3xl font-black sm:text-4xl">{stat.number}</span>
                    <span className="text-sm text-purple-200">{stat.label}</span>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.partnersSection.label}
              title={content.partnersSection.title}
              subtitle={content.partnersSection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {content.partnersSection.companies.map((company, i) => (
              <AnimateOnScroll key={company.id} animation="fade-up" delay={Math.floor(i / 4) * 80}>
                <div className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-100">
                  {company.name}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.supportSection.label}
              title={content.supportSection.title}
              subtitle={content.supportSection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {content.supportSection.items.map((step, i) => (
              <AnimateOnScroll key={step.id} animation="fade-up" delay={i * 100}>
                <div className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-base font-black text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.storiesSection.label}
              title={content.storiesSection.title}
              subtitle={content.storiesSection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {content.storiesSection.stories.map((story, i) => (
              <AnimateOnScroll key={story.id} animation="fade-up" delay={i * 100}>
                <div className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <p className="text-sm italic leading-relaxed text-gray-600">
                    &ldquo;{story.story}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-5">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${story.bg} text-sm font-bold text-white`}>
                      {story.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{story.name}</p>
                      <p className="text-xs text-gray-400">{story.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold text-purple-700">{story.course}</p>
                      <p className="text-xs font-bold text-green-600">{story.salary}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#faf5ff] py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <AnimateOnScroll animation="fade-right">
              <SectionHeading label={content.eligibilitySection.label} title={content.eligibilitySection.title} />
              <ul className="mt-6 flex flex-col gap-3">
                {content.eligibilitySection.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-purple-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <SectionHeading label={content.guaranteeSection.label} title={content.guaranteeSection.title} />
              {content.guaranteeSection.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={`${index === 0 ? "mt-5" : "mt-4"} text-sm leading-relaxed text-gray-500`}>
                  {paragraph}
                </p>
              ))}
              <Link
                href="/courses"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                {content.guaranteeSection.ctaLabel}
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">{content.ctaSection.label}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{content.ctaSection.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300">
            {content.ctaSection.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
              {content.ctaSection.primaryCtaLabel}
            </Link>
            <Link href="/courses" className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10">
              {content.ctaSection.secondaryCtaLabel}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
