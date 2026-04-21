import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { getStaticPageContent } from "@/data/staticPageContent";
import Link from "next/link";
import { getLocale } from "@/lib/i18n/server";
import {
  GraduationCap, Users, Building2, Award, CheckCircle,
  MapPin, BookOpen, BarChart3, PlayCircle,
} from "lucide-react";

const statIcons = {
  users: Users,
  "building-2": Building2,
  "book-open": BookOpen,
  award: Award,
};

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getStaticPageContent("collegeTraining", locale);

  return {
    title: content?.metadata?.title,
  };
}

export default async function CollegeTrainingPage() {
  const locale = await getLocale();
  const content = getStaticPageContent("collegeTraining", locale);

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
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />
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
              <a
                href="#programs"
                className="rounded-lg border border-purple-200 bg-white px-8 py-3.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                {content.hero.secondaryCtaLabel}
              </a>
            </div>
          </AnimateOnScroll>
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

      {/* Partner Colleges */}
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
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.partnersSection.colleges.map((college, i) => (
              <AnimateOnScroll key={college.id} animation="fade-up" delay={Math.floor(i / 4) * 80}>
                <div className="group flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                    <GraduationCap size={18} strokeWidth={1.8} />
                  </div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{college.name}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin size={11} className="shrink-0" /> {college.location}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="relative overflow-hidden bg-[#f8fafc] py-16">
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
              label={content.programsSection.label}
              title={content.programsSection.title}
              subtitle={content.programsSection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.programsSection.programs.map((program, i) => (
              <AnimateOnScroll key={program.id} animation="fade-up" delay={i * 80}>
                <div className={`flex flex-col gap-5 rounded-2xl border-2 ${program.color} p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                  <div>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${program.badgeColor}`}>
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{program.title}</h3>
                  <p className="text-xs text-gray-500 font-medium">{program.audience}</p>
                  <ul className="flex flex-col gap-2">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-purple-700" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="block w-full rounded-lg border border-purple-700 px-4 py-2.5 text-center text-sm font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-white"
                    >
                      {content.programsSection.cardCtaLabel}
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.gallerySection.label}
              title={content.gallerySection.title}
              subtitle={content.gallerySection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.gallerySection.items.map((item, i) => (
              <AnimateOnScroll key={item.id} animation="fade-up" delay={i * 80}>
                <div className={`group relative flex h-52 items-center justify-center overflow-hidden rounded-2xl ${item.placeholder} border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                  {item.type === "video" && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-purple-700 shadow-md transition group-hover:scale-110">
                      <PlayCircle size={28} />
                    </div>
                  )}
                  {item.type === "image" && (
                    <BarChart3 size={36} className="text-gray-300 group-hover:text-purple-300 transition" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/40 to-transparent p-4">
                    <p className="text-xs font-semibold text-white">{item.label}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
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
            <Link
              href="/contact"
              className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600"
            >
              {content.ctaSection.primaryCtaLabel}
            </Link>
            <Link
              href="/training"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10"
            >
              {content.ctaSection.secondaryCtaLabel}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
