"use client";
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
};

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
