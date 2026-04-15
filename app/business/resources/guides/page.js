import Link from "next/link";
import { BookMarked, ArrowRight, Download, Play, FileText } from "lucide-react";

export const metadata = {
  title: "Guides & Webinars — MedTech Business",
  description: "Free guides, playbooks, and recorded webinars to help your healthcare L&D teams succeed.",
};

const resources = [
  {
    type: "Guide",
    icon: Download,
    badge: "Free PDF",
    badgeColor: "bg-purple-100 text-purple-800",
    title: "The L&D Leader's Playbook for Healthcare Team Training",
    desc: "A step-by-step guide to designing, deploying, and measuring a training programme for medical coding and billing teams. Includes budget templates and KPI frameworks.",
    cta: "Download Guide",
    href: "/business/contact",
  },
  {
    type: "Guide",
    icon: Download,
    badge: "Free PDF",
    badgeColor: "bg-purple-100 text-purple-800",
    title: "CPC Exam Prep Cheat Sheet for Supervisors",
    desc: "A condensed reference covering the top 20 exam topics, scoring strategies, and a 12-week study plan template your managers can share with their teams.",
    cta: "Download Cheat Sheet",
    href: "/business/contact",
  },
  {
    type: "Webinar",
    icon: Play,
    badge: "Recorded",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "From Skills Gaps to Certification: Building a Results-Driven L&D Programme",
    desc: "Our Head of Curriculum and a guest HIM Director from a 500-bed hospital share the exact framework they used to take coding accuracy from 72% to 97%.",
    cta: "Watch Now",
    href: "/business/contact",
  },
  {
    type: "Webinar",
    icon: Play,
    badge: "Recorded",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "AI in Healthcare Coding: What Every Coder Needs to Know in 2026",
    desc: "A 45-minute session exploring how AI-assisted coding tools are changing the job — and what skills coders need to stay relevant and valuable.",
    cta: "Watch Webinar",
    href: "/business/contact",
  },
  {
    type: "Report",
    icon: FileText,
    badge: "Industry Report",
    badgeColor: "bg-emerald-100 text-emerald-700",
    title: "State of Healthcare Workforce Learning in India — 2026",
    desc: "Survey data from 300+ L&D managers across hospitals and healthcare BPOs. Covers budget trends, top skills priorities, and the impact of regulatory changes on training needs.",
    cta: "Get the Report",
    href: "/business/contact",
  },
  {
    type: "Guide",
    icon: Download,
    badge: "Free PDF",
    badgeColor: "bg-purple-100 text-purple-800",
    title: "Denial Management Masterclass — Workbook & Templates",
    desc: "Practical AR and denial management workbook covering the top 10 denial codes, root-cause workflows, and template letters your billing team can use immediately.",
    cta: "Download Workbook",
    href: "/business/contact",
  },
];

export default function GuidesWebinarsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-linear-to-br from-[#0d0422] via-[#1a0535] to-[#0f172a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <BookMarked size={13} /> Guides & Webinars
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            Free Resources for{" "}
            <span className="text-orange-400">
              Healthcare L&D Leaders
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-purple-100/80">
            Practical guides, recorded webinars, and industry reports to help you build a
            world-class training programme for your healthcare team.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map(({ type, icon: Icon, badge, badgeColor, title, desc, cta, href }) => (
              <div key={title} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColor}`}>{badge}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                    <Icon size={17} />
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-bold text-gray-900 leading-snug">{title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-500">{desc}</p>
                <Link
                  href={href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-800 transition hover:text-purple-700"
                >
                  {cta} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-linear-to-br from-purple-50 to-purple-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900">Get new resources in your inbox</h2>
          <p className="mt-3 text-sm text-gray-600">
            Join 2,000+ healthcare L&D professionals who receive our monthly resource roundup.
          </p>
          <Link
            href="/business/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-purple-800"
          >
            Subscribe to Updates <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-purple-800 to-purple-700 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white">Want personalised advice for your team?</h2>
          <p className="mt-4 text-base text-purple-100">
            Book a free 30-minute strategy call with one of our learning consultants.
          </p>
          <Link
            href="/business/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-purple-800 shadow transition hover:bg-purple-50"
          >
            Book a Strategy Call <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
