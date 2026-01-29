import Image from "next/image";
import React from "react";

type Props = {
  ImageData: {
    id: number;
    image: string;
    caption: string;
  };
};

const PhotoCards = ({ ImageData }: Props) => {
  return (
    <div className="rounded-t-2xl  shadow bg-blue-200-50 overflow-hidden w-full  border-b-2">
      <img
        alt="Image"
        src={ImageData.image}
        className=" object-cover w-full h-[530px]"
      />
      <h3 className="p-2">{ImageData.caption}</h3>
    </div>
  );
};

export default PhotoCards;
