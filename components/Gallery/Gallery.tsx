import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import PhotoCarousel from "../Helper/PhotoCarousel";
import { GalleryData, GraduationGallery } from "@/data";

const Gallery = () => {
  return (
    <div className="py-25">
      <SectionHeading title_1="Photo" title_2="gallery" />

      {GalleryData.map((data, index) => (
        <section key={index} className="">
          <h2 className="font-semibold text-2xl">{data.type}</h2>

          <PhotoCarousel gallery={data.galleryPhotos} />
        </section>
      ))}
    </div>
  );
};

export default Gallery;
