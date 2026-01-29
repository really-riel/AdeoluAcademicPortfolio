"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdMailOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { PhoneCall } from "lucide-react";

const ContactMe = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm("service_f4ctodd", "template_rd2kqft", form.current, {
        publicKey: "JTN7BLGeS1tUqwNoX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Not sent, please try again");
        },
      );
  };
  return (
    <section
      id="contact"
      className="py-20 border-t-4 bg-gray-100 dark:bg-gray-900 min-h-[90svh] scroll-mt-12"
    >
      <div className="w-[80%] mx-auto">
        <SectionHeading title_1="Contact" title_2="Me" description="" />
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="px-5">
          <h2 className="text-[clamp(1rem,_1rem_+_1vw,_1.8rem)] font-semibold">
            Let's talk
          </h2>
          <p>
            if you have any oppurtunities, ideas or questions, fill up the form
            and I will be in touch with you
          </p>

          <a
            href="mailto:ag.adeyinka@gmail.com"
            className="flex items-center gap-2  w-fit hover:scale-110 transition-all mt-4 "
          >
            {" "}
            <MdMailOutline className="text-xl" />
            adeyinka.ag@gmail.com
          </a>
          <a
            href="tel:+23481235979705"
            className="flex items-center w-fit hover:scale-110 transition-all  gap-2 mt-4"
          >
            <PhoneCall className="text-xl" />
            +2348123597905
          </a>
        </div>
        <form
          className="flex flex-col items-center justify-center w-full gap-4 p-5 my-auto dark:text-black"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="offscreen">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="name"
            className="w-full p-4 dark:placeholder:text-black bg-blue-100 rounded-t-lg"
            required
          />
          <label className="offscreen">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="email"
            className="w-full p-4 dark:placeholder:text-black bg-blue-100"
            required
          />
          <label className="offscreen ">Message</label>
          <textarea
            name="message"
            className="grid w-full p-4 h-40 dark:placeholder:text-black bg-blue-100 resize-none"
            placeholder="message"
          />
          <button
            type="submit"
            value="Send"
            className="w-full p-5 text-white cursor-pointer hover:bg-blue-700 bg-blue-950 rounded-b-lg"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
