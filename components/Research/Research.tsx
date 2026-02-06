import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { Download } from "lucide-react";
import { researchWorks } from "@/data";
import { GoDotFill } from "react-icons/go";
import PhotoCarousel from "../Helper/PhotoCarousel";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

const Research = () => {
  return (
    <section className="py-20 px-5">
      <SectionHeading title_1="Research" title_2="Experience" />

      <ul className="relative flex flex-col gap-4 max-w-4xl mx-auto ">
        {researchWorks.map((work, index) => (
          <li key={index} className="border-b-4  last:border-b-0 pb-6">
            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-sm md:text-xl font-bold">{work.title}</h2>
                {work.period && (
                  <span className="italic text-sm text-gray-500">
                    {work.period}
                  </span>
                )}
              </div>

              {work.description && (
                <div className="mt-3">
                  <h3 className="mb-2  text-sm md:text-xl">
                    <span className=" font-semibold">Supervisor: </span>
                    Prof. M.A Waheed
                  </h3>
                  <h3 className="font-semibold text-sm md:text-xl">
                    Abstract:
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              )}
            </div>

            {work.images && (
              <div className="">
                <PhotoCarousel gallery={work.images} type={"research"} />
                <a
                  download
                  href={work.download}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-950 text-white font-bold rounded-md transition-all hover:bg-blue-800 ml-1"
                >
                  <Download className="w-4 h-4" />
                  Paper
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Research;
