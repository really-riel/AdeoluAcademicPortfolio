import SectionHeading from "@/components/Helper/SectionHeading";
import { Download, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <section className="w-[80%] mx-auto pb-10">
      <div className="flex flex-col  gap-4 mt-4">
        <SectionHeading
          title_1="Education"
          title_2=""
          description="Where I studied"
        />
        <div className="flex flex-col justify-center items-center gap-8 lg:flex-row ">
          <Image
            src={"/images/FUNAAB LOGO.png"}
            alt="Logo"
            width={400}
            height={400}
          />
          <div className="flex flex-col gap-2 justify-center">
            <a
              target="_blank"
              href="https://funaab.edu.ng/"
              className="text-[1.2rem] font-semibold flex gap-0.5 items-center"
            >
              Federal University of Agriculture Abeokuta (FUNAAB) <Link />
            </a>
            <p>
              <span className="font-bold">Degree:</span> Bachelors of
              Engineering in Mechanical Engineering
            </p>
            <p>
              {" "}
              <span className="font-bold">Grade: </span>Second Class Upper
              division
            </p>
            <p>
              <span className="font-bold">
                Cumulative Grade point Average (CGPA):
              </span>{" "}
              4.0/5.0 (80%)
            </p>
            <p>
              <span className="font-bold">Thesis Title:</span> Development of a
              Forced Convection Solar Cabinet Dryer with Thermal Energy Storage
            </p>
            <p></p>
            <div className="">
              <a
                href="/docs/Adeolu-Transcript.pdf"
                download
                className=" gap-1 boxborder relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-950 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-blue-500 ease focus:outline-none "
              >
                <Download />
                <p>Transcript</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
