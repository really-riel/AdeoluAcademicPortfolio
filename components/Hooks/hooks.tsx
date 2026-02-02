/* "use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useHashScroll = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  }, [pathname, searchParams]);
}; */

/* "use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const useHashScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [pathname]);
}; */

// hooks/useHashScroll.ts

/* "use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useHashScroll = () => {
  const pathname = usePathname();
  const lastPathRef = useRef(pathname);
  const lastHashRef = useRef("");

  useEffect(() => {
    const hash = window.location.hash;

    // Only scroll if pathname changed OR hash is different from last time
    if (
      hash &&
      (pathname !== lastPathRef.current || hash !== lastHashRef.current)
    ) {
      lastPathRef.current = pathname;
      lastHashRef.current = hash;

      const elementId = hash.substring(1);

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [pathname]);
};
 */

// hooks/useSectionScroll.ts
/* "use client";

import { useRef, useCallback } from "react";

export function useSectionScroll() {
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const registerSection = useCallback(
    (name: string, element: HTMLDivElement | null) => {
      if (element) {
        sectionRefs.current.set(name, element);
      } else {
        sectionRefs.current.delete(name);
      }
    },
    [],
  );

  const scrollToSection = useCallback((name: string) => {
    const element = sectionRefs.current.get(name);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return { registerSection, scrollToSection };
} */

"use client";

import { useCallback } from "react";

export function useScrollToSection() {
  const scrollToSection = useCallback((sectionName: string) => {
    // Find element by data attribute
    const element = document.querySelector(`[data-section="${sectionName}"]`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return { scrollToSection };
}
