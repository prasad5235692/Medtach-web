import BusinessLayoutShell from "@/components/BusinessLayoutShell";

export const metadata = {
  title: "MedTech Business — Upskill Your Healthcare Team",
  description:
    "Enterprise training solutions for healthcare organizations. Medical coding, billing, and compliance courses at scale.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function BusinessLayout({ children }) {
  return <BusinessLayoutShell>{children}</BusinessLayoutShell>;
}
