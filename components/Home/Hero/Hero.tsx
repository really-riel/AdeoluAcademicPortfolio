import { socialLinks } from "@/data";
import React from "react";
import { MdArrowDownward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] grid w-full px-2 pb-10 overflow-hidden min-h-svh dark:bg-gray-900 dark:bg-none place-content-center ">
      <div className="text-[clamp(1rem,_0.2rem_+_1vw,_2rem)]  flex flex-col justify-center lg:flex-row-reverse  mx-auto gap-6">
        <figure className="w-52 h-52 blob max-sm[]:bg-red-500 md:w-80 md:h-80 lg:w-110 lg:h-110 rounded-[50%] overflow-hidden mx-auto">
          <img
            src={"images/profilePic.jpg"}
            alt="Irregular frame"
            className="object-cover object-top w-full h-full irregular-frame-image"
          />
        </figure>
        <div className="flex flex-col justify-center gap-5  ">
          <p className="font-semibold">Hey, I'm </p>
          <p className="font-extrabold  text-[clamp(1.5rem,_1.1rem_+_2vw,_3rem)]">
            Adeolu Adeyinka.
          </p>
          <p className="font-bold text-[clamp(0.5rem,_1rem_+_1vw,_2rem)]">
            {" "}
            {/* B.Eng Mechanical Engineering */}
            Mechanical Engineer <br />
            <span className="text-[clamp(0.5rem,_0.8rem_+_1vw,_1.5rem)]">
              {" "}
              Thermal and Sustainable Energy Systems
            </span>
          </p>
          <p>
            find out more <span className="font-semibold">about me.</span>{" "}
          </p>
          <div className="flex items-center gap-3 ">
            {socialLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="bg-blue-100 w-10  rounded-[50%] dark:text-black h-10 grid  place-content-center"
                >
                  <link.icon />
                </a>
              );
            })}
          </div>
        </div>
        <a
          href="#aboutMe"
          className="absolute bottom-0 grid w-12 h-12 text-3xl transform -translate-x-1/2 cursor-pointer place-content-center left-1/2 text-blue-950 dark:text-gray-50"
        >
          <MdArrowDownward className="animate-bounce " />
        </a>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%, rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]">
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  mb-6  ">
          Hi, I&apos;m{" "}
          <span className="text-purple-800 dark:text-gray-100">
            {" "}
            Adeolu Adeyinka
          </span>
        </h1>
      </div>
    </div> */
}
