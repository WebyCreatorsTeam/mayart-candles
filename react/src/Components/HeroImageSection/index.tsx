import React from "react";

const HeroImageSection = () => {
  return (
    <div className="flex max-h-[201px] overflow-hidden">
      <img
        src="/images/hero-image.png"
        alt="hero"
        className="-mb-3 object-cover"
      />
    </div>
  );
};

export default HeroImageSection;
