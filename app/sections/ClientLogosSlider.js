"use client";

import Image from "next/image";
import { getClientPageContent } from "@/data/clientPageContent";
import { useLanguage } from "@/context/LanguageContext";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SectionHeading from "../components/SectionHeading";

export default function ClientLogosSlider() {
  const { language } = useLanguage();
  const content = getClientPageContent("clientLogos", language);

  // Infinite scrolling track
  const track = [...content.logos, ...content.logos];

  return (
    <section className="relative overflow-hidden py-16">
      <AnimateOnScroll animation="fade-up">
        <SectionHeading
          center
          label={content.label}
          title={content.title}
          subtitle={content.subtitle}
        />

        {/* Full Width */}
        <div className="relative mt-12">
          {/* Slider Wrapper */}
          <div className="relative">
            {/* Left Fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,0.96), transparent)",
              }}
            />

            {/* Right Fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24"
              style={{
                background:
                  "linear-gradient(to left, rgba(255,255,255,0.96), transparent)",
              }}
            />

            {/* Slider */}
            <div className="flex overflow-visible py-4">
              <div className="flex animate-logo-scroll items-center gap-7 hover:[animation-play-state:paused]">
                {track.map((logo, index) => (
                  <div
                    key={`${logo.src}-${index}`}
                    className="
                      group relative flex h-28 w-52 shrink-0
                      cursor-pointer select-none
                      items-center justify-center
                      rounded-[28px]
                      border border-white/20
                      bg-white/35
                      backdrop-blur-2xl
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:scale-105
                      hover:bg-white/50
                    "
                    style={{
                      boxShadow:
                        "0 12px 40px rgba(139,92,246,0.10), 0 4px 14px rgba(0,0,0,0.06)",
                    }}
                  >
                    {/* Outer Gradient Glow */}
                    <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-violet-300/15 via-white/5 to-cyan-300/15 opacity-80" />

                    {/* Main Glass Layer */}
                    <div className="absolute inset-[1px] rounded-[27px] bg-white/40 backdrop-blur-2xl" />

                    {/* Dark Premium Inner Core */}
                    <div
                      className="
                        absolute inset-3 rounded-2xl
                        border border-white/10
                        bg-purple-900/[0.09]
                        backdrop-blur-md
                        transition-all duration-500
                        group-hover:bg-purple-900/[0.12]
                      "
                    />

                 
                    {/* Logo */}
                    <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-5">
                      <div className="flex h-full w-full items-center justify-center">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={150}
                          height={65}
                          draggable={false}
                          className="
                            h-auto
                            max-h-[60px]
                            w-auto
                            max-w-[140px]
                            object-contain
                            drop-shadow-md
                            contrast-125
                            brightness-100
                            transition-all duration-500
                            group-hover:scale-105
                          "
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="relative mt-8 text-center text-sm font-medium tracking-wide text-gray-400">
          {content.trustLine}
        </p>
      </AnimateOnScroll>
    </section>
  );
}