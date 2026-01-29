import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { WorkExperienceData } from "@/data";
import PhotoCarousel from "../Helper/PhotoCarousel";

const WorkExperience = () => {
  return (
    <section className="px-4 py-25  flex justify-center flex-col ">
      <SectionHeading
        title_1="Work"
        title_2="Experience"
        description="Where I have worked"
      />
      <div className="flex flex-col gap-7">
        {WorkExperienceData.map((work, index) => (
          <div className=" border-b-3 " key={index}>
            <h2 className="font-semibold text-xl">{work.title}</h2>
            <h3 className="text-blue-900 text-l">{work.company}</h3>
            <div className="font-light">{work.period}</div>
            <div className="">
              {work.duties.map((duty, index) => (
                <ul className="flex items-center list-disc pl-3" key={index}>
                  <li className="">{duty}</li>
                </ul>
              ))}
              <PhotoCarousel gallery={work.gallery} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
