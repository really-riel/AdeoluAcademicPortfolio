import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { WorkExperienceData } from "@/data";
import { Dot } from "lucide-react";
import PhotoCarousel from "../Helper/PhotoCarousel";

const WorkExperience = () => {
  return (
    <section className="px-2 py-25  flex justify-center flex-col ">
      <SectionHeading
        title_1="Work"
        title_2="Experience"
        description="Where I have worked"
      />
      <div className="flex flex-col gap-7">
        {WorkExperienceData.map((work, index) => (
          <div className=" border-b-3 " key={index}>
            <h2 className="font-semibold text-2xl">{work.title}</h2>
            <h3 className="text-blue-900 text-xl">{work.company}</h3>
            <div className="font-light">{work.period}</div>
            <div className="">
              {work.duties.map((duty, index) => (
                <ul className="flex items-center list-disc pl-3" key={index}>
                  {/* <Dot className="w-10 h-10" /> */}
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
