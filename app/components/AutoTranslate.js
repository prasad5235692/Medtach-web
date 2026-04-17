"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { getSourceText, localizeText } from "@/lib/i18n/content";

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

function withWhitespace(referenceText, nextText) {
  const leadingWhitespace = referenceText.match(/^\s*/)?.[0] ?? "";
  const trailingWhitespace = referenceText.match(/\s*$/)?.[0] ?? "";
  return `${leadingWhitespace}${nextText}${trailingWhitespace}`;
}

function translateTextNode(node, language) {
  const currentText = node.nodeValue ?? "";

  if (!currentText.trim()) {
    return;
  }

  if (!originalTextNodes.has(node)) {
    originalTextNodes.set(node, getSourceText(language, currentText));
  }

  const sourceText = originalTextNodes.get(node);
  const nextText = language === "en" ? sourceText : localizeText(language, sourceText);
  node.nodeValue = withWhitespace(currentText, nextText);
}

function translateAttributes(element, language) {
  const attributes = ["placeholder", "aria-label", "title", "alt", "value"];
  const original = originalAttributes.get(element) ?? {};

  for (const attributeName of attributes) {
    if (!element.hasAttribute(attributeName)) {
      continue;
    }

    const currentValue = element.getAttribute(attributeName);

    if (!currentValue || !currentValue.trim()) {
      continue;
    }

    if (!original[attributeName]) {
      original[attributeName] = getSourceText(language, currentValue);
    }

    const nextValue = language === "en" ? original[attributeName] : localizeText(language, original[attributeName]);
    element.setAttribute(attributeName, nextValue);
  }

  originalAttributes.set(element, original);
}

function shouldSkipTextNode(node) {
  const parent = node.parentElement;

  if (!parent) {
    return true;
  }

  return ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName);
}

function translateSubtree(root, language) {
  if (!root) {
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipTextNode(node) || !node.nodeValue?.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let currentNode = walker.nextNode();

  while (currentNode) {
    translateTextNode(currentNode, language);
    currentNode = walker.nextNode();
  }

  const elements = [root, ...root.querySelectorAll("*")];
  elements.forEach((element) => translateAttributes(element, language));
}

export default function AutoTranslate() {
  const pathname = usePathname();
  const { language } = useLanguage();

  useEffect(() => {
    translateSubtree(document.body, language);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node, language);
            return;
          }

          if (node.nodeType === Node.ELEMENT_NODE) {
            translateSubtree(node, language);
          }
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [language, pathname]);

  return null;
}