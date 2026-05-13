"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, LogOut, User } from "lucide-react";
import { getClientPageContent } from "@/data/clientPageContent";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { isAnyRouteActive, isRouteActive } from "@/lib/navActive";

function isDirectImageSource(value) {
  return /^(blob:|data:)/i.test(String(value || ""));
}

function getCourseRouteAliases(href) {
  const normalizedHref = String(href || "");

  if (normalizedHref.startsWith("/course/")) {
    return [normalizedHref, normalizedHref.replace("/course/", "/courses/")];
  }

  if (normalizedHref.startsWith("/courses/")) {
    return [normalizedHref, normalizedHref.replace("/courses/", "/course/")];
  }

  return [normalizedHref];
}

function isExploreLinkActive(pathname, href) {
  return isAnyRouteActive(pathname, getCourseRouteAliases(href));
}

export default function Navbar() {
  const { session, logout } = useAuth();
  const { language } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const content = getClientPageContent("siteNavbar", language);
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL?.trim();

  const primaryLinks = content.primaryLinks;
  const exploreLinks = content.exploreLinks;
  const moreLinks = content.moreLinks;
  const exploreIsCurrent = isAnyRouteActive(pathname, ["/courses", "/course", ...exploreLinks.map((link) => link.href)]);
  const moreIsCurrent = isAnyRouteActive(pathname, ["/about", ...moreLinks.map((link) => link.href)]);
  const businessIsCurrent = isRouteActive(pathname, "/business");
  const contactIsCurrent = isRouteActive(pathname, "/contact");
  const profilePhoto = session?.photo || "";
  const shouldBypassImageOptimization = isDirectImageSource(profilePhoto);

  const handleLogout = async () => {
    await logout();
    setUserMenuOpen(false);
    setOpen(false);
    window.location.replace("/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-purple-100/60 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="page-container flex flex-nowrap items-center justify-between py-2 lg:py-2.5 xl:py-3">
        <Link href="/" className="flex shrink-0 items-center">
          <Image src="/logo.png" alt={content.logoAlt} width={180} height={62} className="h-10 w-auto object-contain lg:h-11 xl:h-13 2xl:h-16" priority />
        </Link>

        <nav className="hidden flex-nowrap items-center gap-0.5 lg:flex lg:gap-1 xl:gap-2.5 2xl:gap-4">
          {primaryLinks.map((link) => {
            const isCurrent = isRouteActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`whitespace-nowrap rounded-lg px-1.5 py-1.5 text-xs font-medium transition xl:px-2.5 xl:py-2 xl:text-sm 2xl:px-3 ${
                  isCurrent
                    ? "bg-purple-50 text-purple-800"
                    : "text-gray-600 hover:text-purple-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative" onMouseLeave={() => setCoursesOpen(false)}>
            <button
              className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-1.5 py-1.5 text-xs font-medium transition xl:px-2.5 xl:py-2 xl:text-sm 2xl:px-3 ${
                coursesOpen
                  ? "bg-purple-50 text-purple-800"
                  : exploreIsCurrent
                    ? "bg-purple-50/80 text-purple-800"
                    : "text-gray-600 hover:text-purple-700"
              }`}
              onMouseEnter={() => setCoursesOpen(true)}
              onClick={() => setCoursesOpen(!coursesOpen)}
            >
              {content.exploreLabel} <ChevronDown size={14} className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesOpen && (
              <div className="absolute left-0 top-full w-80 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <Link
                  href="/courses"
                  aria-current={isRouteActive(pathname, "/courses") ? "page" : undefined}
                  className={`block border-b border-purple-50 px-4 py-3 text-sm font-semibold transition ${
                    isRouteActive(pathname, "/courses")
                      ? "bg-purple-100 text-purple-800"
                      : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                  }`}
                  onClick={() => setCoursesOpen(false)}
                >
                  {content.viewAllCoursesLabel} →
                </Link>
                <div className="py-1">
                  {exploreLinks.map((link) => {
                    const isCurrent = isExploreLinkActive(pathname, link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex items-center gap-3 px-4 py-2.5 text-sm transition ${
                          isCurrent
                            ? "bg-purple-50 font-semibold text-purple-800"
                            : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                        }`}
                        onClick={() => setCoursesOpen(false)}
                      >
                        <span className="leading-tight">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseLeave={() => setMoreOpen(false)}>
            <button
              className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-1.5 py-1.5 text-xs font-medium transition xl:px-2.5 xl:py-2 xl:text-sm 2xl:px-3 ${
                moreOpen
                  ? "bg-purple-50 text-purple-800"
                  : moreIsCurrent
                    ? "bg-purple-50/80 text-purple-800"
                    : "text-gray-600 hover:text-purple-700"
              }`}
              onMouseEnter={() => setMoreOpen(true)}
              onClick={() => setMoreOpen(!moreOpen)}
            >
              {content.moreLabel} <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute left-0 top-full w-48 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                {moreLinks.map((link) => {
                  const isCurrent = isRouteActive(pathname, link.href);

                  return link.href === "/join-as-teacher" ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`flex items-center gap-2 border-t border-purple-50 px-4 py-2.5 text-sm font-semibold transition ${
                        isCurrent
                          ? "bg-purple-100 text-purple-800"
                          : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                      }`}
                      onClick={() => setMoreOpen(false)}
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-700 text-[9px] text-white">✦</span>
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`block px-4 py-2.5 text-sm transition ${
                        isCurrent
                          ? "bg-purple-50 font-semibold text-purple-800"
                          : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                      }`}
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden flex-nowrap items-center gap-1 lg:flex xl:gap-2 2xl:gap-3">
          <div className="relative" onMouseEnter={() => setBusinessOpen(true)} onMouseLeave={() => setBusinessOpen(false)}>
            <Link
              href="/business"
              aria-current={businessIsCurrent ? "page" : undefined}
              className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-1.5 py-1.5 text-xs font-medium transition xl:px-2.5 xl:py-2 xl:text-sm 2xl:px-3 ${
                businessOpen
                  ? "bg-purple-50 text-purple-800"
                  : businessIsCurrent
                    ? "bg-purple-50/80 text-purple-800"
                    : "text-gray-600 hover:text-purple-700"
              }`}
            >
              {content.business.label}
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${businessOpen ? "rotate-180 text-purple-600" : businessIsCurrent ? "text-purple-600" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setBusinessOpen((value) => !value);
                }}
              />
            </Link>

            {businessOpen && (
              <div className="absolute right-0 top-full mt-0 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">
                <Link
                  href="/business/pricing"
                  aria-current={isRouteActive(pathname, "/business/pricing") ? "page" : undefined}
                  className={`flex items-center gap-2 px-4 py-3 text-sm transition ${
                    isRouteActive(pathname, "/business/pricing")
                      ? "bg-purple-50 font-semibold text-purple-800"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                  onClick={() => setBusinessOpen(false)}
                >
                  {content.business.comparePlansLabel}
                </Link>

                <Link
                  href="/business/request-demo"
                  aria-current={isRouteActive(pathname, "/business/request-demo") ? "page" : undefined}
                  className={`flex items-center gap-2 border-t border-gray-50 px-4 py-3 text-sm font-semibold transition ${
                    isRouteActive(pathname, "/business/request-demo")
                      ? "bg-purple-100 text-purple-800"
                      : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                  }`}
                  onClick={() => setBusinessOpen(false)}
                >
                  {content.business.tryLabel}
                </Link>
              </div>
            )}
          </div>
          {session ? (
            <div className="relative" onMouseLeave={() => setUserMenuOpen(false)}>
              <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-purple-200 py-1 pl-1 pr-2.5 text-xs font-medium text-purple-700 transition hover:bg-purple-50 xl:pr-3 xl:text-sm" onMouseEnter={() => setUserMenuOpen(true)} onClick={() => setUserMenuOpen((value) => !value)}>
                {session.photo ? (
                  <span className="relative block h-7 w-7 overflow-hidden rounded-full">
                    <Image src={profilePhoto} alt={session.name} fill sizes="28px" unoptimized={shouldBypassImageOptimization} className="object-cover" />
                  </span>
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <User size={14} />
                  </span>
                )}
                <span className="max-w-25 truncate">{session.name || content.accountFallback}</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                  <div className="border-b border-gray-100 px-4 py-3">
                    <p className="truncate text-xs font-semibold text-gray-800">{session.name}</p>
                    <p className="truncate text-xs text-gray-400">{session.phone}</p>
                  </div>
                  <button className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-500 transition hover:bg-red-50" onClick={handleLogout}>
                    <LogOut size={14} /> {content.logoutLabel}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login" className={`whitespace-nowrap rounded-lg border px-2 py-1.5 text-xs font-semibold transition xl:px-3.5 xl:py-2 xl:text-sm 2xl:px-5 ${isRouteActive(pathname, "/login") ? "border-purple-300 bg-purple-50 text-purple-800" : "border-purple-200 text-purple-700 hover:bg-purple-50"}`}>
                {content.loginSignupLabel}
              </Link>
              <a
                href={portalUrl}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap rounded-lg border border-purple-200 px-2 py-1.5 text-xs font-semibold text-purple-700 transition hover:bg-purple-50 xl:px-3.5 xl:py-2 xl:text-sm 2xl:px-5"
              >
                {content.loginLabel}
              </a>
            </>
          )}
          <Link
            href="/contact"
            aria-current={contactIsCurrent ? "page" : undefined}
            className={`whitespace-nowrap rounded-lg px-2 py-1.5 text-xs font-semibold text-white shadow-sm transition xl:px-4 xl:py-2 xl:text-sm 2xl:px-5 ${
              contactIsCurrent
                ? "bg-orange-600 shadow-orange-300"
                : "bg-orange-500 shadow-orange-200 hover:bg-orange-600"
            }`}
          >
            {content.contactUsLabel}
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => {
            const nextOpen = !open;
            setOpen(nextOpen);
            if (!nextOpen) {
              setMobileCoursesOpen(false);
              setMobileMoreOpen(false);
              setMobileBusinessOpen(false);
            }
          }}
          aria-label={content.toggleMenuLabel}
        >
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-700 transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-60px)] overflow-y-auto border-t border-purple-100/60 bg-white px-6 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4">
            {primaryLinks.map((link) => {
              const isCurrent = isRouteActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isCurrent
                      ? "bg-purple-50 text-purple-800"
                      : "text-gray-600 hover:text-purple-700"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    setMobileCoursesOpen(false);
                    setMobileMoreOpen(false);
                    setMobileBusinessOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium ${exploreIsCurrent ? "bg-purple-50 text-purple-800" : "text-gray-700"}`}
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              >
                <span>{content.exploreLabel}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCoursesOpen && (
                <div className="border-purple-100 bg-purple-50/30 py-2">
                  <Link
                    href="/courses"
                    aria-current={isRouteActive(pathname, "/courses") ? "page" : undefined}
                    className={`block px-3 py-2 text-sm font-semibold ${isRouteActive(pathname, "/courses") ? "bg-purple-100 text-purple-800" : "text-purple-700"}`}
                    onClick={() => {
                      setOpen(false);
                      setMobileCoursesOpen(false);
                      setMobileMoreOpen(false);
                      setMobileBusinessOpen(false);
                    }}
                  >
                    {content.viewAllCoursesLabel}
                  </Link>
                  {exploreLinks.map((link) => {
                    const isCurrent = isExploreLinkActive(pathname, link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`block px-3 py-2 text-sm transition ${
                          isCurrent
                            ? "bg-purple-50 font-semibold text-purple-800"
                            : "text-gray-600 hover:text-purple-700"
                        }`}
                        onClick={() => {
                          setOpen(false);
                          setMobileCoursesOpen(false);
                          setMobileMoreOpen(false);
                          setMobileBusinessOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium ${moreIsCurrent ? "bg-purple-50 text-purple-800" : "text-gray-700"}`}
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              >
                <span>{content.moreLabel}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileMoreOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileMoreOpen && (
                <div className="border-purple-100 bg-purple-50/30 py-2">
                  {moreLinks.map((link) => {
                    const isCurrent = isRouteActive(pathname, link.href);

                    return link.href === "/join-as-Mentor" ? (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`mx-2 mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white transition ${
                          isCurrent ? "bg-purple-800" : "bg-purple-700 hover:bg-purple-800"
                        }`}
                        onClick={() => {
                          setOpen(false);
                          setMobileCoursesOpen(false);
                          setMobileMoreOpen(false);
                          setMobileBusinessOpen(false);
                        }}
                      >
                        <span className="text-[10px]">✦</span>
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`block px-3 py-2 text-sm transition ${
                          isCurrent
                            ? "bg-purple-50 font-semibold text-purple-800"
                            : "text-gray-600 hover:text-purple-700"
                        }`}
                        onClick={() => {
                          setOpen(false);
                          setMobileCoursesOpen(false);
                          setMobileMoreOpen(false);
                          setMobileBusinessOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/business"
                  aria-current={businessIsCurrent ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${businessIsCurrent ? "bg-purple-50 text-purple-800" : "text-gray-600"}`}
                  onClick={() => {
                    setOpen(false);
                    setMobileBusinessOpen(false);
                  }}
                >
                  {content.business.label}
                </Link>

                <button type="button" className="p-1" onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)} aria-expanded={mobileBusinessOpen}>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${mobileBusinessOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {mobileBusinessOpen && (
                <div className="mt-1 overflow-hidden">
                  <Link
                    href="/business/pricing"
                    aria-current={isRouteActive(pathname, "/business/pricing") ? "page" : undefined}
                    className={`block px-4 py-3 text-sm transition ${
                      isRouteActive(pathname, "/business/pricing")
                        ? "bg-purple-50 font-semibold text-purple-800"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                    }`}
                    onClick={() => {
                      setOpen(false);
                      setMobileBusinessOpen(false);
                    }}
                  >
                    {content.business.comparePlansLabel}
                  </Link>

                  <Link
                    href="/business/request-demo"
                    aria-current={isRouteActive(pathname, "/business/request-demo") ? "page" : undefined}
                    className={`block border-t border-gray-50 px-4 py-3 text-sm font-semibold transition ${
                      isRouteActive(pathname, "/business/request-demo")
                        ? "bg-purple-100 text-purple-800"
                        : "bg-purple-50 text-purple-700 hover:bg-purple-100"
                    }`}
                    onClick={() => {
                      setOpen(false);
                      setMobileBusinessOpen(false);
                    }}
                  >
                    {content.business.tryLabel}
                  </Link>
                </div>
              )}
            </div>
            {session ? (
              <>
                <div className="flex items-center gap-3 rounded-xl border border-purple-100 bg-purple-50 px-3 py-2">
                  {session.photo ? (
                    <span className="relative block h-8 w-8 overflow-hidden rounded-full">
                      <Image src={profilePhoto} alt={session.name} fill sizes="32px" unoptimized={shouldBypassImageOptimization} className="object-cover" />
                    </span>
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200 text-purple-600">
                      <User size={16} />
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-800">{session.name}</p>
                    <p className="truncate text-xs text-gray-400">{session.phone}</p>
                  </div>
                </div>
                <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50" onClick={handleLogout}>
                  <LogOut size={14} /> {content.logoutLabel}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/courses"
                  aria-current={isRouteActive(pathname, "/courses") ? "page" : undefined}
                  className={`mt-2 block w-full rounded-lg border px-5 py-2.5 text-center text-sm font-semibold transition ${
                    isRouteActive(pathname, "/courses")
                      ? "border-purple-300 bg-purple-50 text-purple-800"
                      : "border-purple-200 text-purple-700 hover:bg-purple-50"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    setMobileCoursesOpen(false);
                    setMobileMoreOpen(false);
                    setMobileBusinessOpen(false);
                  }}
                >
                  {content.loginSignupLabel}
                </Link>
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-lg border border-purple-200 px-5 py-2.5 text-center text-sm font-semibold text-purple-700 transition hover:bg-purple-50"
                  onClick={() => {
                    setOpen(false);
                    setMobileCoursesOpen(false);
                    setMobileMoreOpen(false);
                    setMobileBusinessOpen(false);
                  }}
                >
                  {content.loginLabel}
                </a>
              </>
            )}
            <Link
              href="/contact"
              aria-current={contactIsCurrent ? "page" : undefined}
              className={`rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-white ${contactIsCurrent ? "bg-orange-600" : "bg-orange-500"}`}
              onClick={() => {
                setOpen(false);
                setMobileCoursesOpen(false);
                setMobileMoreOpen(false);
                setMobileBusinessOpen(false);
              }}
            >
              {content.contactUsLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}