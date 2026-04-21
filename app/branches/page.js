import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { localizeContent } from "@/lib/i18n/content";
import { getLocale } from "@/lib/i18n/server";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { branchesPageContent } from "./data";

export async function generateMetadata() {
  const locale = await getLocale();
  const metadata = localizeContent(branchesPageContent.metadata, locale);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function BranchesPage() {
  const locale = await getLocale();
  const content = localizeContent(branchesPageContent, locale);

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
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimateOnScroll animation="fade-down">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700">{content.hero.label}</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {content.hero.titleLeading} <span className="text-purple-700">{content.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-500">{content.hero.description}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="relative bg-white py-20">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {content.branches.map((branch, i) => (
              <AnimateOnScroll key={branch.id} animation="fade-up" delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* card header */}
                  <div className="relative overflow-hidden rounded-t-2xl bg-[#f8fafc] px-6 py-8">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <span className={`relative mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${branch.badgeColor}`}>{branch.badge}</span>
                    <h2 className="relative text-lg font-bold text-gray-900">{branch.name}</h2>
                  </div>

                  {/* card body */}
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" />
                      <p className="text-sm text-gray-600 whitespace-pre-line">{branch.address}</p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-purple-700" />
                      <a href={`tel:${branch.phone.replace(/[\s-]/g, "")}`} className="text-sm font-medium text-gray-700 hover:text-purple-700 transition">
                        {branch.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-purple-700" />
                      <a href={`mailto:${branch.email}`} className="text-sm font-medium text-gray-700 hover:text-purple-700 transition break-all">
                        {branch.email}
                      </a>
                    </div>

                    {/* Map link */}
                    <div className="mt-auto pt-4">
                      <a href={`https://www.google.com/maps/search/?api=1&query=${branch.mapQuery}`} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100">
                        <MapPin className="h-4 w-4" />
                        {content.mapButtonLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Advantage */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#7E22CE 1px, transparent 1px), linear-gradient(to right, #7E22CE 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="page-container relative">
          <AnimateOnScroll animation="fade-up">
            <SectionHeading center label={content.classroomAdvantage.label} title={content.classroomAdvantage.title} subtitle={content.classroomAdvantage.subtitle} />
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.classroomAdvantage.items.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-[#faf5ff] p-8 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-700">{content.officeHours.label}</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">{content.officeHours.title}</h2>
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <tbody>
                    {content.officeHours.rows.map((row, i) => (
                      <tr key={row.id} className={i % 2 === 0 ? "bg-white" : "bg-purple-50"}>
                        <td className="px-5 py-3 font-medium text-gray-700 text-left">{row.day}</td>
                        <td className="px-5 py-3 text-gray-500 text-right">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-900 py-20 text-center text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-700/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />
        <AnimateOnScroll animation="fade-up">
          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl">{content.cta.title}</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-300">{content.cta.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/courses" className="rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold transition hover:bg-orange-600">
                {content.cta.primaryLabel}
              </Link>
              <Link href="/contact" className="rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold transition hover:border-white/50 hover:bg-white/10">
                {content.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
