"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { localizeContent, localizeText } from "@/lib/i18n/content";
import { useLanguage } from "@/context/LanguageContext";

const footerLinks = {
  Courses: [
    { label: "Medical Coding",    href: "/course/medical-coding" },
    { label: "Medical Billing",   href: "/course/medical-billing" },
    { label: "BMCT",              href: "/course/bmct" },
    { label: "AMCT",              href: "/course/amct" },
    { label: "CPC Certification", href: "/course/cpc-certification" },
    { label: "CRC",               href: "/course/crc" },
  ],
  Company: [
    { label: "About Us",          href: "/about-us" },
    { label: "Our Team",          href: "/our-team" },
    { label: "Branches",          href: "/branches" },
    { label: "Training",          href: "/training" },
    { label: "Placements",        href: "/placements" },
    { label: "Internship",        href: "/internship" },
    { label: "College Training",  href: "/college-training" },
    { label: "1:1 Counseling",    href: "/counseling" },
    { label: "Blog",              href: "/blog" },
    { label: "Join as Teacher",   href: "/join-as-teacher" },
    { label: "Contact",           href: "/contact" },
  ],
};

const socials = [
  { label: "LinkedIn",  href: "#", Icon: Linkedin },
  { label: "Twitter",   href: "#", Icon: Twitter },
  { label: "YouTube",   href: "#", Icon: Youtube },
  { label: "Instagram", href: "#", Icon: Instagram },
];

export default function Footer() {
  const { language } = useLanguage();
  const localizedFooterLinks = localizeContent(footerLinks, language);

  return (
    <footer className="relative overflow-hidden bg-[#0d0422] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-800/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-orange-600/10 blur-3xl"
      />

      <div className="page-container relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Medtech Career"
                width={260}
                height={92}
                className="h-26 w-auto "
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              {localizeText(
                language,
                "Empowering students and professionals with world-class online education in healthcare coding, billing, and competitive exam coaching.",
              )}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-purple-300">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Phone size={14} />
                </span>
                +91 98765 43210
              </a>
              <a href="mailto:hello@MedtechCareer.com" className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-purple-300">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Mail size={14} />
                </span>
                hello@MedtechCareer.com
              </a>
              <span className="flex items-start gap-3 text-sm text-gray-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin size={14} />
                </span>
                12 Innovation Park, Bengaluru, KA 560001
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-purple-400/50 hover:bg-purple-400/10 hover:text-purple-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(localizedFooterLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-purple-300/60">
                {section}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-400 transition hover:text-purple-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-purple-900/50 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            {localizeText(language, "© {year} Medtech Career. All rights reserved.").replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Refund Policy"].map((t) => (
              <a key={t} href="#" className="text-xs text-gray-500 transition hover:text-purple-300">
                {localizeText(language, t)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
