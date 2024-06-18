import React from "react";

const TelBtn = () => {
  return (
    <a
      className="flex items-center justify-center gap-4  whitespace-nowrap rounded-full bg-primary-pink px-[60px] py-[15px] align-middle text-2xl font-semibold text-white hover:bg-secondary-pink focus:bg-secondary-pink sm:gap-5 sm:px-16 sm:py-3 sm:text-3xl md:py-7 md:text-[58.86px] lg:h-[73px] lg:w-[379px] lg:text-[32px]"
      href="tel:+972 50-8122000"
    >
      <img
        src={"/icons/phone-icon.svg"}
        alt="phone-icon"
        className="sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-[43px] lg:w-[43px]"
      />
      050-8122000
    </a>
  );
};

export default TelBtn;
