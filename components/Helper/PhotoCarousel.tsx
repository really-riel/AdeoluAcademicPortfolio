"use client";
import React, { useMemo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PhotoCards from "../Helper/PhotoCards";
import ShuffleArray from "./ShuffleArray";

type Props = {
  gallery: {
    id: number;
    image: string;
    caption: string;
  }[];
};

const PhotoCarousel = ({ gallery }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const randomizedImages = useMemo(() => ShuffleArray(gallery), [gallery]);

  return (
    <section className="py-6 ">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        arrows={true}
      >
        {randomizedImages.map((item, index) => (
          <div className="" key={index}>
            <PhotoCards ImageData={item} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default PhotoCarousel;
