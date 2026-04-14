"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const courseLinks = [
  { label: "Medical Coding",    href: "/courses/medical-coding" },
  { label: "Medical Billing",   href: "/courses/medical-billing" },
  { label: "CPC Certification", href: "/courses/cpc-certification" },
  { label: "BMCT",              href: "/courses/bmct" },
  { label: "AMCT",              href: "/courses/amct" },
  { label: "EMR / EHR",         href: "/courses/emr" },
];

const serviceLinks = [
  { label: "Online Training",       href: "/training" },
  { label: "Internship Program",    href: "/internship" },
  { label: "Placement Assistance",  href: "/placements" },
  { label: "Join as Teacher",       href: "/join-as-teacher" },
  { label: "Our Team",              href: "/our-team" },
  { label: "Blog",                  href: "/blog" },
];

const branches = [
  {
    city: "Bengaluru (HQ)",
    address: "MG Road, Bengaluru, Karnataka 560001",
    phone: "+91 80 1234 5678",
    email: "info@medtechcareer.in",
  },
  {
    city: "Mysuru Branch",
    address: "JLB Road, Mysuru, Karnataka 570001",
    phone: "+91 82 9876 5432",
    email: "mysuru@medtechcareer.in",
  },
];

export default function AuthFooter() {
  return (
    <footer className="border-t border-purple-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image src="/logo.png" alt="Medtech Career" width={150} height={52} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              India&apos;s trusted healthcare education platform. Empowering careers in Medical Coding, Billing, and allied health sciences.
            </p>
            <div className="flex gap-3 mt-1">
              {["facebook", "instagram", "linkedin", "youtube"].map((s) => (
                <a key={s} href="#" aria-label={s} className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition hover:border-purple-400 hover:text-purple-600">
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Courses column ── */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">Our Courses</h3>
            <ul className="flex flex-col gap-2">
              {courseLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-500 transition hover:text-purple-700">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/courses" className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-purple-600 hover:underline">
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Services column ── */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-500 transition hover:text-purple-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Location column ── */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-800">Locations</h3>
            <div className="flex flex-col gap-5">
              {branches.map((b) => (
                <div key={b.city}>
                  <p className="mb-1 text-sm font-semibold text-gray-700">{b.city}</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500">
                    <MapPin size={13} className="mt-0.5 shrink-0 text-purple-400" />
                    <span>{b.address}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <Phone size={13} className="shrink-0 text-purple-400" />
                    <a href={`tel:${b.phone}`} className="hover:text-purple-700">{b.phone}</a>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <Mail size={13} className="shrink-0 text-purple-400" />
                    <a href={`mailto:${b.email}`} className="hover:text-purple-700">{b.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 bg-gray-50 px-4 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Medtech Career. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-purple-600">Privacy Policy</Link>
            <Link href="/" className="hover:text-purple-600">Terms of Service</Link>
            <Link href="/contact" className="hover:text-purple-600">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
