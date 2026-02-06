import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { Download } from "lucide-react";
import { researchWorks } from "@/data";
import { GoDotFill } from "react-icons/go";
import PhotoCarousel from "../Helper/PhotoCarousel";
import Image from "next/image";

const Research = () => {
  return (
    <section className="py-20 px-5">
      <SectionHeading title_1="Research" title_2="Experience" />

      <div className="relative flex flex-col max-w-4xl mx-auto">
        {researchWorks.map((work, index) => (
          <div key={index} className="">
            <div className="flex items-start gap-2 mb-12 relative">
              {/* Dot */}
              <div className="md:flex flex-col hidden items-center">
                <GoDotFill className="w-5  h-5 text-blue-500 mt-1" />
                {index !== researchWorks.length - 1 && (
                  <div className="w-px flex-1 bg-blue-300 mt-1"></div>
                )}
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

                {work.download && (
                  <a
                    download
                    href={work.download}
                    className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-blue-950 text-white font-bold rounded-md transition-all hover:bg-blue-800"
                  >
                    <Download className="w-4 h-4" />
                    Paper
                  </a>
                )}
              </div>
            </div>
            {work.images && (
              <div className="">
                <div className="flex  gap-6 w-full overflow-x-scroll">
                  {work.images.map((image, index) => (
                    <div
                      key={index}
                      className="min-w-96 flex flex-col min-h-72 py-4 shadow-l"
                    >
                      <img
                        alt={image.caption}
                        src={image.image}
                        className="object-fill w-full h-full shadow-xl"
                      />
                      <h3 className="text-center font-semibold pt-1">
                        {image.caption}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
