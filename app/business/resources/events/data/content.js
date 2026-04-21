import { DEFAULT_LOCALE, resolveLocale } from "@/lib/i18n/config";
import { localizeContent, mergeLocalizedContent } from "@/lib/i18n/content";

const eventsPageContent = {
  metadata: {
    title: "Events — MedTech Business",
    description: "Upcoming workshops, live masterclasses, and webinars for healthcare training teams.",
  },
  hero: {
    badge: "Events",
    titleSegments: [
      { id: "lead", text: "Upcoming Workshops &", highlight: false },
      { id: "accent", text: "Live Masterclasses", highlight: true },
    ],
    description:
      "Free and paid events for healthcare coding, billing, and L&D professionals. Learn from industry experts, network with peers, and leave with actionable insights.",
  },
  upcomingSection: {
    title: "Upcoming Events",
    registerLabel: "Register",
    items: [
      {
        id: "ai-assisted-coding-webinar",
        type: "Webinar",
        typeColor: "bg-purple-100 text-purple-700",
        icon: "video",
        date: "May 8, 2026",
        time: "3:00 PM – 4:30 PM IST",
        title: "AI-Assisted Coding: Preparing Your Team for 2026 and Beyond",
        description:
          "Join our Chief Learning Officer and a guest panel of senior coders to explore how AI coding tools are reshaping the profession — and the skills your team needs to stay ahead.",
        seats: "Open — 200 seats remaining",
        location: "Online (Zoom)",
        href: "/business/contact",
      },
      {
        id: "denial-management-workshop",
        type: "Workshop",
        typeColor: "bg-purple-100 text-purple-800",
        icon: "users",
        date: "May 22, 2026",
        time: "10:00 AM – 1:00 PM IST",
        title: "Denial Management Masterclass for Billing Supervisors",
        description:
          "A hands-on 3-hour workshop covering the top 10 denial categories, root-cause analysis workflows, and AR escalation strategies. Participants receive a certificate of completion.",
        seats: "30 seats — 12 remaining",
        location: "Online (Google Meet)",
        href: "/business/contact",
      },
      {
        id: "learning-culture-masterclass",
        type: "Masterclass",
        typeColor: "bg-emerald-100 text-emerald-700",
        icon: "calendar-days",
        date: "June 5, 2026",
        time: "2:00 PM – 3:30 PM IST",
        title: "Building a Learning Culture in Your Healthcare Organisation",
        description:
          "A strategic session for L&D managers and HIM directors. Learn how leading hospital groups moved from ad-hoc training to a systematic upskilling engine — and the measurable outcomes that followed.",
        seats: "Open — 150 seats remaining",
        location: "Online (Teams)",
        href: "/business/contact",
      },
      {
        id: "medtech-business-summit",
        type: "In-Person",
        typeColor: "bg-purple-100 text-purple-700",
        icon: "map-pin",
        date: "June 18, 2026",
        time: "9:00 AM – 5:00 PM IST",
        title: "MedTech Business Summit — Bengaluru",
        description:
          "India's first dedicated healthcare workforce learning summit. Keynotes, roundtables, and networking sessions for HIM professionals, L&D managers, and C-suite healthcare leaders.",
        seats: "200 seats — 48 remaining",
        location: "The Leela Palace, Bengaluru",
        href: "/business/contact",
      },
      {
        id: "cpc-exam-strategy-webinar",
        type: "Webinar",
        typeColor: "bg-purple-100 text-purple-700",
        icon: "video",
        date: "July 3, 2026",
        time: "11:00 AM – 12:00 PM IST",
        title: "CPC Exam Strategy: What AAPC Doesn't Tell You",
        description:
          "Our top-performing instructor and three recent CPC passers share exam-day tactics, time management strategies, and the coding guidelines most candidates overlook.",
        seats: "Open — No limit",
        location: "Online (Zoom)",
        href: "/business/contact",
      },
    ],
  },
  pastSection: {
    title: "Past Events — Recordings Available",
    description: "Contact us to request access to recorded sessions.",
    linkLabel: "Request Recordings",
    items: [
      { id: "skills-gaps-webinar", title: "From Skills Gaps to Strategic Wins — March 2026", type: "Webinar" },
      { id: "icd10-updates-masterclass", title: "ICD-10 Updates for 2026: What Every Coder Must Know", type: "Masterclass" },
      { id: "denial-trends-workshop", title: "Revenue Cycle Deep Dive — Q4 Denial Trends", type: "Workshop" },
    ],
  },
  ctaSection: {
    title: "Want us to run a private event for your team?",
    description: "We run bespoke workshops and masterclasses for organisations with 20+ participants.",
    primaryCtaLabel: "Enquire About Private Events",
  },
};

const eventsTranslations = {
  hi: {
    metadata: {
      title: "इवेंट्स — MedTech Business",
      description: "हेल्थकेयर प्रशिक्षण टीमों के लिए आगामी वर्कशॉप्स, लाइव मास्टरक्लासेस और वेबिनार।",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "आगामी वर्कशॉप्स और", highlight: false },
        { id: "accent", text: "लाइव मास्टरक्लासेस", highlight: true },
      ],
    },
  },
  ml: {
    metadata: {
      title: "ഇവന്റുകൾ — MedTech Business",
      description: "ഹെൽത്കെയർ പരിശീലന ടീമുകൾക്കായി വരാനിരിക്കുന്ന വർക്ക്‌ഷോപ്പുകൾ, ലൈവ് മാസ്റ്റർക്ലാസുകൾ, വെബിനാറുകൾ.",
    },
    hero: {
      titleSegments: [
        { id: "lead", text: "വരാനിരിക്കുന്ന വർക്ക്‌ഷോപ്പുകളും", highlight: false },
        { id: "accent", text: "ലൈവ് മാസ്റ്റർക്ലാസുകളും", highlight: true },
      ],
    },
  },
};

export function getEventsContent(locale = DEFAULT_LOCALE) {
  const resolvedLocale = resolveLocale(locale);

  if (resolvedLocale === DEFAULT_LOCALE) {
    return eventsPageContent;
  }

  const localizedBase = localizeContent(eventsPageContent, resolvedLocale);
  return mergeLocalizedContent(localizedBase, eventsTranslations[resolvedLocale]);
}