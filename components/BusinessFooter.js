import Link from "next/link";
import { Building2, Phone, Mail, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "Team Training",      href: "/business/solutions" },
    { label: "Corporate Courses",  href: "/business/solutions" },
    { label: "Skill Assessment",   href: "/business/solutions" },
    { label: "Certification Prep", href: "/business/solutions" },
  ],
  Company: [
    { label: "About",    href: "/business/about" },
    { label: "Pricing",  href: "/business/pricing" },
    { label: "Contact",  href: "/business/contact" },
  ],
  "Main Site": [
    { label: "Medtech Career",  href: "/" },
    { label: "All Courses",     href: "/courses" },
    { label: "Blog",            href: "/blog" },
    { label: "Join as Teacher", href: "/join-as-teacher" },
  ],
};

const socials = [
  { label: "LinkedIn",  href: "#", Icon: Linkedin },
  { label: "Twitter",   href: "#", Icon: Twitter },
  { label: "YouTube",   href: "#", Icon: Youtube },
  { label: "Instagram", href: "#", Icon: Instagram },
];

export default function BusinessFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#042a2b] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-teal-800/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/business" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600">
                <Building2 size={18} className="text-white" />
              </span>
              <div className="leading-tight">
                <span className="block text-sm font-bold text-white">MedTech</span>
                <span className="block text-xs font-semibold tracking-widest text-teal-400 uppercase">
                  Business
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Empowering healthcare organizations with targeted upskilling
              solutions for medical coding, billing, and compliance teams.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-teal-300"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Phone size={14} />
                </span>
                +91 98765 43210
              </a>
              <a
                href="mailto:business@medtechcareer.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-teal-300"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Mail size={14} />
                </span>
                business@medtechcareer.com
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-teal-300/60">
                {section}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-400 transition hover:text-teal-300"
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-teal-900/50 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Medtech Career Business. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Enterprise Agreement"].map((t) => (
              <a key={t} href="#" className="text-xs text-gray-500 transition hover:text-teal-300">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
