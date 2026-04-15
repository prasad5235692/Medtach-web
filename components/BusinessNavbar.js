"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Building2, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "/business" },
  { label: "Solutions",  href: "/business/solutions" },
  { label: "Pricing",    href: "/business/pricing" },
  { label: "About",      href: "/business/about" },
  { label: "Contact",    href: "/business/contact" },
];

export default function BusinessNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-teal-100/60 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link href="/business" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600">
            <Building2 size={18} className="text-white" />
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-bold text-gray-900">MedTech</span>
            <span className="block text-xs font-semibold tracking-widest text-teal-600 uppercase">
              Business
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 transition hover:text-teal-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 transition hover:text-teal-700"
          >
            <Phone size={14} />
            +91 98765 43210
          </a>
          <Link
            href="/business/contact"
            className="rounded-lg bg-teal-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-teal-200 transition hover:bg-teal-700"
          >
            Get a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-lg p-1.5 text-gray-600 transition hover:bg-teal-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-teal-100/60 bg-white px-6 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 transition hover:text-teal-700"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/business/contact"
              className="mt-2 rounded-lg bg-teal-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
