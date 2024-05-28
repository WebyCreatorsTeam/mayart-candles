import React from "react";

const HeroImageSection = () => {
  return (
    <div className="bg-[fit:`cover`] relative flex max-h-[201px] items-center justify-center overflow-hidden text-center sm:max-h-[429.83px] lg:max-h-[859px]">
      <img
        src="/images/hero-image.png"
        alt="hero"
        className="-mb-3 object-cover"
      />
      <div
        dir="rtl"
        className="absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 self-center whitespace-nowrap rounded-2xl bg-white/50 px-[20px] py-[15.3px] text-base font-bold text-black  backdrop-blur-[2px]  sm:text-4xl"
      >
        <p>חג שמח! 50% על כל הנרות ב </p>
        <span className="text-[#4A5759]">MAYART</span>
        <img
          className="size-3"
          src="/images/Heart--Streamline-Core.svg"
          alt="heart logo"
        />
      </div>
    </div>
  );
};

export default HeroImageSection;
