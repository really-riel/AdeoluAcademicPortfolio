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
    <div className="rounded-t-2xl shadow bg-blue-200-50 overflow-hidden w-[355px]">
      <Image
        alt="Image"
        src={ImageData.image}
        className="overflow-hidden max-h-[650px] object-cover"
        width={355}
        height={150}
      />
      <h3>{ImageData.caption}</h3>
    </div>
  );
};

export default PhotoCards;
