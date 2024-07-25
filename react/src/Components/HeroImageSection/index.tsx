import React from "react";

const HeroImageSection = () => {
  return (
    <header className="relative flex max-h-[201px] items-center justify-center overflow-hidden text-center sm:max-h-[429.83px] xl:max-h-[859px] 2xl:max-h-[1200px]">
      <img
        src="/images/hero-image.webp"
        alt="hero"
        className="-mb-3 object-cover xl:w-full"
        loading="lazy"
      />
      <div
        dir="rtl"
        className="
        absolute left-1/2
        top-1/2 flex w-fit
        -translate-x-1/2 -translate-y-1/2 select-none  items-center justify-center gap-1 self-center whitespace-nowrap rounded-2xl bg-white bg-white/50  px-[20px] py-[15.3px] text-base font-normal text-black backdrop-blur-sm sm:gap-2  sm:rounded-[38.59px] sm:px-8 sm:py-8  sm:text-4xl sm:text-[34px] sm:leading-[46.91px] xl:w-3/4 xl:gap-5 xl:rounded-full xl:py-16  xl:text-4xl"
      >
        <p>ברוכים הבאים לאתר של </p>
        <span className="font-source-serif-4  text-[#4A5759] lg:text-5xl lg:leading-[65.81px]">
          MAYART
        </span>
        <img
          className="size-3 sm:size-[29.94px] xl:size-8"
          src="/images/hero_section_heart.svg"
          alt="heart logo"
        />
      </div>
    </header>
  );
};

export default HeroImageSection;
