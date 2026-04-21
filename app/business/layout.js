import BusinessLayoutShell from "@/components/BusinessLayoutShell";
import { getBusinessHomeContent } from "@/business/data/home";
import { getLocale } from "@/lib/i18n/server";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const locale = await getLocale();
  const { metadata } = getBusinessHomeContent(locale);

  return {
    title: metadata.title,
    description: metadata.description,
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export default function BusinessLayout({ children }) {
  return <BusinessLayoutShell>{children}</BusinessLayoutShell>;
}
