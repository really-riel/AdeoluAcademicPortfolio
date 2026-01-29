import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { WorkExperienceData } from "@/data";
import { Dot } from "lucide-react";
import WorkGallery from "./WorkGallery";

const WorkExperience = () => {
  return (
    <section className="py-30 px-2 flex justify-center flex-col gap-2">
      <SectionHeading
        title_1="Work"
        title_2="Experience"
        description="Where I have worked"
      />
      <div className="flex flex-col gap-7">
        {WorkExperienceData.map((work, index) => (
          <div className=" border-b-3 py-6" key={index}>
            <h2 className="font-semibold text-2xl">{work.title}</h2>
            <h3 className="text-blue-900 text-xl">{work.company}</h3>
            <div className="font-light">{work.period}</div>
            <div className="">
              {work.duties.map((duty, index) => (
                <ul className="flex items-center" key={index}>
                  <Dot className="w-10 h-10" />
                  <li className="">{duty}</li>
                </ul>
              ))}
              <WorkGallery gallery={work.gallery} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
