import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { CertificationsData } from "@/data";

const Certifications = () => {
  return (
    <section className="py-25 px-5">
      <SectionHeading
        title_1="Professional Development"
        title_2="& Certifications"
        description=""
      />
      <div className="grid gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {CertificationsData.map((data, index) => (
          <div className="flex flex-col shadow-xl" key={index}>
            <div className="">
              <img
                src={data.photo}
                alt="Certication"
                className="w-full h-[400px]"
              />
            </div>
            <div className="p-2 border-t-2 border-black bg-blue-100 grow">
              <p className="font-bold">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
