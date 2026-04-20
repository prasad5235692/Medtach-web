"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Check, CheckCircle, X } from "lucide-react";
import { getClientPageContent } from "@/data/clientPageContent";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function CourseActions({ slug, title }) {
  const { session } = useAuth();
  const { addToCart, isInCart, toggleWishlist, isInWishlist } = useCart();
  const { language } = useLanguage();
  const [toast, setToast] = useState(null);
  const content = getClientPageContent("courseActions", language);

  const formatToast = (template) => template.replaceAll("{title}", title);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  const handleAddToCart = async () => {
    if (isInCart(slug)) {
      showToast(content.alreadyInCart, "info");
      return;
    }

    const payload = await addToCart(slug);

    if (!payload?.success) {
      showToast(payload?.message || content.cartUpdateError, "info");
      return;
    }

    showToast(formatToast(content.addedToCartTemplate));
  };

  const handleToggleWishlist = async () => {
    const wasIn = isInWishlist(slug);
    const payload = await toggleWishlist(slug);

    if (!payload?.success) {
      showToast(payload?.message || content.wishlistUpdateError, "info");
      return;
    }

    showToast(wasIn ? content.removedFromWishlist : content.addedToWishlist, wasIn ? "remove" : "success");
  };

  // Not logged in — show a prompt instead of the buttons
  if (!session) {
    return (
      <div className="mt-5 rounded-xl border border-purple-100 bg-purple-50 p-4 text-center">
        <p className="text-sm text-gray-600">
          <Link href="/login" className="font-semibold text-purple-700 hover:underline">
            {content.loginPromptActionLabel}
          </Link>{" "}
          {content.loginPromptSuffix}
        </p>
      </div>
    );
  }

  const inCart     = isInCart(slug);
  const inWishlist = isInWishlist(slug);

  return (
    <>
      <div className="mt-5 flex flex-col gap-2">
        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition ${
            inCart
              ? "cursor-default border border-green-200 bg-green-50 text-green-700"
              : "bg-purple-700 text-white hover:bg-purple-800 active:scale-[0.98]"
          }`}
        >
          {inCart ? <><Check size={15} /> {content.addedToCartLabel}</> : <><ShoppingCart size={15} /> {content.addToCartLabel}</>}
        </button>

        {/* Wishlist */}
        <button
          onClick={handleToggleWishlist}
          className={`flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-semibold transition ${
            inWishlist
              ? "border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
              : "border-gray-200 bg-white text-gray-600 hover:border-purple-300 hover:text-purple-700"
          }`}
        >
          <Heart size={15} className={inWishlist ? "fill-current" : ""} />
          {inWishlist ? content.savedToWishlistLabel : content.addToWishlistLabel}
        </button>

        {/* View Cart shortcut */}
        {inCart && (
          <Link
            href="/my-courses?tab=cart"
            className="text-center text-xs font-medium text-purple-600 hover:underline"
          >
            {content.viewCartLabel} →
          </Link>
        )}
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-lg ${
            toast.type === "remove" ? "bg-gray-800 text-white"
            : toast.type === "info"   ? "bg-blue-600 text-white"
            : "bg-purple-700 text-white"
          }`}
        >
          {toast.type === "remove" ? <X size={15} /> : <CheckCircle size={15} />}
          {toast.message}
        </div>
      )}
    </>
  );
}
