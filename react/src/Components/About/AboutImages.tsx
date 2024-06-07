import React from "react";
import { aboutLoaderInformation } from "../../utils/types/about";

const AboutImages = ({
  images,
}: {
  images: aboutLoaderInformation["images"];
}) => {
  return (
    <div className="hidden lg:flex">
      {images.map((image, index) => (
        <img className="basis-1/3" key={index} src={image} />
      ))}
    </div>
  );
};

export default AboutImages;
