"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown, ChevronRight,  Phone, Menu, X,
  BookOpen, Users,  Monitor, 
BookMarked, 
   Globe, Target, 
 Layers, 
} from "lucide-react";
import Image from "next/image";

// ─── NAV DATA ────────────────────────────────────────────────────────────────
const NAV = [
  {
    id: "what-we-do",
    label: "What We Do",
    type: "mega-columns",
    width: "w-[820px]",
    columns: [
      {
        heading: "By Need",
        headingIcon: Target,
        items: [
          { label: "Enterprise-Wide Training",    href: "/business/what-we-do/on-demand-learning" },
          { label: "Team-Wide Training",          href: "/business/what-we-do/cohort-learning" },
          { label: "Tech Team Training",          href: "/business/how-we-do-it/platform" },
          { label: "Leadership Development",      href: "/business/what-we-do/professional-services" },
          { label: "Customer Success Team",       href: "/business/how-we-do-it/customer-success" },
          { label: "Remote & Hybrid Training",    href: "/business/what-we-do/cohort-learning" },
          { label: "Certification Prep & Badges", href: "/business/what-we-do/certification-prep" },
          { label: "AI Upskilling",               href: "/business/ai-transformation" },
          { label: "Compliance Training",         href: "/business/what-we-do/on-demand-learning", badge: "NEW" },
        ],
      },
      {
        heading: "By Team",
        headingIcon: Users,
        items: [
          { label: "Leaders & Executives",  href: "/business/what-we-do/professional-services" },
          { label: "Learning & Development",href: "/business/what-we-do/on-demand-learning" },
          { label: "Human Resources",       href: "/business/how-we-do-it/customer-success" },
          { label: "Engineering",           href: "/business/how-we-do-it/platform" },
          { label: "IT Operations",         href: "/business/how-we-do-it/integrations" },
          { label: "Data Science",          href: "/business/how-we-do-it/analytics" },
        ],
      },
      {
        heading: "By Industry",
        headingIcon: Globe,
        items: [
          { label: "Technology",             href: "/business/what-we-do/on-demand-learning" },
          { label: "Professional Services",  href: "/business/what-we-do/professional-services" },
          { label: "Financial Services",     href: "/business/what-we-do/on-demand-learning" },
          { label: "Manufacturing",          href: "/business/what-we-do/on-demand-learning" },
          { label: "Government",             href: "/business/what-we-do/on-demand-learning" },
          { label: "Higher Education",       href: "/business/what-we-do/certification-prep" },
        ],
      },
    ],
  },
  {
    id: "how-we-do-it",
    label: "How We Do It",
    type: "mega-sections",
    width: "w-[680px]",
    defaultSubMenu: "on-demand",
    groups: [
      {
        id: "learning-ecosystem",
        heading: "Learning Ecosystem",
        subMenus: [
          {
            id: "on-demand",
            label: "On-Demand Learning",
            icon: BookOpen,
            items: [
              { label: "On-Demand Learning for Everyone", href: "/business/what-we-do/on-demand-learning" },
              { label: "AI Starter Paths",                href: "/business/ai-transformation",              badge: "NEW" },
              { label: "Real-World Instructors",          href: "/business/how-we-do-it/platform" },
              { label: "Multi-Language Collection",       href: "/business/how-we-do-it/platform" },
              { label: "Analytics & Insights",            href: "/business/how-we-do-it/analytics" },
              { label: "Flexible User Management",        href: "/business/how-we-do-it/platform" },
            ],
          },
          {
            id: "courses",
            label: "Courses",
            icon: BookMarked,
            items: [
              { label: "Clinical Documentation",     href: "/business/what-we-do/certification-prep" },
              { label: "Medical Coding & Billing",   href: "/business/what-we-do/certification-prep" },
              { label: "Leadership & Management",    href: "/business/what-we-do/professional-services" },
              { label: "Compliance & Regulations",   href: "/business/what-we-do/on-demand-learning" },
              { label: "View Full Course Collection", href: "/courses", highlight: true },
            ],
          },
        ],
      },
      {
        id: "immersive",
        heading: "Immersive Learning",
        subMenus: [
          {
            id: "cohort",
            label: "Cohort Learning",
            icon: Users,
            items: [
              { label: "MedTech Leadership Academy",    href: "/business/what-we-do/cohort-learning" },
              { label: "Leading GenAI in Healthcare",   href: "/business/ai-transformation" },
              { label: "Invested Leader Programme",     href: "/business/what-we-do/professional-services" },
              { label: "AI Opportunities with AWS",     href: "/business/ai-transformation" },
              { label: "About Cohort Learning",         href: "/business/what-we-do/cohort-learning" },
              { label: "Cohort AI & Analytics",         href: "/business/how-we-do-it/analytics" },
            ],
          },
        ],
      },
      {
        id: "direct",
        heading: null,
        directLinks: [
          { label: "Professional Services",      href: "/business/what-we-do/professional-services" },
          { label: "AI-Enabled Learning",   href: "/business/ai-transformation" },
          { label: "Case Studies",          href: "/business/resources/case-studies" },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    type: "mega-sections",
    width: "w-[680px]",
    defaultSubMenu: "our-product",
    topLink: { label: "All Resources", href: "/business/resources/guides" },
    groups: [
      {
        id: "browse",
        heading: "Browse",
        subMenus: [
          {
            id: "our-product",
            label: "Our Product",
            icon: Monitor,
            items: [
              { label: "Interactive Product Tour",      href: "/business/how-we-do-it/platform",          badge: "NEW" },
              { label: "GenAI Features Overview",       href: "/business/ai-transformation",              badge: "NEW" },
              { label: "On-Demand Course Collection",   href: "/business/what-we-do/on-demand-learning" },
              { label: "Leadership Academy Collection", href: "/business/what-we-do/cohort-learning" },
            ],
          },
          {
            id: "by-topic",
            label: "Resources by Topic",
            icon: Layers,
            items: [
              { label: "AI Transformation",    href: "/business/ai-transformation" },
              { label: "Cohort Learning",      href: "/business/what-we-do/cohort-learning" },
              { label: "Immersive Learning",   href: "/business/how-we-do-it/platform" },
              { label: "Integrated Learning",  href: "/business/how-we-do-it/integrations" },
              { label: "L&D Best Practices",   href: "/business/resources/guides" },
              { label: "Leadership Dev.",      href: "/business/what-we-do/professional-services" },
              { label: "Learning Culture",     href: "/business/resources/guides" },
              { label: "Learning Insights",    href: "/business/how-we-do-it/analytics" },
              { label: "On-Demand Learning",   href: "/business/what-we-do/on-demand-learning" },
              { label: "Technical Upskilling", href: "/business/resources/guides" },
            ],
          },
        ],
      },
      {
        id: "other",
        heading: "Other",
        directLinks: [
          { label: "Podcast: MedTech Insights",  href: "/business/resources/guides" },
          { label: "Small Business Hub",         href: "/business/pricing" },
          { label: "Events",                     href: "/business/resources/events" },
          { label: "Partners & Integrations",    href: "/business/how-we-do-it/integrations" },
          { label: "Partner with Us",            href: "/business/contact" },
          { label: "Blog",                       href: "/business/resources/guides" },
        ],
      },
    ],
  },
  {
    id: "plans",
    label: "Plans",
    type: "dropdown",
    width: "w-72",
    align: "right",
    items: [
      { label: "Compare Plans",          href: "/business/pricing",           desc: "Side-by-side plan comparison" },
      { label: "Team (2–50 learners)",   href: "/business/pricing#team",      desc: "Perfect for growing teams" },
      { label: "Enterprise (21+)",       href: "/business/pricing#enterprise", desc: "Full-scale deployment & support" },
      { label: "AI Upskilling",          href: "/business/ai-transformation", desc: "AI-focused training packages", badge: "NEW" },
    ],
  },
  {
    id: "ai-transformation",
    label: "AI Transformation",
    type: "dropdown",
    width: "w-72",
    align: "right",
    badge: "New",
    items: [
      { label: "AI Upskilling",          href: "/business/ai-transformation", desc: "Hands-on AI skill-building" },
      { label: "AI Starter Paths",       href: "/business/ai-transformation", desc: "Guided pathways for all levels", badge: "NEW" },
      { label: "AI-Enabled Learning",    href: "/business/ai-transformation", desc: "Intelligent personalised learning" },
      { label: "AI for Business Leaders",href: "/business/ai-transformation", desc: "Strategic AI decision-making" },
      { label: "AI Resources",           href: "/business/resources/guides",  desc: "Guides, reports & case studies" },
    ],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function Badge({ label }) {
  return (
    <span className="ml-1.5 rounded-full bg-purple-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-purple-800">
      {label}
    </span>
  );
}

// Mega-columns panel (What We Do)
function MegaColumnsPanel({ nav, onClose }) {
  return (
    <div
      className={`animate-nav-menu absolute left-0 top-full mt-2 ${nav.width} rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl`}
    >
      <div className="grid grid-cols-3 gap-x-6">
        {nav.columns.map((col) => {
          const HeadIcon = col.headingIcon;
          return (
            <div key={col.heading}>
              <div className="mb-3 flex items-center gap-2 border-b border-gray-100 pb-2">
                <HeadIcon size={13} className="text-purple-700" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-purple-700">
                  {col.heading}
                </span>
              </div>
              <ul className="flex flex-col gap-0.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-1 rounded-md px-2 py-1.5 text-sm text-gray-600 transition-colors hover:bg-purple-50 hover:text-purple-800"
                    >
                      {item.label}
                      {item.badge && <Badge label={item.badge} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Mega-sections panel (How We Do It / Resources) — left nav + right sub-panel
function MegaSectionsPanel({ nav, activeSubMenu, setActiveSubMenu, onClose }) {
  // flatten all subMenus from all groups
  const allSubMenus = nav.groups.flatMap((g) => g.subMenus ?? []);
  const activeSub = allSubMenus.find((s) => s.id === activeSubMenu);

  return (
    <div
      className={`animate-nav-menu absolute left-0 top-full mt-2 ${nav.width} overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl`}
    >
      {nav.topLink && (
        <div className="border-b border-gray-100 px-4 py-2.5">
          <Link
            href={nav.topLink.href}
            onClick={onClose}
            className="text-xs font-semibold text-purple-700 hover:text-purple-900 hover:underline"
          >
            {nav.topLink.label}
          </Link>
        </div>
      )}
      <div className="flex min-h-65">
        {/* Left nav panel */}
        <div className="w-52 shrink-0 border-r border-gray-100 bg-gray-50/60 p-3">
          {nav.groups.map((group) => (
            <div key={group.id} className="mb-3">
              {group.heading && (
                <p className="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-widest text-purple-700">
                  {group.heading}
                </p>
              )}
              {/* Sub-menu triggers */}
              {group.subMenus?.map((sub) => {
                const Icon = sub.icon;
                const isActive = activeSubMenu === sub.id;
                return (
                  <button
                    key={sub.id}
                    onMouseEnter={() => setActiveSubMenu(sub.id)}
                    onClick={() => setActiveSubMenu(isActive ? null : sub.id)}
                    aria-expanded={isActive}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-purple-50 text-purple-800"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-800"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={13} />
                      {sub.label}
                    </span>
                    <ChevronRight size={11} className={`text-gray-400 transition-transform ${isActive ? "translate-x-0.5 text-purple-600" : ""}`} />
                  </button>
                );
              })}
              {/* Direct links */}
              {group.directLinks?.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-purple-50 hover:text-purple-800"
                  >
                    {Icon && <Icon size={13} />}
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Right content panel */}
        <div className="flex-1 p-4">
          {activeSub ? (
            <div key={activeSub.id} className="animate-nav-submenu">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-purple-700">
                {activeSub.label}
              </p>
              <ul className="flex flex-col gap-0.5">
                {activeSub.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-1 rounded-md px-2.5 py-2 text-sm transition-colors ${
                        item.highlight
                          ? "font-semibold text-purple-700 hover:text-purple-900"
                          : "text-gray-600 hover:bg-purple-50 hover:text-purple-800"
                      }`}
                    >
                      {item.label}
                      {item.badge && <Badge label={item.badge} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-gray-400">Hover an item to explore</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Simple dropdown panel (Plans / AI Transformation)
function DropdownPanel({ nav, onClose }) {
  return (
    <div
      className={`animate-nav-menu absolute top-full mt-2 ${nav.width} rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl ${
        nav.align === "right" ? "right-0" : "left-0"
      }`}
    >
      {nav.items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-purple-50"
          >
            {Icon && (
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-800">
                <Icon size={14} />
              </span>
            )}
            <span>
              <span className="flex items-center gap-1 text-sm font-semibold text-gray-800">
                {item.label}
                {item.badge && <Badge label={item.badge} />}
              </span>
              <span className="text-xs text-gray-500">{item.desc}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function BusinessNavbar() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeNav, setActiveNav]           = useState(null);
  const [activeSubMenu, setActiveSubMenu]   = useState(null);
  const [mobileL1, setMobileL1]             = useState(null); // level-1 expand
  const [mobileL2, setMobileL2]             = useState(null); // level-2 expand
  const [scrolled, setScrolled]             = useState(false);
  const hoverTimeout                        = useRef(null);
  const triggerRefs                         = useRef({});

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-select default sub-menu when nav opens
  useEffect(() => {
    const found = NAV.find((n) => n.id === activeNav);
    if (found?.defaultSubMenu) {
      setActiveSubMenu(found.defaultSubMenu);
    } else {
      setActiveSubMenu(null);
    }
  }, [activeNav]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setActiveNav(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openNav = (id) => {
    clearTimeout(hoverTimeout.current);
    setActiveNav(id);
  };
  const closeNav = () => {
    hoverTimeout.current = setTimeout(() => setActiveNav(null), 130);
  };
  const closeAll = () => {
    setActiveNav(null);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
      role="banner"
    >
      <div className="page-container flex items-center justify-between py-0">
        {/* ── Logo ── */}
        <Link href="/business" className="flex shrink-0 items-center gap-2.5 py-3">
            <Image
                      src="/bnusiness logo.png"
                      alt="Medtech Career"
                      width={180}
                      height={62}
                      className="h-16 w-auto object-contain"
                      priority
                    />
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav
          className="hidden items-center gap-0.5 lg:flex"
          role="menubar"
          aria-label="Main navigation"
        >
          {NAV.map((nav) => {
            const isOpen = activeNav === nav.id;
            return (
              <div
                key={nav.id}
                className="relative"
                onMouseEnter={() => openNav(nav.id)}
                onMouseLeave={closeNav}
              >
                <button
                  ref={(el) => { triggerRefs.current[nav.id] = el; }}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  aria-controls={`nav-panel-${nav.id}`}
                  onClick={() => setActiveNav(isOpen ? null : nav.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveNav(isOpen ? null : nav.id);
                    }
                  }}
                  className={`flex items-center gap-1 rounded-lg px-3 py-4 text-sm font-medium transition-colors ${
                    isOpen
                      ? "text-purple-800"
                      : "text-gray-600 hover:text-purple-800"
                  }`}
                >
                  {nav.label}
                  {nav.badge && <Badge label={nav.badge} />}
                  <ChevronDown
                    size={13}
                    className={`mt-px text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-purple-600" : ""
                    }`}
                  />
                </button>
                {/* Panel — rendered when open */}
                {isOpen && (
                  <div
                    id={`nav-panel-${nav.id}`}
                    role="menu"
                    onMouseEnter={() => openNav(nav.id)}
                    onMouseLeave={closeNav}
                  >
                    {nav.type === "mega-columns" && (
                      <MegaColumnsPanel nav={nav} onClose={closeAll} />
                    )}
                    {nav.type === "mega-sections" && (
                      <MegaSectionsPanel
                        nav={nav}
                        activeSubMenu={activeSubMenu}
                        setActiveSubMenu={setActiveSubMenu}
                        onClose={closeAll}
                      />
                    )}
                    {nav.type === "dropdown" && (
                      <DropdownPanel nav={nav} onClose={closeAll} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ── Desktop CTAs ── */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-purple-800"
          >
            <Phone size={14} />
            <span className="hidden xl:inline">+91 98765 43210</span>
          </a>
          <Link
            href="/business/contact"
            className="rounded-lg bg-purple-700 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-purple-200 transition-colors hover:bg-purple-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
          >
            Get a Demo
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-purple-50 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="animate-mobile-menu border-t border-gray-100 bg-white lg:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="max-h-[80vh] overflow-y-auto px-4 pb-6 pt-3">
            <nav className="flex flex-col gap-0.5">
              {NAV.map((nav) => {
                const isL1Open = mobileL1 === nav.id;

                // Flatten all sub-menus for l2 mobile use
                const allSubMenus =
                  nav.type === "mega-sections"
                    ? nav.groups.flatMap((g) => g.subMenus ?? [])
                    : [];
                const allDirectLinks =
                  nav.type === "mega-sections"
                    ? nav.groups.flatMap((g) => g.directLinks ?? [])
                    : [];

                return (
                  <div key={nav.id}>
                    {/* Level 1 trigger */}
                    <button
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                        isL1Open
                          ? "bg-purple-50 text-purple-800"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                      onClick={() => {
                        setMobileL1(isL1Open ? null : nav.id);
                        setMobileL2(null);
                      }}
                      aria-expanded={isL1Open}
                    >
                      <span className="flex items-center gap-2">
                        {nav.label}
                        {nav.badge && <Badge label={nav.badge} />}
                      </span>
                      <ChevronDown
                        size={15}
                        className={`text-gray-400 transition-transform duration-200 ${
                          isL1Open ? "rotate-180 text-purple-600" : ""
                        }`}
                      />
                    </button>

                    {/* Level 1 content */}
                    {isL1Open && (
                      <div className="ml-3 mt-1 border-l-2 border-purple-100 pl-3 pb-1">
                        {/* mega-columns: show all columns inline */}
                        {nav.type === "mega-columns" &&
                          nav.columns.map((col) => (
                            <div key={col.heading} className="mb-3">
                              <p className="mb-1 px-1 text-[10px] font-bold uppercase tracking-widest text-purple-600">
                                {col.heading}
                              </p>
                              {col.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={closeAll}
                                  className="flex items-center gap-1 rounded-lg px-2 py-2 text-sm text-gray-600 hover:text-purple-800"
                                >
                                  {item.label}
                                  {item.badge && <Badge label={item.badge} />}
                                </Link>
                              ))}
                            </div>
                          ))}

                        {/* mega-sections: show sub-menus as accordions */}
                        {nav.type === "mega-sections" && (
                          <>
                            {nav.topLink && (
                              <Link
                                href={nav.topLink.href}
                                onClick={closeAll}
                                className="mb-1 block rounded-lg px-2 py-2 text-sm font-semibold text-purple-700 hover:text-purple-900"
                              >
                                {nav.topLink.label}
                              </Link>
                            )}
                            {nav.groups.map((group) => (
                              <div key={group.id} className="mb-2">
                                {group.heading && (
                                  <p className="mb-1 px-1 text-[10px] font-bold uppercase tracking-widest text-purple-600">
                                    {group.heading}
                                  </p>
                                )}
                                {/* Level 2: sub-menu triggers */}
                                {group.subMenus?.map((sub) => {
                                  const SubIcon = sub.icon;
                                  const isL2Open = mobileL2 === sub.id;
                                  return (
                                    <div key={sub.id}>
                                      <button
                                        className={`flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                                          isL2Open
                                            ? "text-purple-800"
                                            : "text-gray-700 hover:text-purple-800"
                                        }`}
                                        onClick={() =>
                                          setMobileL2(isL2Open ? null : sub.id)
                                        }
                                        aria-expanded={isL2Open}
                                      >
                                        <span className="flex items-center gap-2">
                                          <SubIcon size={13} />
                                          {sub.label}
                                        </span>
                                        <ChevronDown
                                          size={12}
                                          className={`text-gray-400 transition-transform ${
                                            isL2Open ? "rotate-180 text-purple-600" : ""
                                          }`}
                                        />
                                      </button>
                                      {/* Level 3: sub-menu items */}
                                      {isL2Open && (
                                        <div className="ml-5 mt-0.5 border-l border-purple-100 pl-3">
                                          {sub.items.map((item) => (
                                            <Link
                                              key={item.label}
                                              href={item.href}
                                              onClick={closeAll}
                                              className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-sm transition-colors ${
                                                item.highlight
                                                  ? "font-semibold text-purple-700"
                                                  : "text-gray-600 hover:text-purple-800"
                                              }`}
                                            >
                                              {item.label}
                                              {item.badge && (
                                                <Badge label={item.badge} />
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                                {/* Direct links */}
                                {group.directLinks?.map((link) => {
                                  const Icon = link.icon;
                                  return (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      onClick={closeAll}
                                      className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-600 hover:text-purple-800"
                                    >
                                      {Icon && <Icon size={13} />}
                                      {link.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            ))}
                          </>
                        )}

                        {/* dropdown type */}
                        {nav.type === "dropdown" &&
                          nav.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={closeAll}
                                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-600 hover:text-purple-800"
                              >
                                {Icon && <Icon size={13} className="text-purple-600" />}
                                {item.label}
                                {item.badge && <Badge label={item.badge} />}
                              </Link>
                            );
                          })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 rounded-xl border border-purple-200 bg-purple-50 py-2.5 text-sm font-medium text-purple-800"
              >
                <Phone size={15} />
                +91 98765 43210
              </a>
              <Link
                href="/business/contact"
                onClick={closeAll}
                className="rounded-xl bg-purple-700 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-purple-200 transition-colors hover:bg-purple-800"
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
