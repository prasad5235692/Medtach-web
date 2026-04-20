"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { getClientPageContent } from "@/data/clientPageContent";
import { useLanguage } from "@/context/LanguageContext";

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  instagram: Instagram,
};

export default function Footer() {
  const { language } = useLanguage();
  const content = getClientPageContent("siteFooter", language);

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
                alt={content.logoAlt}
                width={260}
                height={92}
                className="h-26 w-auto "
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">{content.description}</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={`tel:${content.contact.phone}`} className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-purple-300">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Phone size={14} />
                </span>
                {content.contact.phone}
              </a>
              <a href={`mailto:${content.contact.email}`} className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-purple-300">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Mail size={14} />
                </span>
                {content.contact.email}
              </a>
              <span className="flex items-start gap-3 text-sm text-gray-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin size={14} />
                </span>
                {content.contact.address}
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              {content.socials.map(({ label, icon, href }) => {
                const Icon = socialIcons[icon];

                return (
                  <a
                    key={icon}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-purple-400/50 hover:bg-purple-400/10 hover:text-purple-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {content.sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-purple-300/60">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-purple-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-purple-900/50 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            {content.copyrightTemplate.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex gap-6">
            {content.policies.map((policy) => (
              <a key={policy} href="#" className="text-xs text-gray-500 transition hover:text-purple-300">
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}