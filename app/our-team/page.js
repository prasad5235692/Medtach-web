import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { getOurTeamPageContent } from "@/our-team/data/content";
import { getLocale } from "@/lib/i18n/server";
import Link from "next/link";

export async function generateMetadata() {
  const locale = await getLocale();
  const content = getOurTeamPageContent(locale);

  return {
    title: content.metadata.title,
  };
}

function TeamCard({ member, showBio = false }) {
  return (
    <div className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${showBio ? `bg-linear-to-br ${member.bg}` : member.bg} text-lg font-bold text-white shadow-md transition-transform group-hover:scale-110`}>
        {member.avatar}
      </div>
      <h3 className="mt-4 text-base font-bold text-gray-900">{member.name}</h3>
      <p className="mt-1 text-xs font-medium text-purple-700">{member.role}</p>
      {showBio && member.bio && (
        <p className="mt-3 text-xs leading-relaxed text-gray-500">{member.bio}</p>
      )}
    </div>
  );
}

export default async function OurTeamPage() {
  const locale = await getLocale();
  const content = getOurTeamPageContent(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#faf5ff] pb-16 pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #7E22CE 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">{content.hero.label}</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {content.hero.titleLeading} <span className="text-purple-700">{content.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              {content.hero.description}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Management */}
      <section className="bg-white py-16">
        <div className="page-container">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading
              center
              label={content.managementSection.label}
              title={content.managementSection.title}
              subtitle={content.managementSection.subtitle}
            />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.managementSection.members.map((member, i) => (
              <AnimateOnScroll key={member.id} animation="fade-up" delay={i * 100}>
                <TeamCard member={member} showBio />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Teams */}
      {content.branchSections.map((section) => (
        <section key={section.id} className={`${section.bg} py-16`}>
          <div className="page-container">
            <AnimateOnScroll animation="fade-up">
              <SectionHeading
                label={section.label}
                title={section.title}
              />
            </AnimateOnScroll>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {section.members.map((member, i) => (
                <AnimateOnScroll key={member.id} animation="fade-up" delay={i * 80}>
                  <TeamCard member={member} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join the team CTA */}
      <section className="bg-gray-900 py-20 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">{content.cta.label}</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{content.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-300 text-sm">
            {content.cta.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/join-as-teacher"
              className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600"
            >
              {content.cta.primaryLabel}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:bg-white/10"
            >
              {content.cta.secondaryLabel}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
