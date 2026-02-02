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
