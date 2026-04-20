"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { getClientPageContent } from "@/data/clientPageContent";
import { useLanguage } from "@/context/LanguageContext";

export default function AuthFooter() {
  const { language } = useLanguage();
  const content = getClientPageContent("authFooter", language);

  return (
    <footer className="border-t border-purple-100 bg-white">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image src="/logo.png" alt={content.logoAlt} width={150} height={52} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">{content.description}</p>
            <div className="mt-1 flex gap-3">
              {content.socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition hover:border-purple-400 hover:text-purple-600">
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">{content.courseSectionTitle}</h3>
            <ul className="flex flex-col gap-2">
              {content.courseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 transition hover:text-purple-700">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/courses" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-purple-600 hover:underline">
                  {content.viewAllCoursesLabel} →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">{content.servicesSectionTitle}</h3>
            <ul className="flex flex-col gap-2">
              {content.serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 transition hover:text-purple-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">{content.locationsSectionTitle}</h3>
            <div className="flex flex-col gap-5">
              {content.branches.map((branch) => (
                <div key={branch.city}>
                  <p className="mb-1 text-sm font-semibold text-gray-700">{branch.city}</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500">
                    <MapPin size={13} className="mt-0.5 shrink-0 text-purple-400" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <Phone size={13} className="shrink-0 text-purple-400" />
                    <a href={`tel:${branch.phone}`} className="hover:text-purple-700">{branch.phone}</a>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <Mail size={13} className="shrink-0 text-purple-400" />
                    <a href={`mailto:${branch.email}`} className="hover:text-purple-700">{branch.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-4 py-4">
        <div className="page-container flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
          <span>{content.copyrightTemplate.replace("{year}", String(new Date().getFullYear()))}</span>
          <div className="flex gap-4">
            {content.bottomLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-purple-600">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}