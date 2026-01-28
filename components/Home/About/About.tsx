import SectionHeading from "@/components/Helper/SectionHeading";
import { researchInterest } from "@/data";
import { Dot, DotSquareIcon, Download, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className=" relative py-16 bg-gray-100 dark:bg-gray-900"
    >
      {/* svg */}
      <svg
        id="visual"
        viewBox="0 0 900 900"
        width="1400"
        height="1400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="z-0 absolute -top-20 -left-[920px]  lg:-left-[1000px] "
      >
        <g transform="translate(489.79892233902535 503.8402273150739)">
          <path
            d="M181.2 -217.8C219.5 -142.8 224.8 -71.4 202.3 -22.4C179.9 26.5 129.7 53 91.4 105.9C53 158.7 26.5 237.9 -14.8 252.6C-56.1 267.4 -112.2 217.9 -172.4 165C-232.5 112.2 -296.8 56.1 -295.2 1.5C-293.7 -53 -226.4 -106.1 -166.2 -181.1C-106.1 -256.1 -53 -353 9.2 -362.2C71.4 -371.4 142.8 -292.8 181.2 -217.8"
            fill="#172554"
          ></path>
        </g>
      </svg>

      <div className="my-6  p-1 grid gap-4 rounded-md py-10 px-3">
        {/* section heading */}

        <SectionHeading title_1="About" title_2="Me" />
        <div className="w-[80%] mx-auto  items-center">
          <p className="text-muted-foreground leading-relaxed">
            I am a Mechanical engineering graduate who is passionate about
            research in sustainable energy. His studies focus on the use of
            various computer science research areas such as artificial
            intelligence, machine learning, pattern recognition, computer
            vision, image processing and sensors and acquisition to develop
            novel imaging techniques that allow doctors to achieve a much more
            accurate diagnosis of the most important diseases (e.g. cancer) at
            an early stage.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            His research interests are in areas related to medical imaging and
            applications such as image segmentation, image registration,
            computer-aided surgery and medical robotics, computer-aided
            diagnosis, and telehealth. Taofik is passionate about learning,
            networking, and travelling since it allows him to interact with
            individuals from
          </p>
          <p className="text-muted-foreground leading-relaxed">
            He has also demonstrated exceptional leadership qualities and has
            participated in extracurricular activities that have helped both
            students and the community over time. Over the years, he has
            volunteered with several professional and local organizations to
            positively impact society. Taofik enjoys teaching and mentoring, and
            his mentees have developed a community of scholars thriving in their
            fields.
          </p>

          {/* research interest */}

          <div className="mt-7 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-center">
              Research Interest
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt4 ">
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

          {/* Education */}
        </div>
      </div>
    </section>
  );
};

export default About;
