"use client";
import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { useScrollToSection } from "@/components/Hooks/hooks";
import { Navlinks } from "@/Constant/Constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);
  const pathname = usePathname();
  const { scrollToSection } = useScrollToSection();
  return (
    <nav
      className={`transition-all ${navBg ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Link href={"/"}>
          <Logo />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {Navlinks.map((link, index) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={index}
                href={link.href}
                onClick={() =>
                  link.href === "/#contact" ? scrollToSection("contact") : null
                }
                className={`font-semibold transition-all duration-200
        ${
          isActive
            ? "text-blue-500 dark:text-blue-300 border-b-2 border-blue-500"
            : "text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-200"
        }
      `}
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
          {/* <div
            onClick={() => scrollToSection("contact")}
            className={`font-semibold transition-all duration-200 "text-black cursor-pointer dark:text-white hover:text-blue-500 dark:hover:text-blue-200"
        
      `}
          >
            <p>Contact</p>
          </div> */}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/Docs/Adeolu_Adeyinka_CV_Transcript_.pdf"
            className="boxborder relative z-20 inline-flex items-center justify-center w-auto px-4  py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-900 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none  gap-1 text-sm "
            download
          >
            <Download className="w-4 h4 " />
            Download CV
          </a>
          <ThemeToggler />
          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
