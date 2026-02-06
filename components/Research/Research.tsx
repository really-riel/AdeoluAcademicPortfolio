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

      <ul className="relative flex flex-col max-w-4xl mx-auto ">
        {researchWorks.map((work, index) => (
          <li key={index} className="">
            <div className="flex items-start gap-2 mb-12 relative">
              {/* Dot */}
              <div className="md:flex flex-col  items-center justify-center">
                <GoDotFill className="w-2  h-2  text-blue-500 md:w-4 md:h-4 md:mt-1 mt-1.5" />
              </div>

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
                    <h3 className="mb-2">
                      <span className="font-semibold">Supervisor: </span>Prof.
                      M.A Waheed
                    </h3>
                    <h3 className="font-semibold">Abstract:</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {work.images && (
              <div className="-mt-10">
                <PhotoCarousel gallery={work.images} type={"research"} />
                <a
                  download
                  href={work.download}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-950 text-white font-bold rounded-md transition-all hover:bg-blue-800 ml-4"
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
