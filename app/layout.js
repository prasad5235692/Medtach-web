import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LayoutShell from "@/components/LayoutShell";
import { getRequestDictionary, getLocale } from "@/lib/i18n/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const dictionary = await getRequestDictionary();

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8fafc] text-gray-900`}
      >
        <Providers initialLanguage={locale}>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
