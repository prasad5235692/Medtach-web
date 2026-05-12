"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown, ChevronRight,  Phone, Menu, X,
  Users, Monitor,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getBusinessNavbarContent } from "@/components/data/businessNavbarContent";
import { isAnyRouteActive, isRouteActive } from "@/lib/navActive";

const navIconMap = {
  monitor: Monitor,
  users: Users,
};

function getNavItemHrefs(nav) {
  if (nav.type === "dropdown") {
    return nav.items.map((item) => item.href);
  }

  if (nav.type === "mega-columns") {
    return nav.columns.flatMap((column) => column.items.map((item) => item.href));
  }

  if (nav.type === "mega-sections") {
    return [
      ...(nav.topLink ? [nav.topLink.href] : []),
      ...nav.groups.flatMap((group) => group.subMenus?.flatMap((subMenu) => subMenu.items.map((item) => item.href)) ?? []),
      ...nav.groups.flatMap((group) => group.directLinks?.map((link) => link.href) ?? []),
    ];
  }

  return [];
}

function getMatchingSubMenuId(nav, pathname) {
  if (nav.type !== "mega-sections") {
    return null;
  }

  for (const group of nav.groups) {
    for (const subMenu of group.subMenus ?? []) {
      if (isAnyRouteActive(pathname, subMenu.items.map((item) => item.href))) {
        return subMenu.id;
      }
    }
  }

  return null;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function Badge({ label }) {
  return (
    <span className="ml-1.5 rounded-full bg-purple-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-purple-800">
      {label}
    </span>
  );
}

// Mega-columns panel (What We Do)
function MegaColumnsPanel({ nav, onClose, pathname }) {
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
                {col.items.map((item) => {
                  const isCurrent = isRouteActive(pathname, item.href);

                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-sm transition-colors ${
                          isCurrent
                            ? "bg-purple-50 font-semibold text-purple-800"
                            : "text-gray-600 hover:bg-purple-50 hover:text-purple-800"
                        }`}
                      >
                        {item.label}
                        {item.badge && <Badge label={item.badge} />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Mega-sections panel (How We Do It / Resources) — left nav + right sub-panel
function MegaSectionsPanel({ nav, activeSubMenu, setActiveSubMenu, onClose, emptyStateLabel, pathname }) {
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
            aria-current={isRouteActive(pathname, nav.topLink.href) ? "page" : undefined}
            className={`text-xs font-semibold transition-colors hover:text-purple-900 hover:underline ${
              isRouteActive(pathname, nav.topLink.href) ? "text-purple-900" : "text-purple-700"
            }`}
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
                const Icon = navIconMap[sub.icon] ?? Users;
                const isActive = activeSubMenu === sub.id;
                const isCurrent = isAnyRouteActive(pathname, sub.items.map((item) => item.href));
                return (
                  <button
                    key={sub.id}
                    onMouseEnter={() => setActiveSubMenu(sub.id)}
                    onClick={() => setActiveSubMenu(isActive ? null : sub.id)}
                    aria-expanded={isActive}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-purple-50 text-purple-800"
                        : isCurrent
                          ? "bg-purple-50/70 text-purple-800"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-800"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={13} />
                      {sub.label}
                    </span>
                    <ChevronRight size={11} className={`transition-transform ${isActive ? "translate-x-0.5 text-purple-600" : isCurrent ? "text-purple-600" : "text-gray-400"}`} />
                  </button>
                );
              })}
              {/* Direct links */}
              {group.directLinks?.map((link) => {
                const Icon = link.icon;
                const isCurrent = isRouteActive(pathname, link.href);
                return (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    onClick={onClose}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                      isCurrent
                        ? "bg-purple-50 text-purple-800"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-800"
                    }`}
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
                {activeSub.items.map((item) => {
                  const isCurrent = isRouteActive(pathname, item.href);

                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex items-center gap-1 rounded-md px-2.5 py-2 text-sm transition-colors ${
                          isCurrent
                            ? "bg-purple-50 font-semibold text-purple-800"
                            : item.highlight
                              ? "font-semibold text-purple-700 hover:text-purple-900"
                              : "text-gray-600 hover:bg-purple-50 hover:text-purple-800"
                        }`}
                      >
                        {item.label}
                        {item.badge && <Badge label={item.badge} />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm text-gray-400">{emptyStateLabel}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Simple dropdown panel (Plans / AI Transformation)
function DropdownPanel({ nav, onClose, pathname }) {
  return (
    <div
      className={`animate-nav-menu absolute top-full mt-2 ${nav.width} rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl ${
        nav.align === "right" ? "right-0" : "left-0"
      }`}
    >
      {nav.items.map((item) => {
        const Icon = item.icon;
        const isCurrent = isRouteActive(pathname, item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            aria-current={isCurrent ? "page" : undefined}
            className={`flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors ${
              isCurrent ? "bg-purple-50" : "hover:bg-purple-50"
            }`}
          >
            {Icon && (
              <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isCurrent ? "bg-purple-200 text-purple-900" : "bg-purple-100 text-purple-800"}`}>
                <Icon size={14} />
              </span>
            )}
            <span>
              <span className={`flex items-center gap-1 text-sm font-semibold ${isCurrent ? "text-purple-900" : "text-gray-800"}`}>
                {item.label}
                {item.badge && <Badge label={item.badge} />}
              </span>
              <span className={isCurrent ? "text-xs text-purple-700" : "text-xs text-gray-500"}>{item.desc}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function BusinessNavbar() {
  const { language } = useLanguage();
  const content = getBusinessNavbarContent(language);
  const navItems = content.navItems;
  const pathname = usePathname();
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
    const found = navItems.find((n) => n.id === activeNav);
    const matchedSubMenuId = found ? getMatchingSubMenuId(found, pathname) : null;

    if (matchedSubMenuId) {
      setActiveSubMenu(matchedSubMenuId);
    } else if (found?.defaultSubMenu) {
      setActiveSubMenu(found.defaultSubMenu);
    } else {
      setActiveSubMenu(null);
    }
  }, [activeNav, navItems, pathname]);

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
    setMobileL1(null);
    setMobileL2(null);
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
                alt={content.brandAlt}
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
          aria-label={content.accessibility.mainNavigationLabel}
        >
          {navItems.map((nav) => {
            const isOpen = activeNav === nav.id;
            const isCurrent = isAnyRouteActive(pathname, getNavItemHrefs(nav));
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
                      ? "bg-purple-50 text-purple-800"
                      : isCurrent
                        ? "bg-purple-50/80 text-purple-800"
                        : "text-gray-600 hover:text-purple-800"
                  }`}
                >
                  {nav.label}
                  {nav.badge && <Badge label={nav.badge} />}
                  <ChevronDown
                    size={13}
                    className={`mt-px transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-purple-600" : isCurrent ? "text-purple-600" : "text-gray-400"
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
                      <MegaColumnsPanel nav={nav} onClose={closeAll} pathname={pathname} />
                    )}
                    {nav.type === "mega-sections" && (
                      <MegaSectionsPanel
                        nav={nav}
                        activeSubMenu={activeSubMenu}
                        setActiveSubMenu={setActiveSubMenu}
                        onClose={closeAll}
                        emptyStateLabel={content.emptyStateLabel}
                        pathname={pathname}
                      />
                    )}
                    {nav.type === "dropdown" && (
                      <DropdownPanel nav={nav} onClose={closeAll} pathname={pathname} />
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
            <span className="hidden xl:inline">{content.ctas.phoneLabel}</span>
          </a>
          <Link
            href="/business/contact"
            aria-current={isRouteActive(pathname, "/business/contact") ? "page" : undefined}
            className={`rounded-lg px-5 py-2 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 ${
              isRouteActive(pathname, "/business/contact")
                ? "bg-purple-800 text-white shadow-purple-300"
                : "bg-purple-700 text-white shadow-purple-200 hover:bg-purple-800"
            }`}
          >
            {content.ctas.demoLabel}
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-purple-50 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? content.accessibility.closeMenuLabel : content.accessibility.openMenuLabel}
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
          aria-label={content.accessibility.mobileNavigationLabel}
        >
          <div className="max-h-[80vh] overflow-y-auto px-4 pb-6 pt-3">
            <nav className="flex flex-col gap-0.5">
              {navItems.map((nav) => {
                const isL1Open = mobileL1 === nav.id;
                const isCurrent = isAnyRouteActive(pathname, getNavItemHrefs(nav));

                return (
                  <div key={nav.id}>
                    {/* Level 1 trigger */}
                    <button
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                        isL1Open
                          ? "bg-purple-50 text-purple-800"
                          : isCurrent
                            ? "bg-purple-50/80 text-purple-800"
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
                        className={`transition-transform duration-200 ${
                          isL1Open ? "rotate-180 text-purple-600" : isCurrent ? "text-purple-600" : "text-gray-400"
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
                                  aria-current={isRouteActive(pathname, item.href) ? "page" : undefined}
                                  className={`flex items-center gap-1 rounded-lg px-2 py-2 text-sm ${
                                    isRouteActive(pathname, item.href)
                                      ? "bg-purple-50 font-semibold text-purple-800"
                                      : "text-gray-600 hover:text-purple-800"
                                  }`}
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
                                aria-current={isRouteActive(pathname, nav.topLink.href) ? "page" : undefined}
                                className={`mb-1 block rounded-lg px-2 py-2 text-sm font-semibold ${
                                  isRouteActive(pathname, nav.topLink.href)
                                    ? "bg-purple-50 text-purple-900"
                                    : "text-purple-700 hover:text-purple-900"
                                }`}
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
                                  const SubIcon = navIconMap[sub.icon] ?? Users;
                                  const isL2Open = mobileL2 === sub.id;
                                  const isCurrentSubMenu = isAnyRouteActive(pathname, sub.items.map((item) => item.href));
                                  return (
                                    <div key={sub.id}>
                                      <button
                                        className={`flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
                                          isL2Open
                                            ? "text-purple-800"
                                            : isCurrentSubMenu
                                              ? "bg-purple-50 text-purple-800"
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
                                          className={`transition-transform ${
                                            isL2Open ? "rotate-180 text-purple-600" : isCurrentSubMenu ? "text-purple-600" : "text-gray-400"
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
                                              aria-current={isRouteActive(pathname, item.href) ? "page" : undefined}
                                              className={`flex items-center gap-1 rounded-md px-2 py-1.5 text-sm transition-colors ${
                                                isRouteActive(pathname, item.href)
                                                  ? "bg-purple-50 font-semibold text-purple-800"
                                                  : item.highlight
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
                                      aria-current={isRouteActive(pathname, link.href) ? "page" : undefined}
                                      className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm ${
                                        isRouteActive(pathname, link.href)
                                          ? "bg-purple-50 font-semibold text-purple-800"
                                          : "text-gray-600 hover:text-purple-800"
                                      }`}
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
                                aria-current={isRouteActive(pathname, item.href) ? "page" : undefined}
                                className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm ${
                                  isRouteActive(pathname, item.href)
                                    ? "bg-purple-50 font-semibold text-purple-800"
                                    : "text-gray-600 hover:text-purple-800"
                                }`}
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
                {content.ctas.phoneLabel}
              </a>
              <Link
                href="/business/contact"
                onClick={closeAll}
                aria-current={isRouteActive(pathname, "/business/contact") ? "page" : undefined}
                className={`rounded-xl py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors ${
                  isRouteActive(pathname, "/business/contact")
                    ? "bg-purple-800 shadow-purple-300"
                    : "bg-purple-700 shadow-purple-200 hover:bg-purple-800"
                }`}
              >
                {content.ctas.demoLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
