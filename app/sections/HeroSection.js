import Link from "next/link";
import Image from "next/image";
import { Award, Calendar } from "lucide-react";
import { getLocale } from "@/lib/i18n/server";
import { localizeContent } from "@/lib/i18n/content";

const STRIPS = [
  { delay: "0.70s", offset: "0vw" },
  { delay: "0.50s", offset: "-20vw" },
  { delay: "0.20s", offset: "-40vw" },
  { delay: "0.50s", offset: "-60vw" },
  { delay: "0.70s", offset: "-80vw" },
];

export default async function HeroSection() {
  const locale = await getLocale();
  const content = localizeContent(
    {
      titleTop: "Launch Your Career",
      titleAccent: "in Healthcare Coding",
      description:
        "Medtech Career provides job-oriented Medical Coding, Medical Billing, and CPC Certification training — placing graduates in leading healthcare BPOs and MNCs across India.",
      primaryCta: "Explore Courses",
      secondaryCta: "Join 1-1 career Counseling",
      stats: [
        { value: "500+", label: "Courses" },
        { value: "12k+", label: "Graduates" },
        { value: "95%", label: "Placement" },
      ],
      certificationLabel: "Certification",
      certificationValue: "CPC / CCS Ready",
      classesLabel: "Live Classes",
      classesValue: "Daily Sessions",
    },
    locale,
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#eef5ff] text-gray-900">
      <div className="absolute inset-0 flex">
        {STRIPS.map((strip, i) => (
          <div key={i} className="relative flex-1 overflow-hidden">
            <div className="strip hero-bg absolute top-0 h-full" style={{ width: "100vw", left: strip.offset, animationDelay: strip.delay }} />
          </div>
        ))}
      </div>
      <div className="page-container relative z-10 flex min-h-screen flex-col justify-center py-28 lg:py-0">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-7">
            <div className="animate-textUp" style={{ animationDelay: "1s" }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-300 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                Medtech Career
              </span>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 -left-80 h-56 w-56 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            <h1 className="animate-textUp text-4xl text-white font-black leading-tight tracking-tight sm:text-5xl xl:text-6xl" style={{ animationDelay: "1.2s" }}>
              {content.titleTop}
              <br />
              <span className="text-orange-400">{content.titleAccent}</span>
            </h1>

            <p className="animate-textUp max-w-lg text-base leading-relaxed text-white/55" style={{ animationDelay: "1.4s" }}>
              {content.description}
            </p>

            <div className="animate-textUp flex flex-wrap gap-4" style={{ animationDelay: "1.6s" }}>
              <Link href="/courses" className="group inline-flex items-center gap-2 rounded-lg bg-purple-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:bg-purple-600">
                {content.primaryCta}
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10">
                {content.secondaryCta}
              </Link>
            </div>

            <div className="animate-fadeIn flex items-center gap-8 border-t border-white/10 pt-6" style={{ animationDelay: "1.8s" }}>
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-white/35">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex animate-fadeIn justify-center lg:justify-end" style={{ animationDelay: "1.8s" }}>
            <div className="relative w-full max-w-md">
              <Image src="/background/students.png" alt="Hero Image" width={500} height={500} className="relative z-10 rounded-2xl shadow-lg" />

              <div className="absolute -bottom-5 -left-5 z-10 flex items-center gap-3 rounded-xl border border-white/10 bg-[#07071a] px-4 py-3 shadow-xl">
                <Award size={20} className="text-white/60" />
                <div>
                  <p className="text-xs text-white/40">{content.certificationLabel}</p>
                  <p className="text-sm font-bold text-white">{content.certificationValue}</p>
                </div>
              </div>

              <div className="absolute -right-5 -top-5 z-10 flex items-center gap-3 rounded-xl border border-purple-500/20 bg-purple-600/10 px-4 py-3 shadow-xl backdrop-blur-sm">
                <Calendar size={20} className="text-purple-300/60" />
                <div>
                  <p className="text-xs text-purple-300/60">{content.classesLabel}</p>
                  <p className="text-sm font-bold text-purple-200">{content.classesValue}</p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 2px)",
                  backgroundSize: "12px 12px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-purple-400 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-purple-400" />
        </div>
      </div>
    </section>
  );
}
