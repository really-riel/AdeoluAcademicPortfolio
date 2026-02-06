import SectionHeading from "@/components/Helper/SectionHeading";
import { hobbies, researchInterest } from "@/data";
import { Dot } from "lucide-react";

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" relative py-5 bg-gray-100 dark:bg-gray-900 border-t-4"
    >
      {/* svg */}
      <svg
        id="visual"
        viewBox="0 0 900 900"
        width="1400"
        height="1400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="-z-5 absolute -top-20 -left-[920px]  lg:-left-[1000px] "
      >
        <g transform="translate(489.79892233902535 503.8402273150739)">
          <path
            d="M181.2 -217.8C219.5 -142.8 224.8 -71.4 202.3 -22.4C179.9 26.5 129.7 53 91.4 105.9C53 158.7 26.5 237.9 -14.8 252.6C-56.1 267.4 -112.2 217.9 -172.4 165C-232.5 112.2 -296.8 56.1 -295.2 1.5C-293.7 -53 -226.4 -106.1 -166.2 -181.1C-106.1 -256.1 -53 -353 9.2 -362.2C71.4 -371.4 142.8 -292.8 181.2 -217.8"
            fill="#172554"
          ></path>
        </g>
      </svg>

      <div className="my-6   grid gap-4  py-5 ">
        {/* section heading */}

        <SectionHeading title_1="About" title_2="Me" />
        <div className="w-[90%] mx-auto  items-center">
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate mechanical engineer dedicated to advancing clean
              and accessible energy solutions. My journey is fueled by a strong
              interest in heat and mass transfer, thermal energy storage, and
              solar technologies, all aimed at supporting United Nations
              Sustainable Development Goal 7 (SDG 7). I have hands-on experience
              developing a solar-powered dryer with thermal storage, which
              successfully improved drying efficiency for local crops, blending
              technical innovation with practical and sustainable impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Professionally, I work as an Engineering Support Specialist, where
              I enhance operational efficiency, and I also enjoy building web
              applications that solve real-world problems. Beyond my technical
              roles, I actively participate in programs like the Sustainable
              Energy Accelerator by AIIDEV Africa. I am always seeking to learn
              and contribute to a greener future. I believe in using engineering
              and technology to create systems that are not only efficient but
              also environmentally friendly and equitable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am excited by projects that merge renewable energy, smart
              design, and community benefit. Whether through research, industry
              collaboration, or volunteering, my goal is to contribute
              meaningfully to sustainable energy access and inspire others along
              the way.
            </p>
          </div>

          {/* research interest */}

          <div className="mt-7 flex flex-col gap-5 border-t-4 pt-4">
            <h3 className="text-2xl font-bold text-center">
              Research Interest
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1  ">
              {researchInterest.map((interest: string, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    <Dot className="w-10 h-10" />
                    <li className="">{interest}</li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="mt-7 flex flex-col gap-5 border-t-4 pt-4">
            <h3 className="text-2xl font-bold text-center">Hobbies</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1  ">
              {hobbies.map((interest: string, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    <Dot className="w-10 h-10" />
                    <li className="">{interest}</li>
                  </div>
                );
              })}
            </ul>
          </div>

          {/* Education */}
        </div>
      </div>
    </section>
  );
};

export default About;
