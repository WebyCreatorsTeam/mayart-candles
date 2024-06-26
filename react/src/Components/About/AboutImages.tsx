import React from "react";
import { aboutLoaderInformation } from "../../utils/types/about";

const AboutImages = ({
  images,
}: {
  images: aboutLoaderInformation["images"];
}) => {
  return (
    <div className="hidden flex-col gap-24 text-[32px] leading-[42.56px] xl:flex">
      מאחורי הקלעים של MAYART...
      <div className="justify-center gap-[47px] px-28 xl:flex">
        {images &&
          images.map((image, index) => (
            <div key={index} className="h-fit min-w-[400px]">
              <img
                className="object-cover"
                alt={`candle ${index}`}
                src={image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AboutImages;
