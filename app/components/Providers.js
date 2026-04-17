"use client";
import AutoTranslate from "@/components/AutoTranslate";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({ children, initialLanguage }) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <AutoTranslate />
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
