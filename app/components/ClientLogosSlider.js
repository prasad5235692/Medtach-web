"use client";

import Image from "next/image";
import { getClientPageContent } from "@/data/clientPageContent";
import { useLanguage } from "@/context/LanguageContext";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

export default function ClientLogosSlider() {
  const { language } = useLanguage();
  const content = getClientPageContent("clientLogos", language);
  const track = [...content.logos, ...content.logos];

  return (
    <section className="relative overflow-hidden py-10">
      <AnimateOnScroll animation="fade-up">
        <SectionHeading center label={content.label} title={content.title} subtitle={content.subtitle} />

        <div className="page-container relative">
          <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/30 py-12 shadow-xl shadow-purple-100/40 backdrop-blur-md">
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 rounded-l-3xl bg-linear-to-r from-[#faf5ff] to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 rounded-r-3xl bg-linear-to-l from-[#faf5ff] to-transparent" />

            <div className="flex overflow-hidden">
              <div className="flex animate-logo-scroll items-center gap-6 hover:[animation-play-state:paused]">
                {track.map((logo, index) => (
                  <div key={`${logo.src}-${index}`} className="group relative flex h-30 w-60 shrink-0 cursor-pointer select-none items-center justify-center rounded-full border border-white/10 bg-white/40 p-3 shadow-md shadow-purple-100/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-200/80 hover:bg-white/80 hover:shadow-lg hover:shadow-purple-200/40">
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at center, rgba(168,85,247,0.08) 0%, transparent 70%)" }} />
                    <div className="relative h-full w-full grayscale transition-all duration-300 group-hover:grayscale-0">
                      <Image src={logo.src} alt={logo.alt} fill sizes="400px" className="object-contain" draggable={false} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="relative mt-8 text-center text-xs text-gray-400">{content.trustLine}</p>
      </AnimateOnScroll>
    </section>
  );
}