import React from "react";

const HeroImageSection = () => {
  return (
    <div
      className="flex  justify-center max-h-[201px] bg-[fit:`cover`] items-center overflow-hidden text-center sm:max-h-[429.83px] md:max-h-[859px]"
    >
      <img
        src="/images/hero-image.png"
        alt="hero"
        className="-mb-3 object-cover"
      />
      <p className="absolute  text-2xl font-bold text-white sm:text-4xl">
        MAYART חג שמח! 50% על כל הנרות ב ❤️
      </p>
    </div>
  );
};

export default HeroImageSection;
