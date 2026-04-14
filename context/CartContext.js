"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  addStudentCartItem,
  addStudentFavoriteItem,
  fetchStudentCart,
  fetchStudentFavorites,
  removeStudentCartItem,
  removeStudentFavoriteItem,
} from "@/lib/websiteStudentClient";

const CartContext = createContext(null);

function getCollectionCourses(payload) {
  return Array.isArray(payload?.data?.courses) ? payload.data.courses : [];
}

function courseMatchesIdentifier(course, identifier) {
  const normalizedIdentifier = String(identifier || "").trim();

  if (!normalizedIdentifier) {
    return false;
  }

  return [course?.id, course?._id, course?.courseSlug]
    .filter(Boolean)
    .some((value) => String(value) === normalizedIdentifier);
}

function resolveCourseId(courses, identifier) {
  const matchingCourse = courses.find((course) => courseMatchesIdentifier(course, identifier));
  return matchingCourse?.id || matchingCourse?._id || String(identifier || "");
}

export function CartProvider({ children }) {
  const { session, loading } = useAuth();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const hydrateCollections = async () => {
      if (loading) {
        return;
      }

      if (!session) {
        setCart([]);
        setWishlist([]);
        setReady(true);
        return;
      }

      setReady(false);

      const [cartPayload, favoritesPayload] = await Promise.all([
        fetchStudentCart(),
        fetchStudentFavorites(),
      ]);

      if (cancelled) {
        return;
      }

      setCart(cartPayload?.success ? getCollectionCourses(cartPayload) : []);
      setWishlist(favoritesPayload?.success ? getCollectionCourses(favoritesPayload) : []);
      setReady(true);
    };

    hydrateCollections();

    return () => {
      cancelled = true;
    };
  }, [loading, session]);

  /* Cart helpers */
  const addToCart = async (identifier) => {
    if (!session) {
      return {
        success: false,
        message: "Student authentication required",
        data: [],
      };
    }

    const payload = await addStudentCartItem(identifier);

    if (payload?.success) {
      setCart(getCollectionCourses(payload));
    }

    return payload;
  };

  const removeFromCart = async (identifier) => {
    if (!session) {
      return {
        success: false,
        message: "Student authentication required",
        data: [],
      };
    }

    const payload = await removeStudentCartItem(resolveCourseId(cart, identifier));

    if (payload?.success) {
      setCart(getCollectionCourses(payload));
    }

    return payload;
  };

  const isInCart = (identifier) => cart.some((course) => courseMatchesIdentifier(course, identifier));

  /* Wishlist helpers */
  const addToWishlist = async (identifier) => {
    if (!session) {
      return {
        success: false,
        message: "Student authentication required",
        data: [],
      };
    }

    const payload = await addStudentFavoriteItem(identifier);

    if (payload?.success) {
      setWishlist(getCollectionCourses(payload));
    }

    return payload;
  };

  const removeFromWishlist = async (identifier) => {
    if (!session) {
      return {
        success: false,
        message: "Student authentication required",
        data: [],
      };
    }

    const payload = await removeStudentFavoriteItem(resolveCourseId(wishlist, identifier));

    if (payload?.success) {
      setWishlist(getCollectionCourses(payload));
    }

    return payload;
  };

  const toggleWishlist = (identifier) =>
    isInWishlist(identifier) ? removeFromWishlist(identifier) : addToWishlist(identifier);

  const isInWishlist = (identifier) => wishlist.some((course) => courseMatchesIdentifier(course, identifier));

  return (
    <CartContext.Provider
      value={{
        cart, wishlist, ready,
        addToCart, removeFromCart, isInCart,
        addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist,
        cartCount: cart.length,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
