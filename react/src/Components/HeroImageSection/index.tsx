import React from "react";

const HeroImageSection = () => {
  return (
    <div className="bg-[fit:`cover`] relative flex max-h-[201px] items-center justify-center overflow-hidden text-center sm:max-h-[429.83px] lg:max-h-[859px]">
      {/* background */}
      <img
        src="/images/hero-image.png"
        alt="hero"
        className="-mb-3 object-cover"
      />
      <div
        dir="rtl"
        className="
        absolute
        left-1/2 top-1/2 flex
        w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 self-center whitespace-nowrap rounded-2xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/100 via-white/90 to-white/50 px-[20px] py-[15.3px] text-base font-normal text-white blur-sm sm:gap-2 sm:rounded-[38.59px] sm:px-8 sm:py-8 sm:text-4xl sm:text-[34px] sm:leading-[46.91px] lg:w-3/4 lg:gap-5 lg:rounded-full  lg:py-16  lg:text-4xl"
      >
        <p>חג שמח! 50% על כל הנרות ב </p>
        <span className="font-source-serif-4   lg:text-5xl lg:leading-[65.81px]">
          MAYART
        </span>
        <div className="size-3 bg-white sm:size-[29.94px] lg:size-8"></div>
      </div>
      {/* text */}
      <div
        dir="rtl"
        className="absolute
        left-1/2 top-1/2 flex
        w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 self-center whitespace-nowrap rounded-2xl px-[20px] py-[15.3px] text-base font-normal text-black  sm:gap-2 sm:rounded-[38.59px] sm:px-8 sm:py-8 sm:text-4xl sm:text-[34px] sm:leading-[46.91px] lg:w-3/4 lg:gap-5 lg:rounded-full  lg:py-16  lg:text-4xl"
      >
        <p>חג שמח! 50% על כל הנרות ב </p>
        <span className="font-source-serif-4  text-[#4A5759] lg:text-5xl lg:leading-[65.81px]">
          MAYART
        </span>
        <img
          className="size-3 sm:size-[29.94px] lg:size-8"
          src="/images/Heart--Streamline-Core.svg"
          alt="heart logo"
        />
      </div>
    </div>
  );
};

export default HeroImageSection;
