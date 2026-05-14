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
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 rounded-l-3xl bg-linear-to-r from-white to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 rounded-r-3xl bg-linear-to-l from-white to-transparent" />

            <div className="flex overflow-hidden">
              <div className="flex animate-logo-scroll items-center gap-6 hover:[animation-play-state:paused]">
                {track.map((logo, index) => (
                  <div key={`${logo.src}-${index}`} className="group relative flex h-24 w-44 shrink-0 cursor-pointer select-none items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-200 p-4 shadow-md shadow-purple-900/30 transition-all duration-300 hover:scale-105 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/40">
                    <div className="relative h-full w-full">
                      <Image src={logo.src} alt={logo.alt} fill sizes="176px" className="object-contain" draggable={false} />
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