import Image from "next/image";
import React from "react";

type Props = {
  ImageData: {
    id: number;
    image: string;
    caption: string;
  };
  type: string;
};

const PhotoCards = ({ ImageData, type }: Props) => {
  return (
    <div
      className={`   overflow-hidden ${type === "research" ? "w-full max-w-105 shadow-7xl " : "w-[360px] rounded-t-2xl"}  mx-auto border-b-2 bg-blue-200-50 shadow-md`}
    >
      <img
        alt="Image"
        src={ImageData.image}
        className={`${type === "research" ? "object-fill h-100 " : "object-cover h-[500px]"}  w-full `}
      />
      <h3
        className={`${type === "research" ? "text-center font-semibold p-1 " : "p-2"}`}
      >
        {ImageData.caption}
      </h3>
    </div>
  );
};

export default PhotoCards;
